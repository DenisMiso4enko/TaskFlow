import { Priority, priorityDotClass, Task } from "@/lib/mock-tasks";

export default function TaskCard({ task }: { task: Task }) {
  return (
    <article className="rounded-lg border border-app-border bg-app-elevated p-3">
      <div className="flex gap-2">
        <span
          className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${priorityDotClass[task.priority]}`}
          aria-hidden
        />
        <p className="text-sm leading-snug">{task.title}</p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-mono text-xs text-app-text-muted">{task.id}</span>
        <span
          className="flex h-6 w-6 items-center justify-center rounded-full bg-app-border text-[10px] font-medium"
          aria-label={`Assignee ${task.assignee}`}
        >
          {task.assignee}
        </span>
      </div>
    </article>
  );
}
