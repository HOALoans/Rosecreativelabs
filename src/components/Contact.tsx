export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <p className="text-sm font-medium uppercase tracking-widest text-rose">
          Let&apos;s collaborate
        </p>
        <h2 className="mx-auto mt-2 max-w-2xl font-serif text-4xl font-semibold tracking-tight lg:text-5xl">
          Ready to bring your next project to life?
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-stone">
          Tell us about your brand, timeline, and goals. We&apos;ll get back to
          you within two business days.
        </p>
        <a
          href="mailto:hello@rosecreativelabs.com"
          className="mt-10 inline-block rounded-full bg-rose px-10 py-4 text-sm font-medium text-white transition-colors hover:bg-rose-light"
        >
          hello@rosecreativelabs.com
        </a>
      </div>
    </section>
  );
}
