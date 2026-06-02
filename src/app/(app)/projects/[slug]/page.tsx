import { auth } from "@/auth";
import { apiGetProjects, apiGetTasks } from "@/lib/api";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function findProjectBySlug(
  projects: Awaited<ReturnType<typeof apiGetProjects>>,
  slug: string,
) {
  return projects.find((p) => p.slug === slug || String(p.id) === slug);
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const projects = await apiGetProjects();
  const project = findProjectBySlug(projects, slug);

  if (!project) {
    return { title: "Not found" };
  }

  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const { slug } = await params;
  const [projects, tasks] = await Promise.all([
    apiGetProjects(),
    apiGetTasks(),
  ]);

  const project = findProjectBySlug(projects, slug);
  if (!project) {
    notFound();
  }

  const projectTasks = tasks.filter(
    (task) => String(task.projectId) === String(project.id),
  );

  const isActive = project.status === "active";

  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <Link
        href="/projects"
        className="text-sm font-medium text-app-text-muted transition-colors hover:text-app-text"
      >
        ← Back to projects
      </Link>

      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-semibold tracking-tight">
            {project.name}
          </h1>
          <span
            className={
              isActive
                ? "rounded-full border border-(--success)/30 bg-(--success)/10 px-2.5 py-0.5 text-xs font-medium capitalize text-(--success)"
                : "rounded-full border border-app-border bg-app-elevated px-2.5 py-0.5 text-xs font-medium capitalize text-app-text-muted"
            }
          >
            {project.status}
          </span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-app-text-muted">
          {project.description}
        </p>
        <p className="mt-3 text-xs text-app-text-muted">
          {project.taskCount} task{project.taskCount === 1 ? "" : "s"} in this
          project
        </p>
      </header>

      <div className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-app-text-muted">
          Tasks
        </h2>

        {projectTasks.length === 0 ? (
          <p className="mt-4 rounded-lg border border-dashed border-app-border bg-app-surface px-4 py-8 text-center text-sm text-app-text-muted">
            No tasks yet for this project.
          </p>
        ) : (
          <ul className="mt-4 space-y-2">
            {projectTasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between gap-4 rounded-lg border border-app-border bg-app-elevated px-4 py-3"
              >
                <span className="text-sm font-medium">{task.title}</span>
                <span className="shrink-0 font-mono text-xs text-app-text-muted">
                  {task.columnId.replace("_", " ")}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="mt-10 text-xs text-app-text-muted">
        Full board view:{" "}
        <Link
          href="/dashboard"
          className="font-medium text-app-text underline-offset-2 hover:underline"
        >
          Dashboard
        </Link>
      </p>
    </section>
  );
}
