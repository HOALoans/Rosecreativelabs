const credentials = [
  "Master's degree in education (M.Ed.)",
  "Standards-aligned curriculum design",
  "Serving St. Louis city and county",
  "Schools, nonprofits & community organizations",
  "Grant-eligible programming available",
  "Fully insured — contractor-ready",
  "Single sessions to multi-week residencies",
];

export function About() {
  return (
    <section id="about" className="grid border-t border-border lg:grid-cols-2">
      <div className="border-border px-6 py-[52px] md:px-12 lg:border-r">
        <h2 className="mb-[18px] font-serif text-[26px] leading-[1.25] font-normal text-rose-deep">
          Education-first.
          <br />
          <em className="text-rose-mid">Art-always.</em>
        </h2>
        <p className="mb-3.5 text-sm leading-[1.8] text-muted">
          Most art programs are taught by artists. Rose Creative Labs is
          different — every program is built with the rigor of a formal
          curriculum, because students deserve both creative freedom and
          intentional learning.
        </p>
        <p className="mb-3.5 text-sm leading-[1.8] text-muted">
          Madeline holds a master&apos;s degree in education and brings a
          professional artistic practice into every session — connecting visual
          art to real classroom outcomes, community engagement, and lasting
          impact.
        </p>
        <p className="text-sm leading-[1.8] text-muted">
          Her writing on public art and landscape integration reflects a deep
          belief that art belongs in every community space — not just galleries.
        </p>
      </div>
      <div className="bg-rose-ghost px-6 py-[52px] md:px-12">
        <h3 className="mb-5 text-[11px] font-medium tracking-[1.5px] text-muted uppercase">
          Credentials & capabilities
        </h3>
        <ul className="flex flex-col gap-3">
          {credentials.map((cred) => (
            <li
              key={cred}
              className="flex items-start gap-3 text-[13.5px] leading-[1.4] text-rose-dark"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-mid" />
              {cred}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
