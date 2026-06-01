import KanbanBoard from "@/components/app/KanbanBoard";
import NewTaskButton from "@/components/app/NewTaskButton";
import TaskStats from "@/components/app/TaskStats";
import { apiGetColumns, apiGetTasks } from "@/lib/api";
import { buildBoardColumns } from "@/lib/board";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Board",
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  openGraph: {
    title: "TaskFlow",
    description: "Ship work without the chaos",
    url: "/",
    siteName: "TaskFlow",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png", // файл в public/og.png
        width: 1200,
        height: 630,
        alt: "TaskFlow preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TaskFlow",
    description: "Ship work without the chaos",
    images: ["/og.png"],
  },
};

export default async function DashboardPage() {
  const [columns, tasks] = await Promise.all([apiGetColumns(), apiGetTasks()]);
  const board = buildBoardColumns(columns, tasks);

  return (
    <div className="p-6">
      <TaskStats boardColumns={board} />

      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Board</h1>
        <NewTaskButton />
      </div>

      <KanbanBoard boardColumns={board} />
    </div>
  );
}
