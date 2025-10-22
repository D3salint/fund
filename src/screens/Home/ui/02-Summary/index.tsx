import "swiper/css";
import "swiper/css/effect-creative";

import React from "react";

import { Section } from "@/shared/ui/PageWrapper";
import { Partner } from "@/shared/ui/Partner";
import { Text } from "@/shared/ui/Text";
import { Autoplay, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import css from "./Summary.module.scss";

const stats = [
  {
    title: "Raise Amount",
    value: "$100m USD",
  },
  {
    title: "Asset Class",
    value: "Private Equity",
  },
  {
    title: "Fund Term Length",
    value: "25%",
  },
];

const partners = [
  {
    id: 1,
    name: "1 Brian D. Evans",
    pos: "Managing Partner",
    review:
      "Seasoned investment professional with extensive experience in fund management and strategic partnerships.",
  },
  {
    id: 2,
    name: "2 Brian D. Evans",
    pos: "Managing Partner",
    review:
      "Seasoned investment professional with extensive experience in fund management and strategic partnerships.",
  },
  {
    id: 3,
    name: "3 Brian D. Evans",
    pos: "Managing Partner",
    review:
      "Seasoned investment professional with extensive experience in fund management and strategic partnerships.",
  },
];

export const Summary: React.FC = () => {
  return (
    <Section className={css.summary} id="summary-section">
      <div className="container">
        <div className={css.summary_box}>
          <div className={css.summary_content}>
            <Text className={[css.summary_title, "title"]} as="h2">
              Executive summary:
            </Text>
            <Text className={[css.summary_text, "text text-16"]}>
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
                  <Text className={css.summary_statistic_val}>
                    {item.value}
                  </Text>
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
                  waitForTransition: true
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
                loop
                centeredSlides
                preventInteractionOnTransition
              >
                {[...partners, ...partners].map((partner, id) => (
                  <SwiperSlide className={css.slider_slide} key={partner.id + id}>
                    <Partner
                      name={partner.name}
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
