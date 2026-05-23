import { BoardColumn } from "@/lib/types";

interface TaskStateProps {
  boardColumns: BoardColumn[];
}

export default function TaskStats({ boardColumns }: TaskStateProps) {
  const totalTasks = boardColumns.reduce(
    (sum, column) => sum + column.tasks.length,
    0,
  );

  return (
    <section
      aria-label="Task statistics"
      className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
    >
      <StatCard label="Total" value={totalTasks} />
      {boardColumns.map((column) => (
        <StatCard
          key={column.id}
          label={column.title}
          value={column.tasks.length}
        />
      ))}
    </section>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-app-border bg-app-elevated px-4 py-3">
      <p className="text-xs font-medium uppercase tracking-wide text-app-text-muted">
        {label}
      </p>
      <p className="mt-1 text-2xl font-semibold tabular-nums">{value}</p>
    </div>
  );
}
