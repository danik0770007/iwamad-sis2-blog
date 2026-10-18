export type BlogPost = {
  id: number;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string;
};

export const posts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with TypeScript",
    date: "2026-10-10",
    category: "TypeScript",
    summary: "Why type safety matters in large-scale React applications.",
    content:
      "TypeScript provides compile-time checking which dramatically reduces runtime errors. By declaring strict interfaces for props and states, teams can refactor with high confidence.",
  },
  {
    id: 2,
    title: "Declarative Routing with React Router",
    date: "2026-10-12",
    category: "Routing",
    summary:
      "Organizing nested routes, layouts, and dynamic URL parameters effectively.",
    content:
      "With React Router, your URL structure drives component rendering through layout routes and outlet containers, preventing unnecessary full-page refreshes.",
  },
  {
    id: 3,
    title: "Component State and Custom Hooks",
    date: "2026-10-15",
    category: "React",
    summary:
      "Managing isolated component behavior using useState and custom hooks.",
    content:
      "Local state allows individual cards or widgets to maintain their independent interactive states, like like counts or display toggles, without polluting global stores.",
  },
  {
    id: 4,
    title: "Automated Testing with Vitest and RTL",
    date: "2026-10-18",
    category: "Testing",
    summary: "Verifying UI behavior with React Testing Library and User Event.",
    content:
      "Component testing ensures users can interact with forms and buttons as intended, mocking route navigation with MemoryRouter to test boundary conditions.",
  },
  {
    id: 5,
    title: "CSS Tokens and Design Systems",
    date: "2026-10-20",
    category: "Styling",
    summary:
      "Creating a unified color palette and spacing system across pages.",
    content:
      "Design tokens make maintaining consistent palettes and spacing straightforward. They bridge the gap between design handoffs in Figma and reusable CSS classes.",
  },
];
