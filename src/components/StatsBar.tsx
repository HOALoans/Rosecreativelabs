const stats = [
  { number: "3", label: "Signature programs" },
  { number: "K–8", label: "Age groups served" },
  { number: "M.Ed.", label: "Education credential" },
  { number: "STL", label: "City & county service area" },
];

export function StatsBar() {
  return (
    <div className="grid grid-cols-2 divide-x divide-y divide-border border-b border-border bg-cream sm:grid-cols-4 sm:divide-y-0">
      {stats.map((stat) => (
        <div key={stat.label} className="px-6 py-5 text-center">
          <div className="font-serif text-[26px] text-rose-mid">{stat.number}</div>
          <div className="mt-[3px] font-sans text-xs text-muted">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
