import { API_BASE_URL } from "./constants";
import { BoardColumnMeta, Project, Task } from "./types";

export async function apiGetProjects(): Promise<Project[]> {
  const res = await fetch(`${API_BASE_URL}/projects`, {
    next: { revalidate: 60 },
  });
  // await new Promise((r) => setTimeout(r, 2000));
  //   throw new Error("Test error");

  if (!res.ok) throw new Error("Failed to fetch projects");

  return res.json();
}

export async function apiGetColumns(): Promise<BoardColumnMeta[]> {
  const res = await fetch(`${API_BASE_URL}/columns`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to fetch columns");
  return res.json();
}

export async function apiGetTasks(): Promise<Task[]> {
  const res = await fetch(`${API_BASE_URL}/tasks`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to fetch tasks");
  return res.json();
}
