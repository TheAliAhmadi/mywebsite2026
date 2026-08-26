export const SITE = {
  title: 'Ali Ahmadi',
  description:
    'PhD Candidate in Management, Strategy at Smith School of Business, Queen’s University. Research on competitive dynamics, competitive surprise, and computational methods.',
  email: 'Ali.Ahmadi@queensu.ca',
  location: 'LL182, 143 Union Street, Goodes Hall, Kingston, Ontario, Canada',
  affiliation: 'Smith School of Business, Queen’s University',
  role: 'PhD Candidate in Management, Strategy',
  identityLine: 'Competitive Dynamics, Competitive Surprise, Computational Methods',
  cvHref: '/AliAhmadi_CV.pdf',
  liveCasesHref: 'https://livecases.org',
  jbrPaperHref: 'https://doi.org/10.1016/j.jbusres.2025.115947',
  workshopPdfHref: '/CodingWithAI_Workshop.pdf',
};

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/aliahmadi.__/',
  x: 'https://x.com/TheAliAhmadi',
  github: 'https://github.com/TheAliAhmadi',
  linkedin: 'https://www.linkedin.com/in/ali-ahmadi/',
};

export type ResearchIllustrationKind = 'surprise' | 'positioning' | 'dynamics';
export type ResearchCategory =
  | 'dissertation'
  | 'under-review'
  | 'working'
  | 'published'
  | 'presentation';

export interface ResearchItem {
  id: string;
  title: string;
  authors: string;
  summary: string;
  status: string;
  venue: string;
  tags: string[];
  categories: ResearchCategory[];
  illustration: ResearchIllustrationKind;
  featured: boolean;
  href?: string;
  linkLabel?: string;
  sortDate: string;
  rank: Partial<Record<'all' | ResearchCategory, number>>;
  presentationNote?: string;
}

export const RESEARCH_FILTERS: { id: 'all' | ResearchCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'dissertation', label: 'Dissertation' },
  { id: 'under-review', label: 'Under Review' },
  { id: 'working', label: 'Working Papers' },
  { id: 'published', label: 'Published' },
  { id: 'presentation', label: 'Presentations' },
];

export const researchItems: ResearchItem[] = [
  {
    id: 'surprise-capability',
    title: 'Antecedents and Performance Implications of Surprise Capability: An Empirical Analysis',
    authors: 'Ahmadi, A., Andrevski, G., & Miller, D.',
    summary:
      'An empirical study of surprise capability — why some firms surprise rivals more often than others — using NLP and large language models on more than 1.7 million news articles across ten industries.',
    status: 'Final edits',
    venue: 'Target: Academy of Management Journal',
    tags: ['Surprise Capability', 'Text Analysis'],
    categories: ['dissertation'],
    illustration: 'dynamics',
    featured: true,
    sortDate: '2026-07-01',
    rank: { all: 1, dissertation: 1 },
  },
  {
    id: 'competitive-surprise-theory',
    title: 'Competitive Surprise: A Theoretical Framework',
    authors: 'Andrevski, G., Ahmadi, A., & Miller, D.',
    summary:
      'A theoretical framework for competitive surprise: a firm-initiated move that is unexpected to rivals and other market participants, and how such surprises shape response time, effectiveness, and advantage.',
    status: 'R&R – Round 2',
    venue: 'Academy of Management Review',
    tags: ['Theory Development', 'Competitive Surprise'],
    categories: ['dissertation', 'under-review', 'presentation'],
    illustration: 'surprise',
    featured: true,
    sortDate: '2026-08-01',
    rank: { all: 2, dissertation: 2, 'under-review': 1, presentation: 1 },
    presentationNote:
      'Competitive Dynamics Conference, University of Virginia Darden School of Business, July 2026 — Best Paper Award. Also at the Strategic Management Society Conference, Berlin, 2026.',
  },
  {
    id: 'bodies-at-work',
    title: 'Bodies at Work: A Critical Review and Organizing Framework for a Corporeal Approach to Organization Studies',
    authors: 'Pimentel, E., Ahmadi, A., Bel Hadj Ali, S., & Ricci, L.',
    summary:
      'An integrative review of corporeality in organizational research, proposing a framework for how bodies shape work, power, and interaction.',
    status: 'Final edits',
    venue: 'Target: Journal of Management Studies',
    tags: ['Literature Review', 'Organization Studies'],
    categories: ['working'],
    illustration: 'dynamics',
    featured: false,
    sortDate: '2026-06-01',
    rank: { all: 3, working: 1 },
  },
  {
    id: 'surprise-response-time',
    title: 'Competitive Surprise and Rival Response Time: An Event Study',
    authors: 'Ahmadi, A., Andrevski, G., & Miller, D.',
    summary:
      'An event-study design linking surprising competitive actions to the time it takes rivals to respond, built from millions of news articles, embeddings, and identified action–reaction pairs.',
    status: 'Data analysis',
    venue: 'Target: Academy of Management Journal',
    tags: ['Event Study', 'Text Analysis', 'Response Time'],
    categories: ['working'],
    illustration: 'surprise',
    featured: false,
    sortDate: '2026-05-01',
    rank: { all: 4, working: 2 },
  },
  {
    id: 'ma-rationales',
    title: 'How Merger Announcements Shape Investor and Rival Responses: Insights from an AI Text Analysis',
    authors: 'Ahmadi, A. & Goudarzi, K.',
    summary:
      'How the clarity and variety of strategic rationales in M&A announcements relate to rival responses and deal outcomes, using an NLP and LLM pipeline on thousands of 8-K filings.',
    status: 'Data analysis',
    venue: 'Target: Academy of Management Journal',
    tags: ['M&A', 'Text Analysis', 'Rival Response'],
    categories: ['working'],
    illustration: 'dynamics',
    featured: false,
    sortDate: '2026-04-01',
    rank: { all: 5, working: 3 },
  },
  {
    id: 'surprise-case-study',
    title: 'Competitive Surprise: A Multiple Case Study',
    authors: 'Ahmadi, A. & Andrevski, G.',
    summary:
      'A qualitative study of how firms experience and respond to competitive surprises across industry contexts. Ethics approved; participant recruitment is underway.',
    status: 'Fieldwork',
    venue: 'Multiple case study',
    tags: ['Qualitative', 'Case Method', 'Competitive Surprise'],
    categories: ['working'],
    illustration: 'surprise',
    featured: false,
    sortDate: '2026-03-01',
    rank: { all: 6, working: 4 },
  },
  {
    id: 'f1-departures',
    title: 'Anticipated Departures and Team Investment: A Longitudinal Archival Study in Formula 1 Racing',
    authors: 'Ahmadi, A. & Somerville, K.',
    summary:
      'How anticipated personnel departures relate to team investment, using a longitudinal archival dataset from Formula 1.',
    status: 'Data analysis',
    venue: 'Archival study',
    tags: ['Archival Data', 'Anticipated Departures'],
    categories: ['working'],
    illustration: 'dynamics',
    featured: false,
    sortDate: '2026-02-01',
    rank: { all: 7, working: 5 },
  },
  {
    id: 'positioning-threats',
    title: 'From Protection to Adjustment: How Rival Repositioning Alters Competitive Action Repertoires',
    authors: 'Goudarzi, K., Ahmadi, A., & Andrevski, G.',
    summary:
      'How firms change the intensity, complexity, and non-conformity of their competitive actions when rivals encroach on their product-market position, introducing a protection–adjustment account of repertoire change.',
    status: 'Published',
    venue: 'Journal of Business Research, 2026',
    tags: ['Positioning Threats', 'Competitive Repertoires'],
    categories: ['published'],
    illustration: 'positioning',
    featured: true,
    href: 'https://doi.org/10.1016/j.jbusres.2025.115947',
    linkLabel: 'Paper',
    sortDate: '2026-01-07',
    rank: { all: 8, published: 1 },
  },
  {
    id: 'dynamic-capabilities',
    title: 'Dynamic Capabilities and Innovation',
    authors: 'Ahmadi, A. & Arndt, F.',
    summary: 'Book chapter in Innovation, published by Routledge.',
    status: 'Published',
    venue: 'Routledge, 2022',
    tags: ['Innovation', 'Dynamic Capabilities'],
    categories: [],
    illustration: 'dynamics',
    featured: false,
    sortDate: '2022-01-01',
    rank: { all: 9 },
  },
  {
    id: 'team-performance-startups',
    title:
      'Team Performance and the Development of Iranian Digital Start-ups: The Mediating Role of Employee Voice',
    authors: 'Hosseini, E., Tajpour, M., Salamzadeh, A., & Ahmadi, A.',
    summary:
      'Book chapter in Managing Human Resources in SMEs and Start-ups: International Challenges and Solutions (pp. 109–140).',
    status: 'Published',
    venue: 'Book chapter, 2022',
    tags: ['Entrepreneurship', 'Teams'],
    categories: [],
    illustration: 'dynamics',
    featured: false,
    sortDate: '2022-01-02',
    rank: { all: 10 },
  },
  {
    id: 'arts-entrepreneurs',
    title: 'Arts Entrepreneurs in an Emerging Economy',
    authors: 'Toghraee, M. T., Ahmadi, A., & Salamzadeh, A.',
    summary:
      'Book chapter in Artisan and Handicraft Entrepreneurs: Past, Present, and Future (pp. 137–147). Springer.',
    status: 'Published',
    venue: 'Springer, 2022',
    tags: ['Entrepreneurship'],
    categories: [],
    illustration: 'dynamics',
    featured: false,
    sortDate: '2022-01-03',
    rank: { all: 11 },
  },
  {
    id: 'business-in-iraq',
    title: 'The Context for Business in Iraq',
    authors: 'Salamzadeh, A., Ahmadi, A., & Safar Kamel, A.',
    summary:
      'Book chapter in Understanding Contexts of Business in Western Asia: Land of Bazaars and High-Tech Booms (pp. 331–345).',
    status: 'Published',
    venue: 'Book chapter, 2022',
    tags: ['International Business'],
    categories: [],
    illustration: 'positioning',
    featured: false,
    sortDate: '2022-01-04',
    rank: { all: 12 },
  },
];

export const homeResearchCards = [
  {
    id: 'competitive-surprise-theory',
    title: 'Competitive Surprise',
    description:
      'Measuring and theorizing unexpected competitive moves, and how they shape rivalry, response, and performance.',
    illustration: 'surprise' as ResearchIllustrationKind,
    icon: 'chart' as const,
  },
  {
    id: 'positioning-threats',
    title: 'Positioning Threats',
    description:
      'How firms perceive and respond when rivals encroach on strategic positions in product and geographic space.',
    illustration: 'positioning' as ResearchIllustrationKind,
    icon: 'target' as const,
  },
  {
    id: 'surprise-capability',
    title: 'Competitive Dynamics',
    description:
      'How rivalry unfolds over time, and what sequences of competitive action imply for entry, response, and performance.',
    illustration: 'dynamics' as ResearchIllustrationKind,
    icon: 'nodes' as const,
  },
];

export const testimonials = [
  {
    quote:
      'As I look back on the three-month journey of learning, to be honest, initially I did not anticipate that this required Commerce course would provide me with such a memorable and rewarding experience.',
    attribution: 'COMM401 Student',
    meta: 'Smith School of Business',
  },
  {
    quote:
      'I found great value in our in-class discussions and mini-GPT exercises. The mini GPT exercises taught me the power of artificial intelligence and how generative AI can be utilized in decision-making and learning new concepts.',
    attribution: 'COMM401 Student',
    meta: 'Smith School of Business',
  },
  {
    quote:
      'The ChatGPT exercises were a practical way to experiment with these frameworks, reinforcing their application and relevance.',
    attribution: 'COMM401 Student',
    meta: 'Smith School of Business',
  },
  {
    quote:
      'I deeply appreciated the integration of GPT into the course curriculum and content. To me, it represents the future—our generation’s equivalent of the Internet and its revolutionary impact on how we gather and share information.',
    attribution: 'COMM401 Student',
    meta: 'Smith School of Business',
  },
  {
    quote:
      'This course showed me new ways to leverage my interest in data analytics and AI to create impactful business solutions and turn raw data into actionable insights through the many course visualization frameworks.',
    attribution: 'COMM401 Student',
    meta: 'Smith School of Business',
  },
  {
    quote:
      'I assumed Business and Corporate Strategy would follow the pattern of other Commerce courses: introducing strategy frameworks and applying them in hypothetical or simplified scenarios. However, I was surprised by the emphasis on practical, real-world applications. The use of GPT-based assignments, case studies, and AI tools brought a modern and dynamic element to the course, making the material feel relevant.',
    attribution: 'COMM401 Student',
    meta: 'Smith School of Business',
  },
  {
    quote:
      'The live cases gave us experience that no textbook could provide. Working on real company challenges was the highlight of my undergraduate education.',
    attribution: 'COMM401 Student',
    meta: 'Smith School of Business',
  },
  {
    quote:
      'Ali lectured the class with enthusiasm and a positive attitude. I wasn’t always excited to come to class, but when I got there, Ali’s good spirits made me excited to learn and listen.',
    attribution: 'COMM401 Student',
    meta: 'Smith School of Business',
  },
  {
    quote:
      'One of the best professors I have had throughout my entire time at the Smith School of Business. He was always so kind, helpful, and willing to answer any questions or clarify concepts. He made the class fun and interactive, which made me want to attend class and be present.',
    attribution: 'COMM401 Student',
    meta: 'Smith School of Business',
  },
];

export const teachingStats = [
  { icon: 'users' as const, value: '169', label: 'Students taught' },
  { icon: 'star' as const, value: '6.71 / 7', label: 'Teaching evaluation' },
  { icon: 'book' as const, value: '7', label: 'AI case studies' },
];

export const taCourses = [
  'Strategic Management (MBA, MBAS, MBUS, and EMBA with Cornell University)',
  'Corporate and Business Strategy',
  'Business for Good',
];
