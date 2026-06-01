"use client";

import Button from "@/components/ui/Button";
import type { Project } from "@/lib/types";
import Link from "next/link";
import { useState } from "react";

type ProjectsListProps = {
  initialProjects: Project[];
};

export default function ProjectsList({ initialProjects }: ProjectsListProps) {
  const [projects, setProjects] = useState(initialProjects);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleRefresh() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/projects/api");
      if (!res.ok) {
        throw new Error("Не удалось обновить список");
      }
      setProjects(await res.json());
    } catch {
      setError("Ошибка при запросе к /projects/api");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <Button
          type="button"
          variant="dark"
          size="small"
          onClick={handleRefresh}
          disabled={loading}
        >
          {loading ? "Загрузка…" : "Refresh"}
        </Button>
        <span className="text-xs text-app-text-muted">
          Первый раз — с сервера (Mokky), кнопка — через /projects/api
        </span>
        {error && (
          <p className="w-full text-sm text-(--danger)" role="alert">
            {error}
          </p>
        )}
      </div>

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
    </>
  );
}
