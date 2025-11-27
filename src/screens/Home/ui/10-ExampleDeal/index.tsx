import React from "react";

import CountUp from "@/shared/ui/CountUp/CountUp";
import { HighlightLabel } from "@/shared/ui/HighlightLabel";
import { Motion } from "@/shared/ui/Motion";
import { Section } from "@/shared/ui/PageWrapper";
import { Text } from "@/shared/ui/Text";
import { CalendarIcon } from "@/shared/ui/icons/CalendarIcon";
import { LocationIcon } from "@/shared/ui/icons/LocationIcon";
import { StrategyIcon } from "@/shared/ui/icons/StrategyIcon";
import clsx from "clsx";

const config = {
  statistics: [
    { value: "$8M", name: "Purchase Price" },
    { value: "$24M", name: "Sale Price" },
  ],
  info: [
    {
      icon: CalendarIcon,
      value: "4.5 years",
    },
    {
      icon: LocationIcon,
      value: "New York",
    },
    {
      icon: StrategyIcon,
      value: "Strategy",
      full: true,
      data: [
        "AI-Driven SaaS Consolidation",
        "Proprietary Deal Origination",
        "Capital-Efficient Growth",
        "New York Ecosystem Advantage",
        "Early-Stage Value Capture",
        "Operational Alpha",
        "Transformative Enterprise Innovation",
      ],
    },
  ],
};

export const ExampleDeal: React.FC = () => {
  return (
    <Section
      className="px-4 py-12 max-md:py-6 flex flex-col justify-center"
      circles={{ showOnEnter: true, hideOnLeave: true }}
      glare={{ showOnEnter: true, hideOnLeave: true }}
    >
      <div className="max-w-251.5 w-full mx-auto flex flex-col items-center">
        <Text
          className="font-tthoves text-56 font-semibold leading-none -tracking-4 max-sm:text-32"
          animation={{}}
          as="h2"
        >
          Example Deal
        </Text>
        <Text
          className="max-w-72.5 w-full text-center mt-6 text-base leading-4 tracking-normal max-sm:text-sm max-sm:mt-3"
          animation={{ delay: 0.15 }}
          color="text-primary/50"
        >
          Representative investment showcasing our value creation approach
        </Text>

        <Motion
          delay={0.4}
          className="mt-10 max-sm:mt-5"
          initialState="scale-0"
        >
          <Motion
            animationElement=".deal-aos-item"
            initialState="[&_.deal-aos-item]scale-0 [&_.deal-aos-item]:opacity-0 [&_.deal-aos-item]:blur-md"
            stagger={0.15}
            delay={0.55}
            className={clsx(
              "rounded-3xl p-7.5 pt-6.25 bg-[url(/images/example-deal-bg.webp)] bg-cover bg-top-right w-full backdrop-blur-3xl",
              "relative before:u-border-gradient-[linear-gradient(170deg,rgba(255,255,255,0.1),rgba(153,153,153,0))]",
              "flex flex-col items-start",
              " max-sm:px-4 max-sm:py-5"
            )}
          >
            {/* Head */}
            <div className="flex flex-col items-start max-sm:flex-row max-sm:justify-between max-sm:gap-3 max-sm:w-full max-sm:items-center">
              {/* Title */}
              <p
                className={clsx(
                  "deal-aos-item font-tthoves font-semibold text-[2.625rem] leading-none -tracking-3 u-text-gradient-[linear-gradient(to_right,#FFF,rgba(255,255,255,0.4))]",
                  "max-lg:text-3xl max-sm:text-18"
                )}
              >
                AI-DrivenOps SaaS Series B
              </p>
              {/* Label */}
              <HighlightLabel className="deal-aos-item mt-3.5 max-sm:mt-0">
                <span className="u-text-gradient-[linear-gradient(to_right,#FFF,rgba(255,255,255,0.8))]">
                  Private Equity
                </span>
              </HighlightLabel>
            </div>

            {/* Cards container */}
            <div
              className={clsx(
                "mt-8 grid grid-cols-[20.9375rem_auto] gap-5 w-full max-lg:mt-4.5",
                "max-md:flex max-md:flex-col max-sm:gap-2"
              )}
            >
              {/* Left side */}
              <div
                className={clsx(
                  "deal-aos-item p-7.5 pt-6 rounded-3xl bg-[linear-gradient(to_bottom,rgba(255,255,255,0.003),rgba(255,255,255,0.01))]",
                  "relative before:u-border-gradient-[linear-gradient(170deg,rgba(255,255,255,0.1),rgba(153,153,153,0))] backdrop-blur-3xl",
                  "flex flex-col",
                  "max-lg:p-4 max-sm:p-6 max-sm:rounded-2xl"
                )}
              >
                <h3
                  className={clsx(
                    "font-tthoves font-semibold text-2xl -tracking-3 leading-tight u-text-gradient-[radial-gradient(circle_at_30%_center,#FCFEFF,#C1BBCC)]",
                    "max-sm:[&_br]:hidden! max-sm:text-sm"
                  )}
                >
                  Purchase
                  <br /> and Sale Information
                </h3>

                <div className="mt-auto pt-5 flex gap-3.5 max-sm:mt-2 max-sm:pt-0 max-sm:justify-between">
                  <div className="flex flex-col max-sm:flex-row max-sm:items-center max-sm:gap-2.25">
                    <p className="text-sm leading-tight -tracking-1 text-primary/40 max-sm:text-xs max-sm:translate-y-[0.1em]">
                      Purchase Price
                    </p>

                    <p className="font-tthoves text-40 leading-tight -tracking-1 text-primary max-sm:text-base">
                      $<CountUp value={8} suffix="M" delay={1} />
                    </p>
                  </div>

                  <div className="mt-2 mb-1.5 w-px h-auto bg-white/20 max-sm:m-0"></div>

                  <div className="flex flex-col max-sm:flex-row max-sm:items-center max-sm:gap-2.25">
                    <p className="text-sm leading-tight -tracking-1 text-primary/40 max-sm:text-xs max-sm:translate-y-[0.1em]">
                      Sale Price
                    </p>

                    <p className="font-tthoves text-40 leading-tight -tracking-1 text-primary max-sm:text-base">
                      $<CountUp value={24} suffix="M" delay={1.2} />
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-base leading-4 tracking-normal text-white/80 max-sm:text-xs">
                  Estimated Annual IRR –{" "}
                  <span className="font-tthoves font-semibold text-18 -tracking-3 text-[#6776FF] max-sm:text-xs">
                    28.9% IRR
                  </span>
                </p>
              </div>

              {/* Right side */}
              <div
                className={clsx(
                  "deal-aos-item p-7.5 pt-6 rounded-3xl bg-[linear-gradient(to_bottom,rgba(255,255,255,0.003),rgba(255,255,255,0.01))]",
                  "relative before:u-border-gradient-[linear-gradient(170deg,rgba(255,255,255,0.1),rgba(153,153,153,0))] backdrop-blur-3xl",
                  "max-lg:p-4 max-sm:p-3.5 max-sm:rounded-2xl"
                )}
              >
                <h3
                  className={clsx(
                    "inline-block font-tthoves font-semibold text-2xl -tracking-3 leading-tight u-text-gradient-[radial-gradient(circle_at_center,#FCFEFF_50%,#C1BBCC)]",
                    "max-sm:text-sm"
                  )}
                >
                  Timeline and Strategy
                </h3>

                <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-2.5 max-sm:mt-3.25">
                  {config.info.map((item) => (
                    <li
                      className={clsx(
                        "p-3 rounded-xl bg-[linear-gradient(to_bottom,rgba(255,255,255,0.003),rgba(255,255,255,0.01))]",
                        "relative before:u-border-gradient-[linear-gradient(170deg,rgba(255,255,255,0.1),rgba(153,153,153,0))] backdrop-blur-3xl",
                        item.full && "col-end-3 col-start-1",
                        "max-sm:p-2.5"
                      )}
                      key={item.value}
                    >
                      <p className="flex items-center gap-2.5 font-semibold text-base leading-tight -tracking-1 u-text-gradient-[linear-gradient(to_bottom,rgba(255,255,255,0.8),rgba(255,255,255,0.5))] max-sm:gap-2 max-sm:text-xs">
                        <item.icon className="size-8 shrink-0 max-sm:size-6" />{" "}
                        {item.value}
                      </p>

                      {item.data && (
                        <Motion
                          className="mt-2.5 flex flex-wrap gap-0.5 max-sm:mt-2 max-sm:gap-1"
                          stagger={0.3}
                          delay={0.25}
                          animationElement=".deal-tags-aos-item"
                          initialState="[&_.deal-tags-aos-item]:scale-0 [&_.deal-tags-aos-item]:opacity-0"
                        >
                          {item.data.map((val) => (
                            <div
                              className={clsx(
                                "deal-tags-aos-item",
                                "py-1 px-2.5 rounded-[100px] text-sm leading-4 tracking-normal text-primary/50 shadow-[0_-0.375rem_5.25rem_rgba(103,118,255,0.25)]",
                                "relative before:u-border-gradient-[linear-gradient(to_right,rgba(103,118,255,0.2),#6776FF,rgba(103,118,255,0.2))]",
                                "max-sm:text-xs"
                              )}
                              key={val}
                            >
                              {val}
                            </div>
                          ))}
                        </Motion>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Motion>
        </Motion>
      </div>
    </Section>
  );
};
