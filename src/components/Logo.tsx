export function Logo({ size = 34 }: { size?: number }) {
  return (
    <a href="#home" className="flex items-center gap-2.5" aria-label="AYRIC">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="shrink-0 drop-shadow-[0_0_10px_rgba(224,16,36,0.55)]"
      >
        <path d="M32 4 58 60H44L32 32 20 60H6L32 4Z" fill="#e01024" />
        <path d="M32 26 40 44H24L32 26Z" fill="#050507" />
      </svg>
      <span className="leading-none">
        <span className="block text-[21px] font-extrabold tracking-[5px] [font-family:Arial,Helvetica,sans-serif]">
          AYRIC
        </span>
        <span className="mt-[3px] block text-[7px] tracking-[2.4px] text-muted [font-family:Arial,Helvetica,sans-serif]">
          DESIGN · DEVELOP · GROW
        </span>
      </span>
    </a>
  );
}
