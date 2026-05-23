import KanbanBoard from "@/components/app/KanbanBoard";
import NewTaskButton from "@/components/app/NewTaskButton";
import TaskStats from "@/components/app/TaskStats";
import { apiGetColumns, apiGetTasks } from "@/lib/api";
import { buildBoardColumns } from "@/lib/board";

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
