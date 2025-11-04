import React from "react";

import { Motion } from "@/shared/ui/Motion";
import { Section } from "@/shared/ui/PageWrapper";
import { Text } from "@/shared/ui/Text";

const tempList = [
  {
    id: 1,
    icon: "/images/icons/market-limit-access.svg",
    title: "Limited access to emergingfund managers",
  },
  {
    id: 2,
    icon: "/images/icons/market-hidden.svg",
    title: "Lack of transparency in deal flow",
  },
  {
    id: 3,
    icon: "/images/icons/market-opportunities.svg",
    title: "Missed opportunities in niche markets",
  },
];

export const Problem: React.FC = () => {
  return (
    <Section className="pt-24 pb-10 max-xxxl:pt-20 max-sm:pt-8">
      <div className="max-w-400 px-10 mx-auto w-full max-lg:px-6 max-md:px-4">
        <div className="flex items-end justify-between gap-8 max-lg:flex-col max-lg:items-start max-sm:gap-0">
          <div>
            <Text
              className="font-tthoves text-56 font-semibold leading-none -tracking-4 max-sm:text-32"
              animation={{}}
              as="h2"
            >
              The Problem
            </Text>
            <Text
              className="mt-7.5 text-20 font-medium leading-4 max-w-181.75 mask-[linear-gradient(to_right,rgba(0,0,0,0.4),rgba(0,0,0,0.8))] max-sm:mt-2.5 max-sm:text-sm"
              animation={{ delay: 0.3 }}
              color="text-white"
            >
              Despite New York’s position as a leading technology hub,
              early-stage B2B SaaS startups in the region face a persistent
              funding gap due to capital concentration in later-stage deals and
              investor preference for consumer-facing ventures, limiting the
              growth and innovation potential of this critical sector.
            </Text>
          </div>
          <Text
            className="text-18 leading-4 max-w-94.5 max-lg:max-w-180 max-sm:text-sm max-sm:mt-3"
            animation={{ delay: 0.6 }}
            color="text-primary/50"
          >
            This inefficiency is exacerbated by recent macroeconomic
            uncertainty, which has further constrained private equity
            allocations to emerging enterprise software companies.
          </Text>
        </div>
        <div className="mt-16.5 grid grid-cols-[auto_23.625rem] gap-10 max-xxl:gap-4 max-xl:grid-cols-1 max-lg:mt-4">
          <Motion
            delay={0.35}
            className="flex flex-col px-10 pb-10 pt-7.5 rounded-3xl bg-[linear-gradient(to_bottom,rgba(255,255,255,0.003),rgba(255,255,255,0.01))] backdrop-blur-3xl bg-bottom-left bg-cover relative before:absolute before:inset-0 before:p-[0.1rem] before:rounded-inherit before:compositemask before:bg-[linear-gradient(170deg,rgba(255,255,255,0.1),rgba(153,153,153,0))] before:pointer-events-none max-lg:p-4 max-lg:pb-5"
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
            <div className="grid gap-6 grid-cols-[2.25rem_auto_2.25rem] mt-5 max-sm:mt-3 max-sm:grid-cols-[1.25rem_auto_1.25rem] max-sm:gap-2">
              <div className="flex flex-col text-end">
                <div className="flex flex-col justify-between h-[82%] my-auto">
                  <p className="text-xs leading-4 tracking-1 text-[#cccccc] max-sm:text-[0.625rem]">
                    40%
                  </p>
                  <p className="text-xs leading-4 tracking-1 text-[#cccccc] max-sm:text-[0.625rem]">
                    30%
                  </p>
                  <p className="text-xs leading-4 tracking-1 text-[#cccccc] max-sm:text-[0.625rem]">
                    20%
                  </p>
                  <p className="text-xs leading-4 tracking-1 text-[#cccccc] max-sm:text-[0.625rem]">
                    10%
                  </p>
                  <p className="text-xs leading-4 tracking-1 text-[#cccccc] max-sm:text-[0.625rem]">
                    0%
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="w-full scale-[1.15]"
                  src="/images/market-chart.svg"
                  alt=""
                />
                <div className="flex justify-between text-center text-xs leading-4 tracking-1 text-[#626268] mx-auto max-w-[99%] max-sm:text-[0.625rem]">
                  <p>2018</p>
                  <p>2019</p>
                  <p>2020</p>
                  <p>2021</p>
                  <p>2022</p>
                  <p>2023</p>
                  <p>2024</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col justify-between h-[82%] my-auto">
                  <p className="text-xs leading-4 tracking-1 text-[#cccccc] max-sm:text-[0.625rem]">
                    800
                  </p>
                  <p className="text-xs leading-4 tracking-1 text-[#cccccc] max-sm:text-[0.625rem]">
                    600
                  </p>
                  <p className="text-xs leading-4 tracking-1 text-[#cccccc] max-sm:text-[0.625rem]">
                    400
                  </p>
                  <p className="text-xs leading-4 tracking-1 text-[#cccccc] max-sm:text-[0.625rem]">
                    200
                  </p>
                  <p className="text-xs leading-4 tracking-1 text-[#cccccc] max-sm:text-[0.625rem]">
                    0
                  </p>
                </div>
              </div>
            </div>
            <ul className="mt-11 flex items-center gap-11 pl-16 max-xxl:items-start max-xxl:flex-col max-xxl:gap-3 max-sm:pl-6 max-sm:mt-4">
              <li className="text-sm leading-4 tracking-1 text-[#cccccc] flex items-center gap-2 max-sm:text-[0.625rem]">
                <span className="shrink-0 w-2 h-[3px] bg-[#9C77FF] rounded-sm"/>
                % of Seed-Funded B2B SaaS Startups Raising Series A Within 2
                Years
              </li>
              <li className="text-sm leading-4 tracking-1 text-[#cccccc] flex items-center gap-2 max-sm:text-[0.625rem]">
                <span className="shrink-0 w-2 h-[3px] bg-[#6776FF] rounded-sm"/>
                Median Days Between Seed and Series A Rounds
              </li>
            </ul>
          </Motion>
          <Motion
            delay={0.55}
            className="p-7.5 rounded-3xl flex flex-col gap-7 bg-[url(/images/problem-bg.webp)] bg-bottom-left bg-cover relative before:absolute before:inset-0 before:p-[0.1rem] before:rounded-inherit before:compositemask before:bg-[linear-gradient(170deg,rgba(255,255,255,0.1),rgba(153,153,153,0))] before:pointer-events-none max-xxl:gap-4 max-lg:p-4 max-sm:gap-4 max-md:bg-[url(/images/problem-bg@mob.webp)]"
          >
            <Text className="font-tthoves text-32 font-semibold -tracking-3 max-lg:text-20">
              Market Inefficiencies
            </Text>
            <ul className="flex flex-col gap-2.5 max-sm:gap-2">
              {tempList.map((item) => (
                <li
                  className="px-7.5 pt-6.25 pb-13.75 flex flex-col items-start gap-4 rounded-3xl bg-[linear-gradient(to_bottom,rgba(255,255,255,0.003),rgba(255,255,255,0.01))] backdrop-blur-2xl relative before:absolute before:inset-0 before:p-[0.1rem] before:rounded-inherit before:compositemask before:bg-[linear-gradient(170deg,rgba(255,255,255,0.1),rgba(153,153,153,0))] before:pointer-events-none max-xxl:pb-8 max-xl:flex-row max-xl:items-center max-lg:py-6 max-lg:px-3.5 max-sm:gap-3"
                  key={item.id}
                >
                  <img
                    className="size-8 shrink-0 max-sm:size-6"
                    src={item.icon}
                    alt=""
                  />
                  <Text
                    className="text-base font-semibold leading-tight -tracking-1 u-text-gradient-[linear-gradient(to_right,rgba(255,255,255,0.5),rgba(255,255,255,0.8))] max-sm:text-sm"
                    color=""
                  >
                    {item.title}
                  </Text>
                </li>
              ))}
            </ul>
          </Motion>
        </div>
      </div>
    </Section>
  );
};
