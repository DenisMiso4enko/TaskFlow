import ProjectsList from "@/components/app/ProjectsList";
import { apiGetProjects } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  const projects = await apiGetProjects();

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="mb-6 text-xl font-semibold">Projects</h1>
      <ProjectsList initialProjects={projects} />
    </section>
  );
}
