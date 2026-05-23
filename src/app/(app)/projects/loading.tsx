export default function ProjectsLoading() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="w-[280px] h-7 animate-pulse rounded bg-app-border/80 mb-6" />

      <div className="grid gap-4 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <article
            key={i}
            className="rounded-lg border border-app-border h-[106px] bg-app-elevated p-4"
          >
            <div className="h-5 w-2/3 animate-pulse rounded bg-app-border" />
            <div className="mt-3 h-4 w-full animate-pulse rounded bg-app-border/80" />
            <div className="mt-2 h-4 w-3/4 animate-pulse rounded bg-app-border/80" />
          </article>
        ))}
      </div>
    </section>
  );
}
