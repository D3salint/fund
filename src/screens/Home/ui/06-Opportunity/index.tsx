import React from "react";

import { MarketGapAnalysisChart } from "@/shared/charts/MarketGapAnalysis";
import { Motion } from "@/shared/ui/Motion";
import { Section } from "@/shared/ui/PageWrapper";
import SpotlightWrapper from "@/shared/ui/SpotlightWrapper/SpotlightWrapper";
import { Text } from "@/shared/ui/Text";

const config = {
  list: [
    "Limited access to emerging fund managers",
    "Lack of transparency in deal flow",
    "Limited access to emerging fund managers",
  ],
};

//bg-[url(/images/opportunity-bg.webp)]

//bg-[url(/images/opportunity-new.png)] bg-cover bg-top-left max-sm:bg-position-[-140%_top] relative z-100

export const Opportunity: React.FC = () => {
  return (
    <Section
      glare={{ showOnEnter: true, hideOnLeave: true }}
      className="px-14 py-10 flex flex-col max-md:px-4 "
    >
      <Motion initialState="scale-100 opacity-0" className="pointer-events-none absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[url(/images/opportunity-new.png)] bg-cover bg-top-left max-sm:bg-position-[22%_-82px] bg-no-repeat" />
      </Motion>

      <div className="pointer-events-none absolute left-0 top-0 -translate-x-1/2 w-full h-80 backdrop-blur-xs" />

      <div className="m-auto grow max-w-372 w-full max-h-194 h-full grid grid-cols-[49%_51%] max-lg:flex max-lg:flex-col max-lg:gap-6 max-lg:m-0 max-lg:max-h-[unset] max-lg:max-w-200 max-lg:mx-auto">
        <div className="flex justify-end pr-10 max-lg:justify-start">
          <div className="max-w-120 w-full flex flex-col">
            <Text
              className="w-min font-tthoves font-semibold text-56 -tracking-4 leading-none max-xxl:text-48 max-sm:text-40 max-lg:w-full"
              classNameSpan="pb-0.5 pr-0.5"
              color="u-text-gradient-[linear-gradient(to_bottom,#FCFEFF,#AEA9B8)]"
              animation={{}}
              as="h2"
            >
              The Opportunity
            </Text>
            <Text
              className="mt-6 max-w-91 text-18 leading-4 tracking-normal max-md:mt-4 max-sm:text-sm"
              animation={{ delay: 0.15 }}
              color="text-primary/50"
            >
              Our solution bridges the gap between emerging opportunities and
              institutional capital
            </Text>

            <Text
              className="pt-4 mt-auto text-32 font-semibold -tracking-3 leading-tight max-lg:mt-5 max-sm:text-base"
              animation={{ delay: 0.35 }}
            >
              Our Solution
            </Text>
            <Motion
              animationElement="li"
              as="ul"
              className="mt-10.5 flex flex-col gap-10 max-lg:gap-4 max-lg:mt-6"
              initialState="[&_li]:translate-y-8 [&_li]:opacity-0 [&_li]:blur-md"
              delay={0.5}
            >
              {config.list.map((item) => (
                <li
                  className="flex items-center gap-4 text-20 leading-4 tracking-normal u-text-gradient-[linear-gradient(to_right,rgba(255,255,255,0.5),rgba(255,255,255,0.8))] max-sm:text-sm max-sm:gap-3"
                  key={item}
                >
                  <img
                    className="w-5 shrink-0 max-sm:w-3.5"
                    src="/images/icons/pluses-purple.svg"
                  />
                  {item}
                </li>
              ))}
            </Motion>
          </div>
        </div>

        <Motion
          delay={0.35}
          initialState="scale-0 opacity-0"
          className="flex flex-col h-full pt-6 pb-10.5 pl-7.5 pr-6 rounded-3xl bg-[linear-gradient(to_bottom,rgba(255,255,255,0.009,rgba(255,255,255,0.03)))] backdrop-blur-3xl relative before:p-px before:u-border-gradient-[linear-gradient(160deg,rgba(255,255,255,0.18)_-10%,rgba(153,153,153,0)_120%)]  max-lg:max-h-auto max-lg:h-auto max-sm:p-4"
        >
          <Text className="font-tthoves text-32 font-semibold -tracking-3 max-sm:text-18">
            Market Gap Analysis
          </Text>

          <SpotlightWrapper />

          <div className="pt-5 flex justify-between gap-5 max-sm:pt-2">
            <p className="leading-4 tracking-1 text-[0.6875rem] text-[#626268] max-w-46.5 max-sm:text-[0.5rem]">
              % of Fund Portfolio Companies Securing Next Funding Round Within
              18 Months
            </p>
            <p className="leading-4 tracking-1 text-[0.6875rem] text-[#626268] text-end max-w-33 max-sm:text-[0.5rem]">
              Portfolio Company Median ARR Growth Rate (YoY)
            </p>
          </div>

          <Motion
            className="mt-5 -mr-2 grow flex flex-col z-50"
            initialState="opacity-0"
            delay={0.4}
          >
            <MarketGapAnalysisChart
              className="grow max-lg:aspect-[1/0.6] "
              disableFillArea
              data={[
                { year: 2024, days: 46, percent: 48 },
                { year: 2025, days: 52, percent: 53 },
                { year: 2026, days: 60, percent: 60 },
                { year: 2027, days: 68, percent: 66 },
                { year: 2028, days: 76, percent: 72 },
              ]}
            />

            <ul className="mt-4 flex items-center gap-8 pl-8 pr-6 max-sm:flex-col max-sm:items-start max-sm:gap-3 max-sm:pl-4 max-sm:mt-3">
              <li className="text-sm leading-4 tracking-1 text-[#cccccc] flex items-center gap-2 max-sm:text-[0.625rem]">
                <span className="shrink-0 w-2.5 h-[3px] bg-[#9C77FF] rounded-sm" />
                % of Seed-Funded B2B SaaS Startups Raising Series A Within 2
                Years
              </li>
              <li className="text-sm leading-4 tracking-1 text-[#cccccc] flex items-center gap-2 max-sm:text-[0.625rem]">
                <span className="shrink-0 w-2.5 h-[3px] bg-[#6776FF] rounded-sm" />
                Median Days Between Seed and Series A Rounds
              </li>
            </ul>
          </Motion>
        </Motion>
      </div>
    </Section>
  );
};
