export function Footer() {
  return (
    <footer className="flex flex-col items-start justify-between gap-4 border-t border-border bg-cream px-6 py-5 sm:flex-row sm:items-center lg:px-12">
      <span className="font-sans text-xs text-muted">
        © {new Date().getFullYear()} Rose Creative Labs &nbsp;·&nbsp; St.
        Louis, MO
      </span>
      <div className="flex flex-wrap gap-5">
        <a
          href="https://www.instagram.com/madelinerose.arts/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-xs text-muted no-underline transition-colors hover:text-rose-mid"
        >
          @madelinerose.arts
        </a>
        <a
          href="#"
          className="font-sans text-xs text-muted no-underline transition-colors hover:text-rose-mid"
        >
          LinkedIn
        </a>
        <a
          href="mailto:hello@rosecreativelabs.com"
          className="font-sans text-xs text-muted no-underline transition-colors hover:text-rose-mid"
        >
          hello@rosecreativelabs.com
        </a>
      </div>
    </footer>
  );
}
