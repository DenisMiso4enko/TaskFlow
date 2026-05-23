export type BlogPost = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "introducing-taskflow",
    date: "Mar 12, 2026",
    title: "Introducing TaskFlow",
    excerpt: "Why we built a faster home for dev team tasks.",
    content: [
      "We started TaskFlow because our team was juggling issues across three tools. Nothing felt fast enough for daily standups.",
      "The goal is simple: one workspace for projects, tasks, and priorities—without enterprise bloat.",
      "This post is the beginning of that story. More engineering notes soon.",
    ],
  },
  {
    slug: "kanban-performance",
    date: "Feb 28, 2026",
    title: "Making boards feel instant",
    excerpt: "Notes on rendering and optimistic updates.",
    content: [
      "Kanban boards fail when every drag triggers a full refetch. We are designing around local state first.",
      "Server Components help with the initial render; mutations will use Server Actions in a later module.",
      "Perceived speed matters as much as raw milliseconds.",
    ],
  },
  {
    slug: "roadmap-q2",
    date: "Feb 10, 2026",
    title: "Q2 roadmap preview",
    excerpt: "Git integrations, notifications, and API.",
    content: [
      "Q2 focuses on integrations: webhooks, Git linking, and a public API for automation.",
      "Notifications will start with in-app feeds, then email digests.",
      "We will share RFCs in the blog as features take shape.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
