"use client";

import { useFormStatus } from "react-dom";
import Button from "@/components/ui/Button";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      variant="primary"
      type="submit"
      disabled={pending}
      aria-busy={pending}
    >
      {pending ? "Creating…" : "Create task"}
    </Button>
  );
}
