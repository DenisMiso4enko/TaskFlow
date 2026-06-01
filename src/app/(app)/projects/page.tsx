import { apiGetProjects } from "@/lib/api";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  const projects = await apiGetProjects();

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="mb-6 text-xl font-semibold">Projects</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.id}
            className="block rounded-lg border border-app-border bg-app-elevated p-4 transition-colors hover:border-app-text-muted"
          >
            <h2 className="font-semibold">{project.name}</h2>
            <p className="mt-1 text-sm text-app-text-muted">
              {project.description}
            </p>
            <p className="mt-2 text-xs text-app-text-muted">
              {project.status} · {project.taskCount} tasks
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
