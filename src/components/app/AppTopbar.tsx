export default function AppTopbar() {
  return (
    <header className="flex h-(--topbar-height) shrink-0 items-center gap-4 border-b border-app-border px-6">
      <span className="text-sm font-medium">Website redesign ▾</span>

      <div
        className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white"
        aria-label="User menu"
      >
        DK
      </div>
    </header>
  );
}
