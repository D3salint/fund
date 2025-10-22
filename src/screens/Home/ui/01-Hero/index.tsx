"use client";

import React from "react";

import { smoothScrollToAnchor } from "@/shared/lib/smoothScrollToAnchor";
import { Label } from "@/shared/ui/Label";
import { Text } from "@/shared/ui/Text";
import { ArrowRightIcon } from "@/shared/ui/icons/ArrowRight.icon";

import css from "./Hero.module.scss";

export const Hero: React.FC = () => {
  const handleScroll = () => smoothScrollToAnchor("#summary-section");

  return (
    <section className={css.hero}>
      <div className={css.header}>
        <img className={css.header_star} src="/images/icons/star.svg" />
        <a className={css.header_btn}>
          <span>Pitch Deck by <span className={css._fund}>Fund Launch</span></span> <ArrowRightIcon />
        </a>
      </div>
      <div className={css.content}>
        <Label>Asset Class Pill</Label>
        <Text className={["title", css.content_title]} as="h1">
          Fund Name
        </Text>
        <Text className={["text text-16", css.content_text]}>
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
    </section>
  );
};
