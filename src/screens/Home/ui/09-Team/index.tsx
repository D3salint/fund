"use client";

import React from "react";

import { useSwiperHelper } from "@/shared/hooks/useSwiperHelper";
import { ArrowButton } from "@/shared/ui/ArrowButton";
import { Motion } from "@/shared/ui/Motion";
import { Section } from "@/shared/ui/PageWrapper";
import { TeamCard } from "@/shared/ui/TeamCard";
import { Text } from "@/shared/ui/Text";
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
  return (
    <Section className="px-4 py-12 max-md:py-6 flex flex-col justify-center bg-[url(/images/opportunity-bg.webp)] bg-cover bg-top-left max-sm:bg-position-[-140%_top] relative">
      <div className="pointer-events-none absolute left-0 top-0 w-[40%] h-40 backdrop-blur-xs"/>

      <div className="max-w-252.5 w-full mx-auto">
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
            className="[&_.animate-spin]:[animation-delay:1.2s]"
            onClick={slidePrev}
            disabled={isBeginning}
          />
        </Motion>
        <div className="mask-[linear-gradient(to_right,transparent,black_calc((100vw-66.125rem)/2),black_calc((100vw-66.125rem)/2))] max-lg:mask-none max-lg:-order-1">
          <Motion
            animationElement=".team-card"
            stagger={0.15}
            duration={0.8}
            initialState="[&_.team-card]:translate-y-8 [&_.team-card]:opacity-0 [&_.team-card]:blur-md"
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
                  className="w-96.25! h-auto! flex flex-col"
                  key={member.name + member.position}
                >
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
