import type { ReactNode } from "react";

import { PillarLabel, type PillarIcon } from "@/components/ui/PillarLabel";
import { ArrowLink, Container, FeatureList } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

type Pillar = {
  eyebrow: string;
  title: string;
  body: string;
  bullets: readonly string[];
  link?: string;
};

/**
 * One feature pillar: prose on one side, product mockup on the other.
 * `flip` alternates the sides down the page; on small screens the prose
 * always comes first so the reader gets the claim before the illustration.
 */
export function PillarSection({
  pillar,
  mockup,
  icon,
  href,
  flip = false,
  tone = "canvas",
  showBullets = true,
}: {
  pillar: Pillar;
  mockup: ReactNode;
  /** Picks the glyph on the label chip. */
  icon: PillarIcon;
  /** Omit to end the section on its prose — used where the section is itself the destination. */
  href?: string;
  flip?: boolean;
  tone?: "canvas" | "surface";
  showBullets?: boolean;
}) {
  return (
    <section className={tone === "surface" ? "bg-surface" : "bg-canvas"}>
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className={`min-w-0 ${flip ? "lg:order-2" : ""}`}>
            <PillarLabel icon={icon}>{pillar.eyebrow}</PillarLabel>
            <h2 className="mt-3 text-[1.75rem] leading-[1.18] text-ink-900 sm:text-[2.125rem]">
              {pillar.title}
            </h2>
            <p className="mt-4 text-[16.5px] leading-relaxed text-ink-600">{pillar.body}</p>

            {showBullets ? <FeatureList items={pillar.bullets} /> : null}

            {href && pillar.link ? (
              <div className="mt-7">
                <ArrowLink href={href}>{pillar.link}</ArrowLink>
              </div>
            ) : null}
          </Reveal>

          <Reveal delay={90} className={`min-w-0 ${flip ? "lg:order-1" : ""}`}>
            {mockup}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
