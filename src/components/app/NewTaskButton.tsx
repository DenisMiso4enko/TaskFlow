"use client";

import { createTask } from "@/lib/actions/tasks";
import { useRef } from "react";
import Button from "@/components/ui/Button";

export default function NewTaskButton() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  return (
    <>
      <Button variant="dark" type="button" onClick={openModal}>
        + New task
      </Button>

      <dialog
        ref={dialogRef}
        className="fixed inset-0 m-auto h-fit w-[calc(100%-2rem)] max-w-md rounded-lg border border-app-border bg-app-surface p-6 text-app-text shadow-xl backdrop:bg-black/50"
      >
        <h2 className="text-lg font-semibold">New task</h2>

        <form
          action={createTask}
          className="mt-4 flex flex-col gap-3"
          onSubmit={() => closeModal()}
        >
          <label className="flex flex-col gap-1 text-sm">
            Title
            <input
              name="title"
              required
              className="rounded-md border border-app-border bg-app-elevated px-3 py-2"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm">
            Column
            <select
              name="columnId"
              defaultValue="todo"
              className="rounded-md border border-app-border bg-app-elevated px-3 py-2"
            >
              <option value="todo">Todo</option>
              <option value="in_progress">In Progress</option>
              <option value="review">Review</option>
              <option value="done">Done</option>
            </select>
          </label>

          <input type="hidden" name="assignee" value="DK" />
          <input type="hidden" name="priority" value="medium" />
          <input type="hidden" name="projectId" value="website-redesign" />

          <div className="mt-2 flex gap-2 justify-end">
            <Button variant="dark" type="button" onClick={closeModal}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Create task
            </Button>
          </div>
        </form>
      </dialog>
    </>
  );
}
