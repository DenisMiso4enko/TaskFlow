export type Project = {
  id: string;
  name: string;
  slug: string;
  description: string;
  status: "active" | "planned";
  taskCount: number;
};

export type Priority = "low" | "medium" | "high";

export type Task = {
  id: string;
  title: string;
  priority: Priority;
  assignee: string;
  columnId: string;
  projectId: string;
};
export type BoardColumnMeta = {
  id: string;
  title: string;
  order: number;
};
export type BoardColumn = {
  id: string;
  title: string;
  tasks: Task[];
};
