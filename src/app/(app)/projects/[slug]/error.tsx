"use client";

interface ProjectSlugErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ProjectSlugError({
  error,
  reset,
}: ProjectSlugErrorProps) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-xl font-semibold text-app-text">Project</h1>
      <p className="mt-4 text-sm text-app-text-muted">
        Could not load this project. Check your API URL or Mokky service.
      </p>
      <p className="mt-2 text-xs text-danger/90">{error.message}</p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-6 rounded-md border border-app-border bg-app-elevated px-4 py-2 text-sm text-app-text transition-colors hover:border-app-text-muted"
      >
        Try again
      </button>
    </section>
  );
}
