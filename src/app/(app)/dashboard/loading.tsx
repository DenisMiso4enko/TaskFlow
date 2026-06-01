export default function DashboardLoading() {
  return (
    <div className="p-6" aria-busy="true" aria-label="Loading board">
      {/* TaskStats skeleton */}
      <section className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border border-app-border bg-app-elevated px-4 py-3"
          >
            <div className="h-3 w-16 animate-pulse rounded bg-app-border/80" />
            <div className="mt-3 h-8 w-10 animate-pulse rounded bg-app-border" />
          </div>
        ))}
      </section>

      {/* Header + New task button */}
      <div className="mb-6 flex items-center justify-between">
        <div className="h-7 w-24 animate-pulse rounded bg-app-border/80" />
        <div className="h-9 w-28 animate-pulse rounded-md bg-app-border" />
      </div>

      {/* Search */}
      <div className="mb-4 flex justify-center">
        <div className="h-10 w-full max-w-sm animate-pulse rounded-lg bg-app-border/80" />
      </div>

      {/* Kanban columns */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {Array.from({ length: 4 }).map((_, colIndex) => (
          <section
            key={colIndex}
            className="w-72 shrink-0 rounded-md border border-app-border bg-app-surface p-3"
          >
            <div className="h-4 w-24 animate-pulse rounded bg-app-border" />
            <div className="mb-3 mt-2 h-3 w-14 animate-pulse rounded bg-app-border/80" />
            <div className="space-y-2">
              {Array.from({ length: colIndex === 1 ? 2 : 3 }).map((_, cardIndex) => (
                <article
                  key={cardIndex}
                  className="rounded-lg border border-app-border bg-app-elevated p-3"
                >
                  <div className="h-7 w-14 animate-pulse rounded bg-app-border/80" />
                  <div className="mt-3 flex gap-2">
                    <div className="mt-1.5 h-2 w-2 shrink-0 animate-pulse rounded-full bg-app-border" />
                    <div className="h-4 flex-1 animate-pulse rounded bg-app-border" />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="h-3 w-12 animate-pulse rounded bg-app-border/80" />
                    <div className="h-6 w-6 animate-pulse rounded-full bg-app-border" />
                  </div>
                  <div className="mt-2 h-4 w-16 animate-pulse rounded bg-app-border/80" />
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
