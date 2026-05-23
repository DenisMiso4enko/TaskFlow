import Button from "@/components/ui/Button";

const plans = [
  {
    name: "Free",
    price: "$0",
    subtitle: "Solo & side projects",
    features: ["2 projects", "50 tasks", "1 member"],
    cta: "Start free",
    variant: "secondary" as const,
    popular: false,
  },
  {
    name: "Team",
    price: "$12",
    priceNote: "/ user / mo",
    subtitle: "Small teams",
    features: ["Unlimited projects", "Roles & permissions", "API access"],
    cta: "Start trial",
    variant: "primary" as const,
    popular: true,
  },
  {
    name: "Business",
    price: "Custom",
    subtitle: "Larger orgs",
    features: ["SSO", "Audit log", "SLA"],
    cta: "Contact sales",
    variant: "secondary" as const,
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold tracking-tight">
          Simple pricing for growing teams
        </h1>
        <p className="mt-3 text-mkt-text-muted max-w-xl mx-auto">
          Start free. Upgrade when you need more seats and projects.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`relative rounded-[var(--radius-lg)] border bg-mkt-surface p-8 ${
              plan.popular
                ? "border-brand shadow-[0_0_0_1px_var(--brand)]"
                : "border-mkt-border"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                Popular
              </span>
            )}
            <h2 className="text-lg font-semibold">{plan.name}</h2>
            <p className="text-sm text-mkt-text-muted mt-1">{plan.subtitle}</p>
            <p className="mt-6 text-4xl font-semibold">
              {plan.price}
              {plan.priceNote && (
                <span className="text-sm font-normal text-mkt-text-muted ml-1">
                  {plan.priceNote}
                </span>
              )}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-mkt-text-muted border-t border-mkt-border pt-6">
              {plan.features.map((feature) => (
                <li key={feature} className="py-1 border-b border-mkt-border last:border-0">
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button variant={plan.variant} href="/dashboard" className="w-full">
                {plan.cta}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
