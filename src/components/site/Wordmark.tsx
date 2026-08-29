import Image from "next/image";

/**
 * TLSHost wordmark: the mark plus live text.
 *
 * The text stays HTML so it renders in the display face and stays selectable
 * and readable to screen readers without a separate label.
 *
 * The mark is the artwork file rather than a drawn approximation of it. Its
 * plate is #311817 — exactly ink-800, because the logo was designed against
 * this palette — so the square frame behind it can crop the 52×50 source
 * without a seam.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="aspect-square h-full shrink-0 overflow-hidden rounded-[28%] bg-ink-800">
        <Image
          src="/logo.png"
          alt=""
          width={52}
          height={50}
          className="size-full object-cover"
        />
      </span>
      <span className="font-[family-name:var(--font-display)] text-[19px] leading-none tracking-tight">
        TLSHost
      </span>
    </span>
  );
}
