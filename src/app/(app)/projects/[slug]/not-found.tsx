import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-center">
      <h1 className="text-2xl font-semibold text-app-text">Project not found</h1>
      <p className="mt-2 text-sm text-app-text-muted">
        This project does not exist or was removed.
      </p>
      <Link
        href="/projects"
        className="mt-6 inline-block text-sm font-medium text-app-text underline-offset-2 hover:underline"
      >
        ← Back to projects
      </Link>
    </section>
  );
}
