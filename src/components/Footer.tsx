export function Footer() {
  return (
    <footer className="flex flex-col items-start justify-between gap-4 border-t border-border bg-cream px-6 py-5 sm:flex-row sm:items-center md:px-12">
      <span className="text-xs text-muted">
        © {new Date().getFullYear()} Rose Creative Labs &nbsp;·&nbsp; St.
        Louis, MO
      </span>
      <div className="flex flex-wrap gap-5">
        <a
          href="https://instagram.com/madelineslandscape"
          className="text-xs text-muted no-underline hover:text-rose-mid"
        >
          @madelineslandscape
        </a>
        <a
          href="#"
          className="text-xs text-muted no-underline hover:text-rose-mid"
        >
          LinkedIn
        </a>
        <a
          href="mailto:hello@rosecreativelabs.com"
          className="text-xs text-muted no-underline hover:text-rose-mid"
        >
          hello@rosecreativelabs.com
        </a>
      </div>
    </footer>
  );
}
