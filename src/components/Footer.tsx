export function Footer() {
  return (
    <footer className="border-t border-rose/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-8">
        <p className="font-serif text-lg font-semibold text-rose">
          Rose Creative Labs
        </p>
        <p className="text-sm text-stone">
          &copy; {new Date().getFullYear()} Rose Creative Labs. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
