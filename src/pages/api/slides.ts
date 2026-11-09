import type { APIRoute } from 'astro';
import { downloaderRoles, workshops } from '../../data/content';
import { isUniversityEmail } from '../../lib/university-email';

export const prerender = false;

// Each download request is stored in KV under log/ and emailed through the "Slide downloads" Formspree form.
// That form must keep reCAPTCHA disabled, because the submission comes from the server.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjyyqkjv';
const LOG_PREFIX = 'log/';

function field(form: FormData, name: string): string {
  const value = form.get(name);
  return typeof value === 'string' ? value.trim() : '';
}

function failure(request: Request, status: number, message: string): Response {
  if (request.headers.get('accept')?.includes('application/json')) {
    return Response.json({ error: message }, { status });
  }
  return new Response(`${message}\n\nPlease go back to https://aliahmadi.site/teaching/#workshops and try again.`, {
    status,
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}

async function emailRequest(entry: Record<string, string>): Promise<void> {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({ _subject: `Slide download: ${entry.workshop}`, ...entry }),
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) console.error('Formspree rejected slide request', response.status, await response.text());
  } catch (error) {
    console.error('Could not email slide request', error);
  }
}

async function logRequest(slides: KVNamespace, entry: Record<string, string>): Promise<void> {
  try {
    await slides.put(`${LOG_PREFIX}${entry.requested_at}-${crypto.randomUUID().slice(0, 8)}`, JSON.stringify(entry));
  } catch (error) {
    console.error('Could not store slide request', error);
  }
}

export const POST: APIRoute = async ({ request, locals }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return failure(request, 400, 'The form could not be read.');
  }

  // Bots fill every field, including this hidden one.
  if (field(form, 'website')) return failure(request, 400, 'The form could not be submitted.');

  const workshop = workshops.find((item) => item.id === field(form, 'workshop'));
  const email = field(form, 'email').toLowerCase();
  const role = field(form, 'role');

  if (!workshop) return failure(request, 400, 'Please choose a workshop.');
  if (!isUniversityEmail(email)) {
    return failure(
      request,
      400,
      'Please use your university or college email address. If yours is not recognised, email Ali.Ahmadi@queensu.ca.',
    );
  }
  if (!downloaderRoles.includes(role)) {
    return failure(request, 400, 'Please tell me whether you are an undergraduate student, graduate student, or professor.');
  }

  const { env, ctx } = locals.runtime;
  const slides = await env.SLIDES.get(`${workshop.id}.pdf`, 'stream');
  if (!slides) return failure(request, 503, 'These slides are temporarily unavailable.');

  const entry = {
    requested_at: new Date().toISOString(),
    workshop: workshop.title,
    email,
    role,
    country: String(locals.runtime.cf?.country ?? ''),
  };
  // Logging finishes after the response so it never delays or blocks a valid download.
  ctx.waitUntil(Promise.all([logRequest(env.SLIDES, entry), emailRequest(entry)]));

  return new Response(slides, {
    headers: {
      'content-type': 'application/pdf',
      'content-disposition': `attachment; filename="${workshop.downloadName}"`,
      'cache-control': 'no-store',
      'x-robots-tag': 'noindex',
    },
  });
};
