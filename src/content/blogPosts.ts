export type BlogBodyBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] };

export interface BlogPost {
  title: string;
  articleTitle?: string;
  slug: string;
  category: string;
  image?: string;
  imageAlt?: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  published: boolean;
  body: BlogBodyBlock[];
}

export const blogCategories = [
  'Software Development',
  'AI & Automation',
  'Product Building',
  'DevOps',
  'Digital Marketing',
];

export const blogPosts: BlogPost[] = [
  {
    title: 'Why Most Software Projects Run Late (and How to Keep Yours on Schedule)',
    slug: 'why-most-software-projects-run-late',
    category: 'Product Building',
    image: '/fi.png',
    imageAlt: 'Why software projects run late and how to keep them on schedule',
    excerpt:
      'Late projects are rarely a coding problem. They are a planning and communication problem. Here is how we prevent it.',
    author: 'Hammad Ahmad',
    date: '2026-11-17',
    readTime: '4 min',
    featured: true,
    published: true,
    body: [
      {
        type: 'paragraph',
        text: 'When a software project runs late, people usually blame the code. In our experience, the code is rarely the real problem. Delays almost always begin long before development does.',
      },
      { type: 'heading', text: '1. The scope was never really defined.' },
      {
        type: 'paragraph',
        text: '“We need an app like Uber” isn’t a scope. It’s a wish. When features are vague, everyone imagines something different, and the gap shows up halfway through the build as “extra” work. The fix is a written scope that lists exactly what is included, and just as important, what is not.',
      },
      { type: 'heading', text: '2. Decisions take too long.' },
      {
        type: 'paragraph',
        text: 'Developers can only move as fast as feedback arrives. If a design approval sits for two weeks, the schedule moves two weeks. Name one decision-maker on your side and agree on response times at the start.',
      },
      { type: 'heading', text: '3. Changes arrive without a plan.' },
      {
        type: 'paragraph',
        text: 'New ideas are healthy, but each one has a cost. Without a change process, small additions quietly pile up. A simple rule works well: every new request gets a quick estimate of time and cost before it is approved.',
      },
      { type: 'heading', text: '4. Nobody sees progress until the end.' },
      {
        type: 'paragraph',
        text: 'Long silent stretches hide problems. Short milestones with regular demos catch misunderstandings while they are still cheap to fix.',
      },
      { type: 'heading', text: '5. Launch is treated as an afterthought.' },
      {
        type: 'paragraph',
        text: 'Testing, deployment, and app store reviews take real time. Plan for them from day one, not the last week.',
      },
      { type: 'heading', text: 'How we keep projects on track' },
      {
        type: 'paragraph',
        text: 'We define scope in writing, break work into milestones, show progress often, and tell clients early when something is at risk. None of it is complicated. It just takes discipline.',
      },
      {
        type: 'paragraph',
        text: 'If you’re planning a project and want a realistic timeline, we’re happy to talk it through.',
      },
    ],
  },
  {
    title: '25 Business Tasks You Can Automate With AI This Month',
    articleTitle: '5 Business Tasks You Can Automate With AI This Month',
    slug: 'business-tasks-you-can-automate-with-ai',
    category: 'AI & Automation',
    image: '/25.png',
    imageAlt: 'Business tasks that can be automated with AI',
    excerpt: 'You don’t need a big AI budget to save hours every week. Start with these five tasks.',
    author: 'Hammad Ahmad',
    date: '2026-11-14',
    readTime: '4 min',
    featured: false,
    published: true,
    body: [
      {
        type: 'paragraph',
        text: 'You don’t need a huge budget or a data science team to benefit from AI. Some of the best returns come from automating small, repetitive tasks. Here are five worth starting with.',
      },
      { type: 'heading', text: '1. Answering common customer questions.' },
      {
        type: 'paragraph',
        text: 'An AI assistant on your website or WhatsApp can handle the questions you answer every day: pricing, hours, availability, how things work. It responds instantly, at any hour, and hands harder conversations to a human.',
      },
      { type: 'heading', text: '2. Capturing and following up with leads.' },
      {
        type: 'paragraph',
        text: 'Leads go cold when follow-up is slow. Automation can log every new inquiry, send an instant reply, and remind your team to follow up, so no opportunity slips through.',
      },
      { type: 'heading', text: '3. Booking appointments.' },
      {
        type: 'paragraph',
        text: 'Back-and-forth scheduling wastes time. A booking assistant can check availability, confirm the slot, and send reminders, which also helps reduce no-shows.',
      },
      { type: 'heading', text: '4. Summarizing meetings and documents.' },
      {
        type: 'paragraph',
        text: 'AI can turn a long call or report into short notes and action items. Your team spends less time writing summaries and more time acting on them.',
      },
      { type: 'heading', text: '5. Drafting routine content and reports.' },
      {
        type: 'paragraph',
        text: 'First drafts of emails, product descriptions, and weekly reports can be generated and then reviewed by a person. You keep the quality and skip the blank page.',
      },
      { type: 'heading', text: 'A word of caution' },
      {
        type: 'paragraph',
        text: 'AI makes mistakes. Always keep a human in the loop for anything customer-facing or high-stakes, and be clear with customers when they are talking to an automated system.',
      },
      { type: 'heading', text: 'Where to start' },
      {
        type: 'paragraph',
        text: 'Pick the one task that costs your team the most hours each week and automate that first. Small, working automation beats a grand plan that never ships.',
      },
    ],
  },
  {
    title: 'Website, Web App, or Mobile App: Which Should You Build First?',
    slug: 'website-web-app-or-mobile-app',
    category: 'Software Development',
    image: '/w.png',
    imageAlt: 'Choosing between a website, web app, or mobile app',
    excerpt: 'Three platforms, one budget. Here’s a simple way to decide what to build first.',
    author: 'Hammad Ahmad',
    date: '2026-11-11',
    readTime: '4 min',
    featured: false,
    published: true,
    body: [
      {
        type: 'paragraph',
        text: 'Founders often ask us the same question: “Should I build a website, a web app, or a mobile app?” The right answer depends on what you need to prove first.',
      },
      { type: 'heading', text: 'Start with a website if...' },
      {
        type: 'paragraph',
        text: 'You need to explain what you do, build trust, and collect leads. A fast, clear website is the cheapest way to get in front of customers and start learning what they respond to.',
      },
      { type: 'heading', text: 'Start with a web app if...' },
      {
        type: 'paragraph',
        text: 'Your product is a tool people log into, such as dashboards, booking systems, internal software, or SaaS. A web app works on every device with no installation, is easier to update, and is usually faster and cheaper to launch than a native mobile app.',
      },
      { type: 'heading', text: 'Start with a mobile app if...' },
      {
        type: 'paragraph',
        text: 'Your product depends on phone features like camera, GPS, push notifications, or offline use, or if your customers spend most of their time on their phones, as with ride, delivery, or on-the-go services.',
      },
      { type: 'heading', text: 'A practical path for most startups' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Launch a simple website to validate demand.',
          'Build a focused web app (or a minimal first version) to test the product.',
          'Add a mobile app once real users are asking for it.',
        ],
      },
      { type: 'heading', text: 'The biggest mistake' },
      {
        type: 'paragraph',
        text: 'Building everything at once. Each platform adds cost and complexity. Launch the smallest version that proves your idea, learn from real users, then expand.',
      },
      {
        type: 'paragraph',
        text: 'Not sure where your idea fits? Tell us about it and we’ll give you an honest recommendation, even if it means starting smaller than you expected.',
      },
    ],
  },
  {
    title: 'DevOps Explained: Why Founders Should Care About Deployments',
    slug: 'devops-explained-for-founders',
    category: 'DevOps',
    image: '/dev.png',
    imageAlt: 'DevOps deployments explained for founders',
    excerpt: 'Smooth, safe releases are a business advantage. Here’s what DevOps really means for you.',
    author: 'Hammad Ahmad',
    date: '2026-11-20',
    readTime: '5 min',
    featured: false,
    published: false,
    body: [],
  },
  {
    title: 'Why Authentic UGC Ads Beat Polished Commercials',
    slug: 'why-authentic-ugc-ads-work',
    category: 'Digital Marketing',
    image: '/ugc.png',
    imageAlt: 'Authentic user-generated content ads for digital marketing',
    excerpt: 'People trust people. Here’s why creator-style ads outperform glossy production for many brands.',
    author: 'Hammad Ahmad',
    date: '2026-11-24',
    readTime: '4 min',
    featured: false,
    published: false,
    body: [],
  },
  {
    title: 'How to Choose a Software Partner You Can Trust',
    slug: 'how-to-choose-a-software-partner',
    category: 'Product Building',
    image: '/pat.png',
    imageAlt: 'Choosing a trustworthy software development partner',
    excerpt: 'Price is the easy part to compare. Here’s what actually separates a great partner from a risky one.',
    author: 'Hammad Ahmad',
    date: '2026-11-28',
    readTime: '5 min',
    featured: false,
    published: false,
    body: [],
  },
];
