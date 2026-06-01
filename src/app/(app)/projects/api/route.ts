import { API_BASE_URL } from "@/lib/constants";

export async function GET() {
  const res = await fetch(`${API_BASE_URL}/projects`, {
    next: { tags: ["projects"], revalidate: 60 },
  });

  if (!res.ok) {
    return Response.json(
      { error: "Failed to fetch projects" },
      { status: 502 },
    );
  }

  const data = await res.json();
  return Response.json(data);
}
