import React from "react";

import { MarketGapAnalysisChart } from "@/shared/charts/MarketGapAnalysis";
import { Motion } from "@/shared/ui/Motion";
import { Section } from "@/shared/ui/PageWrapper";
import { Text } from "@/shared/ui/Text";

export const MarketAnalysis: React.FC = () => {
  return (
    <Section className="pt-24 pb-10 max-xxxl:pt-20 max-sm:pt-8 bg-[url(/images/market-analysis-bg.webp)] bg-cover bg-top-right max-sm:bg-position-[-70%_top] relative">
      <div className="pointer-events-none absolute right-0 top-0 w-[40%] h-[40%] backdrop-blur-xs"/>

      <div className="max-w-400 px-10 mx-auto w-full max-lg:px-6 max-md:px-4">
        <Text
          className="font-tthoves text-56 font-semibold leading-none -tracking-4 max-sm:text-32"
          animation={{}}
          as="h2"
        >
          Market Analysis
        </Text>
        <div className="mt-10 flex gap-37 max-md:flex-col max-lg:gap-5 max-lg:mt-8 max-sm:mt-6 max-sm:gap-3">
          <Text
            className="max-w-87 w-full font-medium text-20 leading-4 tracking-normal mask-[linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.5))] max-sm:text-sm"
            color="text-white"
            animation={{ delay: 0.15 }}
          >
            New York Early-Stage B2B SaaS Funding Contraction vs. Accelerating
            AI Market Penetration
          </Text>
          <Text
            className="max-w-98.5 w-full text-base leading-4 tracking-normal max-sm:text-sm"
            color="text-primary/50"
            animation={{ delay: 0.22 }}
          >
            Demonstrating the investment opportunity created by declining
            early-stage capital allocation against rapidly expanding AI-driven
            enterprise software adoption in New York’s technology ecosystem
          </Text>
        </div>

        <div className="mt-16.5 grid grid-cols-[auto_24.1rem] gap-11 max-xxl:gap-4 max-xl:grid-cols-1 max-lg:mt-7">
          <Motion
            delay={0.35}
            className="overflow-hidden flex flex-col px-10 pb-10 pt-7.5 rounded-3xl bg-[linear-gradient(to_bottom,rgba(255,255,255,0.003),rgba(255,255,255,0.01))] backdrop-blur-3xl bg-bottom-left bg-cover relative before:u-border-gradient-[linear-gradient(170deg,rgba(255,255,255,0.1),rgba(153,153,153,0))] max-lg:p-4 max-lg:pb-5 max-sm:rounded-2xl"
          >
            <Text className="font-tthoves text-32 font-semibold -tracking-3 max-sm:text-18">
              Market Gap Analysis
            </Text>
            <div className="pt-5 flex justify-between gap-5 max-sm:pt-3">
              <p className="leading-4 tracking-1 text-[0.6875rem] text-[#626268] max-w-46.5">
                % of Seed-Funded B2B SaaS Startups Raising Series A Within 2
                Years
              </p>
              <p className="leading-4 tracking-1 text-[0.6875rem] text-[#626268] text-end max-w-33">
                Median Days Between Seed and Series A Rounds
              </p>
            </div>
            <MarketGapAnalysisChart className="grow mt-5 min-h-40 aspect-[1/0.42] max-sm:aspect-[1/0.49]" />
            <ul className="mt-11 flex items-center gap-11 pl-16 max-xxl:items-start max-xxl:flex-col max-xxl:gap-3 max-sm:pl-6 max-sm:mt-4">
              <li className="text-sm leading-4 tracking-1 text-[#cccccc] flex items-center gap-2 max-sm:text-[0.625rem]">
                <span className="shrink-0 w-2 h-[3px] bg-[#9C77FF] rounded-sm" />
                % of Seed-Funded B2B SaaS Startups Raising Series A Within 2
                Years
              </li>
              <li className="text-sm leading-4 tracking-1 text-[#cccccc] flex items-center gap-2 max-sm:text-[0.625rem]">
                <span className="shrink-0 w-2 h-[3px] bg-[#6776FF] rounded-sm" />
                Median Days Between Seed and Series A Rounds
              </li>
            </ul>
          </Motion>
          <Motion
            delay={0.5}
            className="p-7.5 rounded-3xl flex flex-col bg-[linear-gradient(to_bottom,rgba(255,255,255,0.003),rgba(255,255,255,0.01))] backdrop-blur-3xl border-px relative before:u-border-gradient-[linear-gradient(to_bottom,rgba(255,255,255,0.1)_50%,rgba(153,153,153,0))] max-sm:p-4 max-sm:rounded-2xl max-sm:pt-5"
          >
            <div className="max-sm:flex max-sm:items-center max-sm:gap-5">
              <div className="w-6 shrink-0 max-sm:w-5">
                <img src="/images/icons/pluses-purple.svg" className="w-full" />
              </div>
              <p className="mt-7.5 font-tthoves font-semibold text-32 -tracking-3 leading-tight u-text-gradient-[radial-gradient(circle_at_center,#FCFEFF_70%,#C1BBCC)] max-sm:text-20 max-sm:mt-0">
                Market Opportunity
              </p>
            </div>
            <p className="mt-5 text-base leading-4 tracking-1 u-text-gradient-[linear-gradient(to_bottom,#FFF,rgba(255,255,255,0.5))] max-sm:text-sm">
              The New York metropolitan area’s position as the world’s #2
              startup ecosystem, with over $35B in annual startup funding and a
              25.5% ecosystem growth rate in 2025, provides unparalleled access
              to capital, talent, and innovation—particularly in B2B SaaS, AI,
              and Fintech. As early-stage SaaS funding tightens and competition
              recedes, disciplined private equity investors can source
              attractive entry valuations and back capital-efficient founders,
              leveraging New York’s robust pipeline of 2,000+ AI startups and
              400,000 tech professionals to drive operational scale and outsized
              returns in a $900B+ consolidating market
            </p>
          </Motion>
        </div>
      </div>
    </Section>
  );
};
