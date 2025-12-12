"use client";

import React from "react";

import { useSwiperHelper } from "@/shared/hooks/useSwiperHelper";
import { ArrowButton } from "@/shared/ui/ArrowButton";
import { Motion } from "@/shared/ui/Motion";
import { Section } from "@/shared/ui/PageWrapper";
import { useScroller } from "@/shared/ui/Scroller";
import SpotlightWrapper from "@/shared/ui/SpotlightWrapper/SpotlightWrapper";
import { TeamCard } from "@/shared/ui/TeamCard";
import { Text } from "@/shared/ui/Text";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";

const config = {
  team: [
    {
      avatar: "/images/team/james.png",
      name: "James Rodriguez",
      position: "Chief Technology Officer",
      bio: "Seasoned investment professional with extensive experience in fund management and strategic partnerships.",
      email: "james.rodriguez@company.com",
      phoneNumber: "+1 (212) 555-0193",
    },
    {
      avatar: "/images/team/olivia.png",
      name: "Olivia Carter",
      position: "Head of Operations",
      bio: "Experienced operations leader with a proven track record in scaling financial services and optimizing organizational efficiency.",
      email: "olivia.carter@company.com",
      phoneNumber: "+1 (212) 555-0193",
    },
    {
      avatar: "/images/team/sofia.png",
      name: "Sofia Nguyen",
      position: "Product Manager",
      bio: "Innovative product strategist specializing in SaaS platforms, with expertise in user-centric design and agile development.",
      email: "sofia.nguyen@company.com",
      phoneNumber: "+1 (212) 555-0193",
    },
    {
      avatar: "/images/team/michael.png",
      name: "Michael Thompson",
      position: "Lead Designer",
      bio: "Creative design leader with a strong background in brand identity, UX/UI, and visual storytelling for fintech and enterprise markets.",
      email: "michael.thompson@company.com",
      phoneNumber: "+1 (212) 555-0193",
    },
  ],
};

export const Team: React.FC = () => {
  const { isBeginning, isEnd, setSwiperCore, updater, slidePrev, slideNext } =
    useSwiperHelper();
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
          start: "top-=60px top",
          end: "top 0%",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        duration: 0.7,
      });
    },
    { scope: rootRef, dependencies: [isReady] }
  );

  return (
    <Section className="px-4 py-12 max-md:py-6 flex flex-col justify-center relative" ref={rootRef}>
      <div className="max-w-252.5 w-full mx-auto relative">
        <div className="s-background opacity-0 absolute inset-0 pointer-events-none">
          <div className="max-w-300 w-full absolute left-1/2 -translate-x-2/3 -translate-y-[53%] mask-[radial-gradient(circle_at_center,black_40%,transparent)] -z-1">
            <img src="/images/bg-3.webp" className="w-full" />
            <div className="absolute left-1/8 top-[5%] size-1/2 rounded-full bg-[rgba(174,183,252,0.2)] blur-[7rem]" />
          </div>
        </div>
        <Text
          className="font-tthoves text-56 font-semibold leading-none -tracking-4 max-sm:text-32 [&_span]:first:block max-lg:[&_span]:first:inline-block"
          animation={{}}
          as="h2"
        >
          Meet the Team
        </Text>
        <Text
          className="mt-9 max-w-93 text-base leading-4 tracking-normal max-lg:mt-4 max-sm:text-sm"
          color="text-primary/50"
          animation={{ delay: 0.15 }}
        >
          Demonstrating the investment opportunity created by declining
          early-stage capital allocation against rapidly expanding AI-driven
          enterprise software adoption in New York’s technology ecosystem
        </Text>
      </div>

      <div className="mt-25 -mx-4 px-4 overflow-hidden relative max-lg:flex max-lg:flex-col max-lg:mt-12 max-sm:mt-6">
        <Motion
          delay={0.3}
          className="flex flex-col gap-5 absolute z-2 left-10 bottom-0 max-lg:relative max-lg:inset-auto max-lg:flex-row-reverse max-lg:justify-center max-lg:mt-8 max-sm:hidden!"
        >
          <ArrowButton onClick={slideNext} disabled={isEnd} action="next" />
          <ArrowButton
            className="[&_.animate-spin]:[animation-delay:1.2s] z-10"
            onClick={slidePrev}
            disabled={isBeginning}
          />
        </Motion>

        <div className="mask-[linear-gradient(to_right,transparent,black_calc((100vw-66.125rem)/2),black_calc((100vw-66.125rem)/2))] max-lg:mask-none max-lg:-order-1">
          <Motion
            animationElement=".team-card"
            stagger={0.15}
            duration={0.8}
            initialState="[&_.team-card]:opacity-0 [&_.team-card]:blur-md [&_.team-card]:scale-0"
            className="max-w-252.5 w-full mx-auto"
          >
            <Swiper
              className="overflow-visible! max-sm:[&_.swiper-wrapper]:flex-col! max-sm:[&_.swiper-wrapper]:gap-5!"
              slidesPerView={config.team.length}
              onInit={setSwiperCore}
              onSlideChange={updater}
              breakpoints={{
                565: {
                  slidesPerView: "auto",
                },
              }}
              grabCursor
              spaceBetween={24}
            >
              {config.team.map((member) => (
                <SwiperSlide
                  className="w-96.25! h-auto! flex flex-col z-10 max-sm:w-full!"
                  key={member.name + member.position}
                >
                  <SpotlightWrapper />
                  <TeamCard {...member} className="grow" />
                </SwiperSlide>
              ))}
            </Swiper>
          </Motion>
        </div>
      </div>
    </Section>
  );
};
