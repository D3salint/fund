import React from "react";

import { Section } from "@/shared/ui/PageWrapper";
import { Partner } from "@/shared/ui/Partner";
import { Text } from "@/shared/ui/Text";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/effect-creative";
import { Autoplay, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const stats = [
  {
    title: "Raise Amount",
    value: "$100m USD",
    icon: "/images/icons/raise-amount.png",
  },
  {
    title: "Asset Class",
    value: "Private Equity",
    icon: "/images/icons/asset-class.png",
  },
  {
    title: "Fund Term Length",
    value: "25%",
    icon: "/images/icons/fund-team.png",
  },
];

const partners = [
  {
    id: 1,
    avatar: "/images/temp/user-1.png",
    name: "Brian D. Evans",
    pos: "Managing Partner",
    review:
      "Seasoned investment professional with extensive experience in fund management and strategic partnerships.",
  },
  {
    id: 2,
    avatar: "/images/temp/user-2.png",
    name: "Brian D. Evans",
    pos: "Managing Partner",
    review:
      "Seasoned investment professional with extensive experience in fund management and strategic partnerships.",
  },
  {
    id: 3,
    avatar: "/images/temp/user-2.png",
    name: "Brian D. Evans",
    pos: "Managing Partner",
    review:
      "Seasoned investment professional with extensive experience in fund management and strategic partnerships.",
  },
];

export const Summary: React.FC = () => {
  const rootRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Will be refcatored
      gsap
        .timeline({
          delay: 1,
          scrollTrigger: {
            trigger: `.summary-stats`,
            invalidateOnRefresh: true,
            start: "top 80%",
          },
        })
        .to(`.summary-stats-item`, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
        });

      // Mobile
      // Will be refactored
      const cards = gsap.utils.toArray(
        `.summary-partners-card`
      ) as HTMLElement[];

      cards.forEach((card) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            invalidateOnRefresh: true,
            start: "top 90%",
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
        });
      });
    },
    { scope: rootRef }
  );

  return (
    <Section
      className="pt-24 pb-10 overflow-hidden bg-[url(/images/summary-bg.webp)] bg-cover bg-top-left max-sm:bg-[url(/images/summary-bg@mob.webp)]"
      ref={rootRef}
      id="summary-section"
    >
      <div className="max-w-400 px-10 mx-auto w-full max-lg:px-1.5 max-md:px-4">
        <div className="flex items-center justify-between gap-8 pr-20 max-xxl:pr-0 max-lg:flex-col">
          <div className="max-w-157 min-h-120 flex flex-col max-lg:min-h-auto">
            <Text
              className="title font-tthoves font-semibold text-[3.5rem] -tracking-4 leading-none w-min max-sm:text-3xl max-sm:w-auto"
              animation={{}}
              as="h2"
            >
              Executive summary:
            </Text>
            <Text
              className="mt-8 text-base leading-4 tracking-normal text-primary/60 max-sm:text-sm max-sm:mt-2"
              color=""
              animation={{ delay: 0.2 }}
            >
              This New York-based private equity fund targets high-growth B2B
              SaaS startups, leveraging a proven 10-year track record and 25%
              net IRR to capitalize on the sector’s robust market fundamentals
              and accelerating digital transformation. Despite a recent
              moderation in SaaS growth rates, the industry’s rapid adoption of
              AI, automation, and product-led strategies continues to drive
              operational efficiency and scalable value creation.
            </Text>
            <ul className="summary-stats mt-auto pt-10 grid grid-cols-[1fr_1.2fr_1fr] max-lg:pt-6">
              {stats.map((item) => (
                <li
                  className="opacity-0 translate-y-8 summary-stats-item flex flex-col gap-4 px-10 relative first:pl-0 last:pr-0 max-xl:px-5 max-sm:px-5 max-sm:gap-1.5 not-first:before:block not-first:before:w-px not-first:before:h-full not-first:before:bg-white/20 not-first:before:absolute not-first:before:left-0 not-first:before:top-0"
                  key={item.title + item.value}
                >
                  <div className="flex items-center gap-3 max-sm:flex-col max-sm:items-start max-sm:gap-1.5">
                    <p className="size-10 shrink-0 max-sm:size-6">
                      <img className="image-contain" src={item.icon} alt="" />
                    </p>
                    <Text className="whitespace-nowrap font-tthoves leading-tight text-base -tracking-3 font-semibold pr-[0.3em] u-text-gradient-[linear-gradient(120deg,#fff,#ffffff57)] max-sm:text-sm">
                      {item.value}
                    </Text>
                  </div>
                  <Text
                    className="text-[0.8125rem] leading-1 tracking-normal font-medium text-white/50 max-sm:text-[0.8125rem]"
                    color=""
                  >
                    {item.title}
                  </Text>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-h-160 max-w-133 w-full px-0.5 flex flex-col max-xl:max-w-105 max-lg:hidden">
            <div className="my-auto">
              <Swiper
                className="overflow-visible!"
                modules={[EffectCreative, Autoplay]}
                autoplay={{
                  delay: 3000,
                  pauseOnMouseEnter: true,
                  waitForTransition: true,
                }}
                speed={800}
                effect="creative"
                creativeEffect={{
                  next: {
                    opacity: 0.36,
                    translate: ["-3%", "-46%", 0],
                    scale: 0.75,
                    shadow: true,
                  },
                  prev: {
                    opacity: 0.36,
                    translate: ["2%", "52%", 0],
                    scale: 0.75,
                    shadow: true,
                  },
                  limitProgress: 2,
                }}
                allowTouchMove={false}
                loop
                centeredSlides
                loopAdditionalSlides={1}
                preventInteractionOnTransition
              >
                {[...partners, ...partners].map((partner, id) => (
                  <SwiperSlide key={partner.id + id}>
                    <Partner
                      name={partner.name}
                      avatar={partner.avatar}
                      position={partner.pos}
                      review={partner.review}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="hidden max-w-157 mt-7 flex-col gap-3 w-full max-lg:flex">
            {partners.map((partner) => (
              <Partner
                className="summary-partners-card bg-none bg-[#0a0a0a63]! backdrop-blur-2xl opacity-0 translate-y-8"
                key={partner.id}
                avatar={partner.avatar}
                name={partner.name}
                position={partner.pos}
                review={partner.review}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
