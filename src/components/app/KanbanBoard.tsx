"use client";

import { useState } from "react";
import TaskCard from "./TaskCard";
import TaskSearch from "./TaskSearch";
import { BoardColumn } from "@/lib/types";

interface KanbanBoardProps {
  boardColumns: BoardColumn[];
}

export default function KanbanBoard({ boardColumns }: KanbanBoardProps) {
  const [query, setQuery] = useState("");
  const search = query.trim().toLowerCase();

  return (
    <div className="flex flex-col gap-4">
      <TaskSearch query={query} onChange={setQuery} />

      <div className="flex gap-4 overflow-x-auto pb-4">
        {boardColumns.map((column) => {
          const tasks = column.tasks.filter((task) => {
            if (!search) return true;
            return task.title.toLowerCase().includes(search);
          });

          return (
            <section
              key={column.id}
              className="w-72 shrink-0 rounded-md border border-app-border bg-app-surface p-3"
            >
              <h2 className="text-sm font-semibold">{column.title}</h2>
              <p className="mb-3 text-xs text-app-text-muted">
                {tasks.length} task{tasks.length === 1 ? "" : "s"}
              </p>
              <div className="space-y-2">
                {tasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
