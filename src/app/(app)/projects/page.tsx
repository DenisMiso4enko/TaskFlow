import { apiGetProjects } from "@/lib/api";

export default async function ProjectsPage() {
  const projects = await apiGetProjects();

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="mb-6 text-xl font-semibold">Projects</h1>
      <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.id}
          className="rounded-lg border border-app-border bg-app-elevated p-4"
        >
          <h2 className="font-semibold">{project.name}</h2>
          <p className="mt-1 text-sm text-app-text-muted">
            {project.description}
          </p>
          <p className="mt-2 text-xs text-app-text-muted">
            {project.status} · {project.taskCount} tasks
          </p>
        </article>
      ))}
      </div>
    </section>
  );
}
