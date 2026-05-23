"use server";

import { revalidatePath } from "next/cache";
import { API_BASE_URL } from "../constants";
import type { Priority } from "../types";

export async function createTask(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  if (!title) {
    throw new Error("Title is required");
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
    throw new Error("Failed to create task");
  }

  revalidatePath("/dashboard");
}
