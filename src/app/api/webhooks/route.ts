export async function POST(request: Request) {
  try {
    const body = await request.json();

    return Response.json({
      received: true,
      event: body.event ?? "unknown",
      processedAt: new Date().toISOString(),
    });
  } catch {
    return Response.json({ error: "Body must be valid JSON" }, { status: 400 });
  }
}
