import React from "react";

import { smoothScrollToAnchor } from "@/shared/lib/smoothScrollToAnchor";
import { Label } from "@/shared/ui/Label";
import { Section } from "@/shared/ui/PageWrapper";
import { Text } from "@/shared/ui/Text";
import { ArrowRightIcon } from "@/shared/ui/icons/ArrowRight.icon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import css from "./Hero.module.scss";

export const Hero: React.FC = () => {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const handleScroll = () => smoothScrollToAnchor("#summary-section");

  useGSAP(
    () => {
      gsap.to(`.${css.header_btn}`, {
        opacity: 1,
        duration: 0.8,
      });

      gsap.to(`.${css.scrollBtn}`, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: 3
      });
    },
    { scope: rootRef }
  );

  return (
    <Section
      ref={rootRef}
      className={css.hero}
      circles={{ showOnEnter: true, hideOnLeave: true }}
    >
      <div className={css.header}>
        <img className={css.header_star} src="/images/icons/star.svg" />
        <a className={css.header_btn}>
          <span>
            Pitch Deck by <span className={css._fund}>Fund Launch</span>
          </span>{" "}
          <ArrowRightIcon />
        </a>
      </div>
      <div className={css.content}>
        <Label animation={{ duration: 1 }}>Asset Class Pill</Label>
        <Text
          animation={{ delay: 0.4, duration: 1.1 }}
          className={["title", css.content_title]}
          as="h1"
        >
          Fund Name
        </Text>
        <Text
          animation={{ delay: 0.5 }}
          className={["text text-16", css.content_text]}
        >
          This US-based GP stakes fund gives institutional investors early
          access to high-growth emerging managers through a proprietary
          incubator, exclusive deal flow, and proven 25% net IRR. Focused on the
          US lower- and mid-market, it offers exposure to next-gen talent and
          resilient revenue in a dynamic private equity landscape.
        </Text>
      </div>
      <button
        className={css.scrollBtn}
        onClick={handleScroll}
        aria-label="Scroll button"
      >
        <span>Scroll to explore</span>
      </button>
    </Section>
  );
};
