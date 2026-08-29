import Image from "next/image";

/**
 * TLSHost wordmark: the mark plus live text.
 *
 * The text stays HTML so it renders in the display face and stays selectable
 * and readable to screen readers without a separate label.
 *
 * The mark is the artwork file rather than a drawn approximation of it. Its
 * plate is #311817 — exactly ink-800, because the logo was designed against
 * this palette — so the square frame behind it can crop the 45×47 source
 * without a seam.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="aspect-square h-full shrink-0 overflow-hidden rounded-[28%] bg-ink-800">
        <Image
          src="/logo.png"
          alt=""
          width={45}
          height={47}
          className="size-full object-cover"
        />
      </span>
      {/* Sans, not the display serif: two weights of one family carry the
          split between the two halves of the name, so the mark reads the same
          at 19px in a header as it does scaled down in a favicon. Be Vietnam
          Pro draws both weights with the same Vietnamese diacritics as the
          rest of the site, which the serif did not have to. */}
      <span className="font-[family-name:var(--font-sans)] text-[19px] leading-none tracking-tight">
        <span className="font-bold">TLS</span>
        <span className="font-normal">Host</span>
      </span>
    </span>
  );
}
