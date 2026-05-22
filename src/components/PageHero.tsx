type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-rose-pale px-6 py-14 md:px-12 md:py-20">
      <p className="mb-4 font-sans text-[11px] font-medium tracking-[2px] text-rose-mid uppercase">
        {eyebrow}
      </p>
      <h1 className="max-w-3xl font-serif text-[32px] leading-[1.18] font-normal text-rose-deep md:text-[42px]">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl font-sans text-[15px] leading-[1.75] text-rose-mid">
        {description}
      </p>
      {children && <div className="mt-8">{children}</div>}
    </section>
  );
}
