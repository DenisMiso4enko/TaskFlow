"use server";

import { revalidatePath } from "next/cache";
import { API_BASE_URL } from "../constants";
import type { Priority } from "../types";

export type CreateTaskState =
  | { ok: true }
  | { ok: false; message: string }
  | null; // начальное состояние до первого submit

export async function createTask(
  _prevState: CreateTaskState,
  formData: FormData,
): Promise<CreateTaskState> {
  const title = String(formData.get("title") ?? "").trim();
  if (!title) {
    return { ok: false, message: "Title is required" };
  }

  const columnId = String(formData.get("columnId") ?? "todo");
  const assignee = String(formData.get("assignee") ?? "DK");
  const priority = String(formData.get("priority") ?? "medium") as Priority;
  const projectId = String(formData.get("projectId") ?? "website-redesign");

  const task = {
    id: `TF-${Date.now()}`,
    title,
    columnId,
    assignee,
    priority,
    projectId,
  };

  const response = await fetch(`${API_BASE_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    return { ok: false, message: "Failed to create task. Try again." };
  }

  revalidatePath("/dashboard");
  return { ok: true };
}

export async function deleteTask(
  _prevState: CreateTaskState,
  formData: FormData,
): Promise<CreateTaskState> {
  const taskId = String(formData.get("taskId") ?? "").trim();

  if (!taskId) {
    return { ok: false, message: "Task id is required" };
  }

  const id = encodeURIComponent(taskId);

  const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    return { ok: false, message: "Failed to delete task. Try again." };
  }

  revalidatePath("/dashboard");
  return { ok: true };
}

export async function updateTask(
  _prevState: CreateTaskState,
  formData: FormData,
): Promise<CreateTaskState> {
  const taskId = String(formData.get("taskId") ?? "").trim();
  const title = String(formData.get("title") ?? "").trim();
  const columnId = String(formData.get("columnId") ?? "").trim();
  const assignee = String(formData.get("assignee") ?? "").trim();

  if (!taskId) return { ok: false, message: "Task id is required" };
  if (!title) return { ok: false, message: "Title is required" };

  const patch: Record<string, unknown> = { title };
  if (columnId) patch.columnId = columnId;
  if (assignee) patch.assignee = assignee;

  const id = encodeURIComponent(taskId);

  const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patch),
  });

  if (!response.ok)
    return { ok: false, message: "Failed to update task. Try again." };
  revalidatePath("/dashboard");
  return { ok: true };
}
