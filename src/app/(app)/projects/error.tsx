"use client";

interface ProjectsErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ProjectsError({ error, reset }: ProjectsErrorProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-xl font-semibold text-app-text">Projects</h1>
      <p className="mt-4 text-sm text-app-text-muted">
        Could not load projects. Check your API URL or Mokky service.
      </p>
      <p className="mt-2 text-xs text-danger/90">{error.message}</p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-6 rounded-md border border-app-border bg-app-elevated px-4 py-2 text-sm text-app-text hover:border-app-text-muted transition-colors"
      >
        Try again
      </button>
    </section>
  );
}
