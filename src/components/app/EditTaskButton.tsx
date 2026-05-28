"use client";

import { useActionState, useEffect, useRef } from "react";
import Button from "../ui/Button";
import { CreateTaskState, updateTask } from "@/lib/actions/tasks";
import { SubmitButton } from "./SubmitButton";
import { Task } from "@/lib/types";

const initialState: CreateTaskState = null;

export const EditTaskButton = ({
  onSuccess,
  task,
}: {
  onSuccess?: () => void;
  task: Task;
}) => {
  const [state, formAction] = useActionState(updateTask, initialState);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  useEffect(() => {
    if (state?.ok) {
      closeModal();
      onSuccess?.(); // closeModal из родителя
    }
  }, [state, onSuccess]);
  return (
    <>
      <Button variant="dark" type="button" onClick={openModal}>
        Edit
      </Button>

      <dialog
        ref={dialogRef}
        className="fixed inset-0 m-auto h-fit w-[calc(100%-2rem)] max-w-md rounded-lg border border-app-border bg-app-surface p-6 text-app-text shadow-xl backdrop:bg-black/50"
      >
        <h2 className="text-lg font-semibold">New task</h2>

        <form action={formAction} className="mt-4 flex flex-col gap-3">
          {state?.ok === false && (
            <p className="text-sm text-red-400" role="alert">
              {state.message}
            </p>
          )}
          <input type="hidden" name="taskId" value={task.id} />
          <label className="flex flex-col gap-1 text-sm">
            Title
            <input
              name="title"
              defaultValue={task.title}
              required
              className="rounded-md border border-app-border bg-app-elevated px-3 py-2"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm">
            Column
            <select
              name="columnId"
              defaultValue={task.columnId}
              className="rounded-md border border-app-border bg-app-elevated px-3 py-2"
            >
              <option value="todo">Todo</option>
              <option value="in_progress">In Progress</option>
              <option value="review">Review</option>
              <option value="done">Done</option>
            </select>
          </label>

          <label className="flex flex-col gap-1 text-sm">
            Title
            <input
              name="assignee"
              defaultValue={task.assignee}
              className="rounded-md border border-app-border bg-app-elevated px-3 py-2"
            />
          </label>

          <div className="mt-2 flex gap-2 justify-end">
            <Button variant="dark" type="button" onClick={closeModal}>
              Cancel
            </Button>
            <SubmitButton />
          </div>
        </form>
      </dialog>
    </>
  );
};
