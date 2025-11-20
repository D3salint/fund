import React from "react";

import { smoothScrollToAnchor } from "@/shared/lib/smoothScrollToAnchor";
import { Label } from "@/shared/ui/Label";
import { Section } from "@/shared/ui/PageWrapper";
import { Text } from "@/shared/ui/Text";
import { ArrowRightIcon } from "@/shared/ui/icons/ArrowRightIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Hero: React.FC = () => {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const handleScroll = () => smoothScrollToAnchor("#summary-section");

  useGSAP(
    () => {
      gsap
        .timeline({ defaults: { duration: 0.8 } })
        .to(`.hero-header-button`, { opacity: 1 }, 0)
        .to(`.header-scrollBtn`, { opacity: 1, y: 0, scale: 1 }, 3)
        .to(`.hero-light-image`, { opacity: 1, duration: 1.3 }, 3.3);
    },
    { scope: rootRef }
  );

  return (
    <Section
      ref={rootRef}
      className="p-5 justify-center max-md:justify-between max-md:pb-0 max-md:gap-10"
      circles={{ showOnEnter: true, hideOnLeave: true }}
    >
      <div className="absolute left-0 right-0 top-11 px-20 flex items-center justify-between max-lg:top-5 max-lg:px-5 max-md:p-0 max-md:relative max-md:inset-auto">
        <img
          className="size-9 translate-y-2 max-lg:translate-y-0"
          src="/images/icons/star.svg"
        />
        <a className="hero-header-button opacity-0 pl-8 pr-5 h-11 rounded-[3.75rem] flex items-center gap-3 text-sm -tracking-1 text-white bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent)] backdrop-blur-2xl relative cursor-pointer before:absolute before:inset-0 before:p-[0.1rem] before:rounded-inherit before:bg-[linear-gradient(190deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] before:compositemask before:pointer-events-none hover:brightness-[0.95] transition-[filter_0.3s_ease]">
          <span>
            Pitch Deck by{" "}
            <span className="u-text-gradient-[linear-gradient(to_right,#f7b465,#f6d440,#ffd099_150%)]">
              Fund Launch
            </span>
          </span>{" "}
          <ArrowRightIcon className="size-2.75 shrink-0 stroke-[#cfcfcf]" />
        </a>
      </div>
      <div className="flex flex-col items-center">
        <Label animation={{ duration: 1 }}>Asset Class Pill</Label>
        <Text
          animation={{ delay: 0.4, duration: 1.1 }}
          className="mt-5 text-[10.625rem] text-center font-tthoves font-semibold -tracking-4 leading-none max-xxxl:text-[7.5rem] max-lg:text-[6.25rem] max-md:text-[5rem] max-sm:text-[15.45vw]"
          as="h1"
        >
          Fund Name
        </Text>
        <Text
          animation={{ delay: 0.5 }}
          className="mt-7 text-center max-w-165 w-full max-xxxl:mt-5.5 max-md:text-sm"
          color="text-white/50"
        >
          This US-based GP stakes fund gives institutional investors early
          access to high-growth emerging managers through a proprietary
          incubator, exclusive deal flow, and proven 25% net IRR. Focused on the
          US lower- and mid-market, it offers exposure to next-gen talent and
          resilient revenue in a dynamic private equity landscape.
        </Text>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex flex-col items-center max-w-125 w-full max-md:relative max-md:inset-auto max-md:translate-0 max-md:mx-auto">
        <button
          className="opacity-0 scale-[0.8] translate-y-8 header-scrollBtn font-tthoves text-[0.6875rem] leading-1 -tracking-1 font-normal u-text-gradient-[linear-gradient(to_right,white_40%,rgba(255,255,255,0.4))] uppercase flex items-center gap-1 before:block before:size-0 before:border-l-[0.375rem] before:border-r-[0.375rem] before:border-t-[0.625rem] before:border-t-[#d9d9d9]"
          onClick={handleScroll}
          aria-label="Scroll button"
        >
          <span>Scroll to explore</span>
        </button>
        <img
          className="hero-light-image w-full opacity-0 pointer-events-none"
          src="/images/hero-light.webp"
          alt=""
        />
      </div>
    </Section>
  );
};
