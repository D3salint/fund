import React from "react";

import { Section } from "@/shared/ui/PageWrapper";
import { Text } from "@/shared/ui/Text";
import { Motion } from "@/shared/ui/Motion";

const tempList = [
  {
    id: 1,
    title: "Proprietary Access",
    text: "Leverages New York’s #2 global startup ecosystem to source exclusive early-stage B2B SaaS deals from a pipeline of 2,000+ AI-driven startups, securing attractive entry valuations in a $35B+ annual funding market.",
  },
  {
    id: 2,
    title: "Capital-Efficient Focus",
    text: "Targets high-growth, capital-efficient founders in a consolidating $900B+ enterprise software market, capturing outsized returns by bridging the current funding gap as the next wave of AI-powered innovation emerges.",
  },
  {
    id: 3,
    title: "Proven Performanceo",
    text: "Demonstrates a decade-long track record with 10 transactions, $100M invested, and a 25% net IRR, underscoring disciplined execution and consistent outperformance in the enterprise software sector",
  },
  {
    id: 4,
    title: "Transformative Vision",
    text: "Catalyzes New York’s rise as the global epicenter for enterprise innovation, empowering the next generation of B2B SaaS leaders and delivering enduring value to investors and the broader technology ecosystem.",
  },
];

export const StandOut: React.FC = () => {
  return (
    <Section
      className="pt-32 max-xxxl:pt-16 pb-12"
      circles={{ showOnEnter: true, hideOnLeave: true }}
    >
      <div className="flex flex-col items-center max-w-339.5 px-5 mx-auto w-full">
        <Text
          className="font-tthoves font-semibold text-56 -tracking-4 leading-none text-center max-xxl:text-48 max-sm:text-40"
          animation={{}}
          as="h2"
        >
          Why We Stand Out
        </Text>
        <Text
          className="text-base leading-4 tracking-normal mt-6 max-w-95 text-center max-xxl:mt-4 max-md:text-sm"
          animation={{ delay: 0.1 }}
          color="text-primary/50"
        >
          Our key advantages that shape a sustainable competitive edge and
          strengthen investment appeal.
        </Text>
        <ul className="w-full mt-16 grid grid-cols-4 gap-4 max-xxl:grid-cols-2 max-xxl:mt-10 max-sm:grid-cols-1 max-sm:mt-5 max-sm:gap-3">
          {tempList.map((item, id) => (
            <Motion
              className="flex flex-col rounded-3xl pt-6.5 pl-7.5 pb-7.5 pr-2.75 bg-[url(/images/stand-out-glass.webp)] bg-cover relative before:absolute before:inset-0 before:p-[0.1rem] before:rounded-inherit before:compositemask before:bg-[linear-gradient(150deg,rgba(255,255,255,0.1),transparent)] before:pointer-events-none max-sm:pr-7.5"
              delay={id*0.1 + 0.5}
              as="li"
              key={item.id}
            >
              <div className="max-sm:flex max-sm:items-center max-sm:gap-4">
                <img
                  className="w-5 shrink-0"
                  src="/images/icons/pluses-purple.svg"
                />
                <Text className="mt-5 font-tthoves font-semibold text-2xl leading-none -tracking-3 max-w-44 max-sm:max-w-full max-sm:mt-0 max-sm:text-[1.25rem]">
                  {item.title}
                </Text>
              </div>
              <Text
                className="mt-16 text-18 leading-3 tracking-normal max-sm:mt-4.5 max-sm:text-sm"
                color="u-text-gradient-[linear-gradient(to_bottom,rgba(255,255,255,0.32),rgba(255,255,255,64))]"
              >
                {item.text}
              </Text>
            </Motion>
          ))}
        </ul>
        <Motion delay={0.75} className="overflow-hidden flex items-center gap-7.5 pl-7 py-3.5 w-full min-h-55.5 rounded-2xl mt-11 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.003),rgba(255,255,255,0.01))] backdrop-blur-2xl relative before:absolute before:inset-0 before:p-[0.1rem] before:rounded-inherit before:compositemask before:bg-[linear-gradient(150deg,rgba(255,255,255,0.1),transparent)] before:pointer-events-none max-lg:flex max-lg:flex-col max-lg:py-7 max-lg:gap-8 max-lg:px-7 max-lg:pb-0 max-md:mt-4 max-sm:gap-5">
          <p className="font-tthoves font-semibold text-[1.28125rem] leading-1 -tracking-5 text-white whitespace-nowrap">
            Target Returns:
          </p>
          <ul className="mx-auto max-w-75 w-full gap-2 flex items-center justify-between max-lg:mx-0">
            <li className="flex flex-col text-center">
              <p className="font-tthoves text-40 leading-none text-primary">
                47%
              </p>
              <p className="text-base -tracking-1 text-primary/40">Net MOIC</p>
            </li>
            <li className="w-px h-12.5 bg-white/20" />
            <li className="flex flex-col text-center">
              <p className="font-tthoves text-40 leading-none text-primary">
                63%
              </p>
              <p className="text-base -tracking-1 text-primary/40">Net IRR</p>
            </li>
          </ul>
          <p className="font-tthoves font-semibold text-[1.28125rem] leading-1 -tracking-5 text-white">
            Timeline:
          </p>          <div className="-my-3.5 h-55.5 shrink-0  max-lg:my-0  max-lg:-mx-7 ">
            <img

              className="w-full h-full object-contain"
              src="/images/stand-out-chart.webp"
              alt=""
            />
          </div>
        </Motion>
      </div>
    </Section>
  );
};
