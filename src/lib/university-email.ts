// Heuristic check that an email address belongs to a university or college.
// It cannot prove affiliation; it filters out personal webmail and obvious non-academic domains.

const PERSONAL_PROVIDERS = new Set([
  'gmail.com',
  'googlemail.com',
  'outlook.com',
  'hotmail.com',
  'live.com',
  'msn.com',
  'yahoo.com',
  'yahoo.ca',
  'ymail.com',
  'icloud.com',
  'me.com',
  'mac.com',
  'aol.com',
  'proton.me',
  'protonmail.com',
  'gmx.com',
  'gmx.de',
  'mail.com',
  'zoho.com',
  'yandex.com',
  'yandex.ru',
  'qq.com',
  '163.com',
  '126.com',
  'sina.com',
  'naver.com',
  'hey.com',
  'fastmail.com',
  'tutanota.com',
  'rogers.com',
  'shaw.ca',
  'sympatico.ca',
  'bell.net',
  'telus.net',
]);

// Canadian universities mostly use plain .ca domains, which no pattern can recognise.
const CANADIAN_UNIVERSITIES = [
  'queensu.ca',
  'utoronto.ca',
  'ubc.ca',
  'mcgill.ca',
  'uwaterloo.ca',
  'uottawa.ca',
  'yorku.ca',
  'mcmaster.ca',
  'uwo.ca',
  'ivey.ca',
  'ualberta.ca',
  'ucalgary.ca',
  'sfu.ca',
  'concordia.ca',
  'dal.ca',
  'umanitoba.ca',
  'usask.ca',
  'uregina.ca',
  'uvic.ca',
  'carleton.ca',
  'torontomu.ca',
  'ryerson.ca',
  'wlu.ca',
  'uoguelph.ca',
  'brocku.ca',
  'unb.ca',
  'mun.ca',
  'ulaval.ca',
  'umontreal.ca',
  'hec.ca',
  'uqam.ca',
  'usherbrooke.ca',
  'ontariotechu.ca',
  'lakeheadu.ca',
  'laurentian.ca',
  'trentu.ca',
  'uwindsor.ca',
  'nipissingu.ca',
  'unbc.ca',
  'tru.ca',
  'stfx.ca',
  'smu.ca',
  'acadiau.ca',
  'mta.ca',
  'upei.ca',
  'uleth.ca',
  'mtroyal.ca',
  'macewan.ca',
  'athabascau.ca',
  'royalroads.ca',
  'kpu.ca',
  'ufv.ca',
  'uwinnipeg.ca',
  'brandonu.ca',
  'algomau.ca',
  'ocadu.ca',
  'ecuad.ca',
  'polymtl.ca',
  'etsmtl.ca',
  'inrs.ca',
  'uqtr.ca',
  'uqac.ca',
  'bishops.ca',
  'cbu.ca',
  'unbsj.ca',
  'stu.ca',
  'msvu.ca',
  'nscad.ca',
  'humber.ca',
  'senecapolytechnic.ca',
  'georgebrown.ca',
  'sheridancollege.ca',
  'algonquincollege.com',
  'bcit.ca',
];

// Labels that strongly suggest an academic institution, e.g. uni-mannheim.de, univ-paris1.fr.
const ACADEMIC_LABEL = /^(uni|univ|universit|college|school|polytechnic|polytechnique|polimi|institut|hochschule|politecnico)/i;
const EMAIL_SHAPE = /^[^\s@]+@([a-z0-9-]+\.)+[a-z]{2,}$/i;

function matchesDomain(domain: string, base: string): boolean {
  return domain === base || domain.endsWith(`.${base}`);
}

export function isUniversityEmail(email: string): boolean {
  const normalized = email.trim().toLowerCase();
  if (!EMAIL_SHAPE.test(normalized)) return false;

  const domain = normalized.split('@')[1];
  if (PERSONAL_PROVIDERS.has(domain)) return false;

  const labels = domain.split('.');
  const tld = labels[labels.length - 1];
  const secondLevel = labels[labels.length - 2];

  // example.edu, mail.example.edu
  if (tld === 'edu') return true;
  // example.ac.uk, example.edu.au, example.ac.jp
  if (labels.length >= 3 && (secondLevel === 'ac' || secondLevel === 'edu')) return true;
  if (CANADIAN_UNIVERSITIES.some((base) => matchesDomain(domain, base))) return true;

  return labels.slice(0, -1).some((label) => ACADEMIC_LABEL.test(label));
}
