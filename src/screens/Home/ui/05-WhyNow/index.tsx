import React from "react";

import CountUp from "@/shared/ui/CountUp/CountUp";
import { Motion } from "@/shared/ui/Motion";
import { Section } from "@/shared/ui/PageWrapper";
import ProgressLeft from "@/shared/ui/Progress/ProgressLeft";
import ProgressRight from "@/shared/ui/Progress/ProgressRight";
import { useScroller } from "@/shared/ui/Scroller";
import SpotlightWrapper from "@/shared/ui/SpotlightWrapper/SpotlightWrapper";
import { Text } from "@/shared/ui/Text";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const WhyNow: React.FC = () => {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const { isReady, scrollerRef } = useScroller();

  useGSAP(
    () => {
      if (!isReady) return;
      gsap.to(".s-background", {
        scrollTrigger: {
          scroller: scrollerRef.current,
          trigger: rootRef.current,
          invalidateOnRefresh: true,
          start: "center 50%",
          end: "bottom 50%",
          toggleActions: "play reverse play reverse",
        },
        opacity: 1,
        duration: 0.7,
      });
    },
    { scope: rootRef, dependencies: [isReady] }
  );

  return (
    <Section
      className="py-14 px-4 flex flex-col items-center justify-center relative"
      ref={rootRef}
      circles={{ showOnEnter: true, hideOnLeave: true }}
    >
      <div className="s-background opacity-0 min-w-200 absolute left-1/2 top-full -translate-1/2 max-w-306 w-full">
        <img src="/images/bgs/star.webp" className="w-full" />
      </div>

      <div className="max-w-189 w-full flex flex-col items-center">
        <Text
          className="font-tthoves font-semibold text-56 -tracking-4 leading-none text-center max-xxl:text-48 max-sm:text-40"
          classNameSpan="pb-0.5"
          animation={{}}
          as="h2"
        >
          Why Now?
        </Text>
        <Text
          className="text-center mt-6 text-base leading-4 tracking-1 mask-[linear-gradient(to_bottom,black,rgba(0,0,0,0.5))] max-sm:text-sm max-sm:mt-3"
          color="text-white"
          animation={{ delay: 0.15 }}
        >
          With capital for early-stage B2B SaaS in New York increasingly scarce
          due to investor flight to later-stage and consumer deals, the current
          environment presents a rare opportunity to back resilient,
          capital-efficient enterprise software founders at attractive entry
          valuations while competition is muted.
        </Text>
        <Text
          className="text-center mt-8 text-base leading-4 tracking-1 max-sm:mt-4 max-sm:text-sm"
          color="text-white/50"
          animation={{ delay: 0.5 }}
        >
          As macroeconomic uncertainty persists into 2025, disciplined investors
          willing to underwrite early-stage risk are uniquely positioned to
          capture outsized returns as the next wave of enterprise innovation
          emerges from this funding gap.
        </Text>

        <Motion
          delay={0.4}
          className="scale-0 pb-8 mt-25 rounded-4xl w-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0.009,rgba(255,255,255,0.03)))] backdrop-blur-3xl relative before:p-px before:u-border-gradient-[linear-gradient(160deg,rgba(255,255,255,0.18)_50%,rgba(153,153,153,0))] max-sm:mt-5 max-sm:pb-6 max-sm:pt-3.5 max-sm:rounded-2xl"
        >
          <SpotlightWrapper />
          <div className="w-full grid grid-cols-2 gap-px relative ">
            <Motion
              delay={0.5}
              className="flex flex-col items-center opacity-0"
            >
              <div className="relative max-w-51 w-full h-40 ">
                <Motion
                  delay={1}
                  initialState="opacity-0"
                  className="w-full h-full"
                >
                  <img
                    src="/images/fast-progress-new-1.png"
                    className="max-w-51 w-full h-full max-h-40 absolute -top-8 left-8"
                  />
                </Motion>

                <ProgressLeft className="absolute top-4 left-8 max-w-31 w-full h-full max-h-22 max-sm:max-w-26.5" />
              </div>

              <CountUp
                delay={1}
                value={8}
                suffix="%"
                ease="sine.out"
                className="-mt-10 font-tthoves text-4xl leading-none -tracking-1 text-primary text-center max-sm:text-2xl max-sm:-mt-6"
              />
              <p className="mt-1 text-20 leading-tight -tracking-1 text-center text-primary/40 max-sm:text-xs">
                Net Market Growth
              </p>
            </Motion>

            <div className="w-px h-12.5 bg-white/20 absolute left-1/2 top-1/2 -translate-1/2" />

            <Motion delay={1} className="flex flex-col items-center opacity-0">
              <div className="relative max-w-51 w-full h-full max-h-40 ">
                <Motion
                  delay={1.2}
                  initialState="opacity-0"
                  className="w-full h-full"
                >
                  <img
                    src="/images/fast-progress-new-2.png"
                    className="max-w-51 w-full h-full max-h-40 absolute -top-8 left-8"
                  />
                </Motion>

                <ProgressRight className="absolute top-4 left-8 max-w-32 w-full h-full max-h-30 max-sm:max-w-26.5" />
              </div>

              <CountUp
                delay={1.4}
                value={8}
                suffix="%"
                className="-mt-10 font-tthoves text-4xl leading-none -tracking-1 text-primary text-center max-sm:text-2xl max-sm:-mt-6"
              />
              <p className="mt-1 text-20 leading-tight -tracking-1 text-center text-primary/40 max-sm:text-xs">
                Investment Gap
              </p>
            </Motion>
          </div>
        </Motion>
      </div>
    </Section>
  );
};
