"use client";

import { useFormStatus } from "react-dom";

export const DeleteTaskButton = () => {
  const { pending } = useFormStatus();

  return (
    <button className="cursor-pointer" type="submit" disabled={pending}>
      {pending ? "Deleting...." : "Delete X"}
    </button>
  );
};
