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

import css from "./Summary.module.scss";

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
            trigger: `.${css.summary_statistic}`,
            invalidateOnRefresh: true,
            start: "top 80%",
          },
        })
        .to(`.${css.summary_statistic_item}`, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
        });

      // Mobile
      // Will be refactored
      const cards = gsap.utils.toArray(
        `.${css.partners_card}`
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
    <Section className={css.summary} ref={rootRef} id="summary-section">
      <div className="container">
        <div className={css.summary_box}>
          <div className={css.summary_content}>
            <Text
              className={[css.summary_title, "title"]}
              animation={{}}
              as="h2"
            >
              Executive summary:
            </Text>
            <Text
              className={[css.summary_text, "text text-16"]}
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
            <ul className={css.summary_statistic}>
              {stats.map((item) => (
                <li
                  className={css.summary_statistic_item}
                  key={item.title + item.value}
                >
                  <div className={css.summary_statistic_row}>
                    <p className={css.summary_statistic_icon}>
                      <img src={item.icon} alt="" />
                    </p>
                    <Text className={css.summary_statistic_val}>
                      {item.value}
                    </Text>
                  </div>
                  <Text className={css.summary_statistic_title}>
                    {item.title}
                  </Text>
                </li>
              ))}
            </ul>
          </div>

          <div className={css.slider}>
            <div className={css.slider_wrapper}>
              <Swiper
                className={css.slider_swiper}
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
                  <SwiperSlide
                    className={css.slider_slide}
                    key={partner.id + id}
                  >
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

          <div className={css.partners}>
            {partners.map((partner) => (
              <Partner
                className={css.partners_card}
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
