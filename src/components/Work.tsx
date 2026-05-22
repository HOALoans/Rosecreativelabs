const projects = [
  {
    title: "Bloom & Co.",
    category: "Brand Identity",
    description: "Full rebrand for a boutique floral studio.",
  },
  {
    title: "Northwind",
    category: "Digital Experience",
    description: "Website and product design for a climate tech startup.",
  },
  {
    title: "Ember Kitchen",
    category: "Visual Storytelling",
    description: "Photography direction and packaging for a chef-led brand.",
  },
];

export function Work() {
  return (
    <section id="work" className="border-t border-rose/10 bg-cream/50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-rose">
              Selected Work
            </p>
            <h2 className="mt-2 font-serif text-4xl font-semibold tracking-tight lg:text-5xl">
              Recent projects
            </h2>
          </div>
          <p className="max-w-sm text-stone">
            A glimpse at the brands and experiences we&apos;ve helped bring to
            life.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-rose/10 bg-background transition-shadow hover:shadow-lg hover:shadow-rose/5"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-rose-muted to-cream transition-transform group-hover:scale-[1.02]" />
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-rose">
                  {project.category}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-stone">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
