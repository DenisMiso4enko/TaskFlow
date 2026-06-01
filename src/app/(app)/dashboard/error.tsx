"use client";

interface DashboardErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function DashboardError({ error, reset }: DashboardErrorProps) {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold text-app-text">Board</h1>
      <p className="mt-4 text-sm text-app-text-muted">
        Could not load the board. Check your API URL or Mokky service.
      </p>
      <p className="mt-2 text-xs text-danger/90">{error.message}</p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-6 rounded-md border border-app-border bg-app-elevated px-4 py-2 text-sm text-app-text transition-colors hover:border-app-text-muted"
      >
        Try again
      </button>
    </div>
  );
}
