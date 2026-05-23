import type { BoardColumn, BoardColumnMeta, Task } from "./types";

export function buildBoardColumns(
  columns: BoardColumnMeta[],
  tasks: Task[],
): BoardColumn[] {
  return [...columns]
    .sort((a, b) => a.order - b.order)
    .map((column) => ({
      id: column.id,
      title: column.title,
      tasks: tasks.filter((task) => task.columnId === column.id),
    }));
}
