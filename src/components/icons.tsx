type LogoProps = {
  className?: string;
};

/** Rose Creative Labs monogram for header and branding. */
export function RclLogo({ className = "h-[34px] w-[34px] shrink-0" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 34 34"
      className={className}
      role="img"
      aria-label="Rose Creative Labs"
    >
      <rect width="34" height="34" rx="7" className="fill-rose-mid" />
      <text
        x="17"
        y="16.5"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#faf6f0"
        style={{
          fontFamily:
            "var(--font-cormorant), 'Cormorant Garamond', 'Times New Roman', serif",
          fontSize: "13px",
          fontWeight: 600,
        }}
      >
        <tspan letterSpacing="0.04em">R</tspan>
        <tspan fontStyle="italic" letterSpacing="0.02em">
          C
        </tspan>
        <tspan letterSpacing="0.04em">L</tspan>
      </text>
      <path
        d="M9 24.5c2.8 1.6 5.6 2.4 8.5 2.4s5.7-.8 8.5-2.4"
        fill="none"
        stroke="#faf6f0"
        strokeOpacity="0.45"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** @deprecated Use RclLogo */
export function LogoMark() {
  return <RclLogo className="h-[18px] w-[18px]" />;
}

export function IconFoundations() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-rose-mid stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]">
      <path d="M2 12h20M12 2v20" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

export function IconArtists() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-rose-mid stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15 15 0 0 1 0 20M2 12h20" />
    </svg>
  );
}

export function IconAfterSchool() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-rose-mid stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function IconGallery() {
  return (
    <svg viewBox="0 0 28 28" className="h-7 w-7 fill-none stroke-rose-light stroke-[1.4] [stroke-linecap:round]">
      <rect x="3" y="3" width="22" height="22" rx="3" />
      <circle cx="10" cy="10" r="3" />
      <path d="m3 19 6-6 4 4 4-5 8 8" />
    </svg>
  );
}
