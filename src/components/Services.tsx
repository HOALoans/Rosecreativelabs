const services = [
  {
    title: "Brand Identity",
    description:
      "Logos, typography, color systems, and brand guidelines that give your business a cohesive voice.",
  },
  {
    title: "Digital Design",
    description:
      "Websites, landing pages, and product UI designed for clarity, conversion, and delight.",
  },
  {
    title: "Creative Direction",
    description:
      "Photography, art direction, and campaign concepts that tell your story with intention.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-widest text-rose">
          What we do
        </p>
        <h2 className="mt-2 max-w-2xl font-serif text-4xl font-semibold tracking-tight lg:text-5xl">
          Services built for brands that want to grow with purpose
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={service.title} className="border-t border-rose/20 pt-8">
              <span className="font-serif text-3xl text-rose/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-semibold">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-stone">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
