import React from "react";

import { smoothScrollToAnchor } from "@/shared/lib/smoothScrollToAnchor";
import { GlowText } from "@/shared/ui/GlowText/GlowText";
import { Label } from "@/shared/ui/Label";
import { Motion } from "@/shared/ui/Motion";
import { Section } from "@/shared/ui/PageWrapper";
import { Text } from "@/shared/ui/Text";
import { ArrowRightIcon } from "@/shared/ui/icons/ArrowRightIcon";
import gsap from "gsap";

import { HeroLoader } from "./HeroLoader";

export const Hero: React.FC<{
  isAnimate?: boolean;
  loadingDuration?: number;
}> = ({ isAnimate = true, loadingDuration = 1500 }) => {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const [loading, setLoading] = React.useState(isAnimate);
  const [showContent, setShowContent] = React.useState(false);

  const handleScroll = () => smoothScrollToAnchor("#summary-section");

  React.useEffect(() => {
    if (!isAnimate) {
      setLoading(false);
      setShowContent(true);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      const fadeTimer = setTimeout(() => setShowContent(true), 50);
      return () => clearTimeout(fadeTimer);
    }, loadingDuration);

    return () => clearTimeout(timer);
  }, [isAnimate, loadingDuration]);

  React.useEffect(() => {
    if (!showContent) return;

    gsap
      .timeline({ defaults: { duration: 0.8 } })
      .to(`.hero-img-right-scale`, { opacity: 1, scale: 1 }, 0.8)
      .to(`.hero-header-button-anim`, { opacity: 1, scale: 1 }, 1)
      .to(`.header-scrollBtn`, { opacity: 1, y: 0, scale: 1 }, 1.6)
      .to(`.hero-light-image`, { opacity: 1, duration: 1.3 }, 2);
  }, [showContent]);

  return (
    <div className="w-full h-screen relative">
      {loading && <HeroLoader />}

      <div className="absolute inset-0 w-full h-full">
        {showContent && (
          <Section
            ref={rootRef}
            className="p-5 justify-center max-md:justify-between max-md:pb-0 max-md:gap-10"
            circles={{ showOnEnter: true, hideOnLeave: true }}
            glare={{ showOnEnter: true, hideOnLeave: true }}
            light={{ showOnEnter: true, hideOnLeave: true }}
          >
            <div className="absolute left-0 right-0 top-11 px-20 flex items-center justify-between max-lg:top-5 max-lg:px-5 max-md:p-0 max-md:relative max-md:inset-auto">
              <div className="hero-img-right-scale opacity-0 scale-50">
                <img
                  className="size-9 translate-y-2 max-lg:translate-y-0"
                  src="/images/icons/star.svg"
                />
              </div>

              <div className="hero-header-button-anim opacity-0 scale-50">
                <a
                  className="pl-8 pr-5 h-11 rounded-[3.75rem] flex items-center gap-3 text-sm -tracking-1 text-white 
                  bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] 
                  backdrop-blur-2xl relative cursor-pointer
                  before:absolute before:inset-0 before:p-[0.1rem] before:rounded-inherit 
                  before:bg-[linear-gradient(190deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] 
                  before:compositemask before:pointer-events-none 
                  hover:brightness-[0.85] hover:before:opacity-80
                  transition-[filter,opacity] duration-300 ease-in-out"
                >
                  <span>
                    Pitch Deck by{" "}
                    <span className="u-text-gradient-[linear-gradient(to_right,#f7b465,#f6d440,#ffd099_150%)]">
                      Fund Launch
                    </span>
                  </span>{" "}
                  <ArrowRightIcon className="size-2.75 shrink-0 stroke-[#cfcfcf]" />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Label animation={{ duration: 1 }}>Asset Class Pill</Label>

              <Motion delay={0.4}>
                <GlowText>Fund Name</GlowText>
              </Motion>

              <Text
                animation={{ delay: 0.3 }}
                className="mt-7 text-center max-w-165 w-full max-xxxl:mt-5.5 max-md:text-sm"
                color="text-white/50"
              >
                This US-based GP stakes fund gives institutional investors early
                access to high-growth emerging managers through a proprietary
                incubator, exclusive deal flow, and proven 25% net IRR. Focused
                on the US lower- and mid-market, it offers exposure to next-gen
                talent and resilient revenue in a dynamic private equity
                landscape.
              </Text>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-38 flex flex-col items-center max-w-125 w-full max-md:relative max-md:inset-auto max-md:translate-0 max-md:mx-auto">
              <button
                className="opacity-0 scale-[0.8] translate-y-8 header-scrollBtn font-tthoves text-[0.6875rem] leading-1 -tracking-1 font-normal u-text-gradient-[linear-gradient(to_right,white_40%,rgba(255,255,255,0.4))] uppercase flex items-center gap-1 before:block before:size-0 before:border-l-[0.375rem] before:border-r-[0.375rem] before:border-t-[0.625rem] before:border-t-[#d9d9d9]"
                onClick={handleScroll}
                aria-label="Scroll button"
              >
                <span>Scroll to explore</span>
              </button>
            </div>
          </Section>
        )}
      </div>
    </div>
  );
};
