"use client";

interface TaskSearchProps {
  query: string;
  onChange: (query: string) => void;
}

export default function TaskSearch({ query, onChange }: TaskSearchProps) {
  return (
    <div className="relative flex-1 w-full items-center justify-center">
      <input
        value={query}
        onChange={(e) => onChange(e.target.value)}
        type="search"
        placeholder="Search tasks…"
        className="mx-auto max-w-sm flex-1 rounded-lg border border-app-border bg-app-elevated px-3 py-2 text-sm text-app-text-muted placeholder:text-app-text-muted/70"
      />
      {query.length > 0 && (
        <p className="absolute top-full left-0 mt-2 text-xs text-app-text-muted">
          Searching for: <span className="text-app-text">{query}</span>
        </p>
      )}
    </div>
  );
}
