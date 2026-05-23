import Button from "@/components/ui/Button";

const features = [
  {
    title: "Projects & tasks",
    description: "One place for specs, bugs, and chores.",
  },
  {
    title: "Kanban that stays fast",
    description: "Boards that feel instant, not sluggish.",
  },
  {
    title: "Built for developers",
    description: "Git-friendly workflow coming soon.",
  },
];

export default function LandingPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-24 text-center">
        <p className="text-sm font-medium text-brand mb-4">Built for dev teams</p>
        <h1 className="text-5xl font-semibold tracking-tight max-w-3xl mx-auto leading-tight">
          Ship work without the chaos
        </h1>
        <p className="mt-5 text-lg text-mkt-text-muted max-w-lg mx-auto">
          TaskFlow keeps your team&apos;s projects, tasks, and priorities in one
          fast workspace—without the enterprise bloat.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button variant="primary" href="/dashboard">
            Start free
          </Button>
          <Button variant="secondary" href="/pricing">
            View pricing
          </Button>
        </div>
        <div
          className="mt-16 h-72 max-w-3xl mx-auto rounded-[var(--radius-lg)] border border-mkt-border flex items-center justify-center text-mkt-text-muted text-sm"
          style={{
            background:
              "linear-gradient(135deg, var(--brand-muted) 0%, var(--mkt-bg) 50%, var(--mkt-border) 100%)",
          }}
        >
          Hero visual / product screenshot placeholder
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-[var(--radius-lg)] border border-mkt-border bg-mkt-surface p-7 shadow-sm"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-brand-muted text-brand text-lg">
              ◈
            </div>
            <h2 className="text-lg font-semibold">{feature.title}</h2>
            <p className="mt-2 text-sm text-mkt-text-muted">{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-[var(--radius-lg)] bg-brand-muted px-8 py-14 text-center">
          <h2 className="text-3xl font-semibold">Ready to focus?</h2>
          <div className="mt-6">
            <Button variant="primary" href="/dashboard">
              Get started
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
