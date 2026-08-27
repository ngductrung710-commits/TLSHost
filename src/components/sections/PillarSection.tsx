import type { ReactNode } from "react";

import { ArrowLink, Container, Eyebrow, FeatureList } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

type Pillar = {
  eyebrow: string;
  title: string;
  body: string;
  bullets: readonly string[];
  link: string;
};

/**
 * One feature pillar: prose on one side, product mockup on the other.
 * `flip` alternates the sides down the page; on small screens the prose
 * always comes first so the reader gets the claim before the illustration.
 */
export function PillarSection({
  pillar,
  mockup,
  href,
  flip = false,
  tone = "canvas",
  showBullets = true,
}: {
  pillar: Pillar;
  mockup: ReactNode;
  href: string;
  flip?: boolean;
  tone?: "canvas" | "surface";
  showBullets?: boolean;
}) {
  return (
    <section className={tone === "surface" ? "bg-surface" : "bg-canvas"}>
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className={flip ? "lg:order-2" : undefined}>
            <Eyebrow>{pillar.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-[1.75rem] leading-[1.18] text-ink-900 sm:text-[2.125rem]">
              {pillar.title}
            </h2>
            <p className="mt-4 text-[16.5px] leading-relaxed text-ink-600">{pillar.body}</p>

            {showBullets ? <FeatureList items={pillar.bullets} /> : null}

            <div className="mt-7">
              <ArrowLink href={href}>{pillar.link}</ArrowLink>
            </div>
          </Reveal>

          <Reveal delay={90} className={flip ? "lg:order-1" : undefined}>
            {mockup}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
