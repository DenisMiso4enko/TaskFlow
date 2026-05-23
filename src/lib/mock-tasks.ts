export type Priority = "low" | "medium" | "high";

export type Task = {
  id: string;
  title: string;
  priority: Priority;
  assignee: string;
};

export type Column = {
  id: string;
  title: string;
  tasks: Task[];
};

export const boardColumns: Column[] = [
  {
    id: "todo",
    title: "Todo",
    tasks: [
      { id: "TF-1", title: "Set up repo", priority: "high", assignee: "DK" },
      { id: "TF-2", title: "Write README", priority: "low", assignee: "DK" },
    ],
  },
  {
    id: "in_progress",
    title: "In Progress",
    tasks: [
      {
        id: "TF-12",
        title: "Design routing docs",
        priority: "medium",
        assignee: "DK",
      },
    ],
  },
  {
    id: "review",
    title: "Review",
    tasks: [
      {
        id: "TF-8",
        title: "Landing hero copy",
        priority: "low",
        assignee: "DK",
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    tasks: [
      { id: "TF-0", title: "Init Next app", priority: "low", assignee: "DK" },
      { id: "TF-3", title: "Add Tailwind", priority: "low", assignee: "DK" },
    ],
  },
];

export const priorityDotClass: Record<Priority, string> = {
  low: "bg-app-text-muted",
  medium: "bg-[var(--warning)]",
  high: "bg-[var(--danger)]",
};
