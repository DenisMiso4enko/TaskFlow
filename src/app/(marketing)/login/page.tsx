import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();

  if (session) redirect("/dashboard");

  async function login(formData: FormData) {
    "use server";
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: "/dashboard",
    });
  }

  return (
    <form action={login}>
      <input name="email" type="email" />
      <input name="password" type="password" />
      <button type="submit">Sign in</button>
    </form>
  );
}
