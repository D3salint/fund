import React from "react";

import { ContentCard } from "@/shared/ui/ContentCard";
import { HighlightLabel } from "@/shared/ui/HighlightLabel";
import { Section } from "@/shared/ui/PageWrapper";
import { Text } from "@/shared/ui/Text";
import { FlashOrangeIcon } from "@/shared/ui/icons/FlashOrangeIcon";
import { ForwardIcon } from "@/shared/ui/icons/ForwardIcon";
import { LocationIcon } from "@/shared/ui/icons/LocationIcon";
import { PDFIcon } from "@/shared/ui/icons/PDFIcon";
import { RocketIcon } from "@/shared/ui/icons/RocketIcon";
import clsx from "clsx";
import { DownloadIcon } from "@/shared/ui/icons/DownloadIcon";

export const BuildFuture: React.FC = () => {
  const { strategies, statistics } = React.useMemo(() => {
    return {
      strategies: [
        { name: "Asset Class Period", value: "Private Equity" },
        { name: "Fund Type", value: "Closed-end" },
        { name: "Strategy", value: "Opportunistic Investments" },
        { name: "Region", value: "New York", icon: LocationIcon },
        {
          name: "Strategy Keywords",
          text: "AI-Driven SaaS Consolidation, Proprietary Deal Origination, Capital-Efficient Growth, New York Ecosystem Advantage, Early-Stage Value Capture, Operational Alpha, Transformative Enterprise Innovation",
        },
        {
          name: "Strategy Type",
          value: "Aggressive",
          icon: FlashOrangeIcon,
          pdfs: ["#1", "#2", "#3", "#4", "#5", "#6", "#7"],
        },
      ],

      statistics: [
        { name: "GP Commit", value: "$2,000,000" },
        { name: "Min Investment", value: "$350,000" },
        { name: "Target Close Date", value: "12 months from launch" },
      ],
    };
  }, []); // deps if from API;

  return (
    <Section className={clsx(
      "py-12 max-md:py-6 px-4 flex flex-col justify-center",
      "bg-[url(/images/buildfuture-bg.jpg)] bg-cover bg-bottom-right"
    )}>
      <div className="mx-auto max-w-380 w-full flex flex-col">
        <HighlightLabel className="mx-auto  mt-3.5 max-sm:mt-0 flex items-center gap-0.5">
          <RocketIcon className="size-4 shrink-0" />
          <span className="u-text-gradient-[linear-gradient(to_right,#FFF,rgba(255,255,255,0.8))]">
            Ready to Partner
          </span>
        </HighlightLabel>
        <Text
          className="mt-6 font-tthoves text-56 font-semibold leading-none -tracking-4 max-sm:text-[1.75rem] text-center"
          // animation={{}}
          as="h2"
        >
          Let's Build the Future
        </Text>

        <div className="mt-10 grid grid-cols-[auto_30.8rem] gap-5">
          <ContentCard className="rounded-3xl p-7.5 pt-6.5 bg-[url(/images/buildfuture-leftcard-bg.png)] bg-top-right bg-cover" bgGradient=" ">
            <h3 className="inline-block font-tthoves font-semibold text-32 -tracking-3 leading-tight u-text-gradient-[linear-gradient(to_right,#FFF,rgba(255,255,255,0.4))]">
              Investment Strategy
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {strategies.map((item) => (
                <ContentCard
                  className="min-h-45 rounded-2xl before:backdrop-blur-3xl flex flex-col p-5"
                  key={item.name}
                >
                  <p className="mb-auto pb-8 inline-block font-semibold text-base -tracking-1 leading-tight u-text-gradient-[linear-gradient(to_right,rgba(255,255,255,0.8),rgba(255,255,255,0.5))]">
                    {item.name}
                  </p>
                  {item.value && (
                    <p className="flex items-center font-tthoves text-40 -tracking-1 leading-none text-primary">
                      {item.icon && (
                        <item.icon className="size-[0.95em] shrink-0" />
                      )}{" "}
                      {item.value}
                    </p>
                  )}
                  {item.text && (
                    <p className="font-tthoves text-2xl leading-tight -tracking-1 text-primary">
                      {item.text}
                    </p>
                  )}
                  {item.pdfs && (
                    <div className="mt-3 flex flex-wrap [flex-flow:wrap] h-15 overflow-hidden">
                      {item.pdfs.map((pdf, id, arr) => (
                        <ContentCard
                          className={clsx(
                            "p-2 size-15 flex flex-col items-center justify-center gap-0.5 rounded-lg before:backdrop-blur-2xl",
                            `[&+&]:-ml-2.75`
                          )}
                          style={{ zIndex: arr.length - id }}
                          key={pdf}
                        >
                          <PDFIcon className="size-6 shrink-0" />
                          <p className="text-center text-sm -tracking-1 leading-tight text-primary/40">
                            {pdf}
                          </p>
                        </ContentCard>
                      ))}
                    </div>
                  )}
                </ContentCard>
              ))}
            </div>
          </ContentCard>
          <div className="flex flex-col">
            <ContentCard className="grow rounded-3xl p-7.5 pt-6.5 before:backdrop-blur-3xl">
              <h3 className="inline-block font-tthoves font-semibold text-32 -tracking-3 leading-tight u-text-gradient-[linear-gradient(to_right,#FFF,rgba(255,255,255,0.4))]">
                First Close Targets
              </h3>
              <ContentCard className="mt-6 p-5 rounded-3xl before:backdrop-blur-3xl">
                <p className="inline-block text-base font-semibold leading-tight -tracking-1 u-text-gradient-[linear-gradient(to_right,rgba(255,255,255,0.8),rgba(255,255,255,0.5))]">
                  Target Amount
                </p>
                <p className="mt-2 font-tthoves text-40 -tracking-1 leading-tight text-primary">
                  $100M
                </p>
                <ul className="mt-3">
                  {statistics.map((item) => (
                    <li
                      className="group py-2.5 border-b border-b-white/10 flex items-center gap-3 justify-between"
                      key={item.name + item.value}
                    >
                      <p className="name text-base leading-4 tracking-normal text-white/50">
                        {item.name}
                      </p>
                      <p className="value text-right font-tthoves text-2xl leading-none -tracking-1 text-primary">
                        {item.value}
                      </p>
                    </li>
                  ))}
                </ul>
              </ContentCard>
              <ContentCard className="mt-6 p-5 rounded-3xl before:backdrop-blur-3xl">
                <p className="inline-block text-base font-semibold leading-tight -tracking-1 u-text-gradient-[linear-gradient(to_right,rgba(255,255,255,0.8),rgba(255,255,255,0.5))]">
                  Performance Targets
                </p>
                <div className="w-full grid grid-cols-2 gap-px relative">
                  <div className="flex flex-col items-center">
                    <img
                      src="/images/fast-progress-1.png"
                      className="max-w-51 w-full max-sm:max-w-26.5"
                    />
                    <p className="-mt-10 font-tthoves text-40 leading-none -tracking-1 text-primary text-center max-sm:text-2xl max-sm:-mt-6">
                      25%
                    </p>
                    <p className="mt-1 text-20 leading-tight -tracking-1 text-center text-primary/40 max-sm:text-xs">
                      Target IRR
                    </p>
                  </div>
                  <div className="w-px h-12.5 bg-white/20 absolute left-1/2 top-1/2 -translate-1/2" />
                  <div className="flex flex-col items-center">
                    <img
                      src="/images/fast-progress-2.png"
                      className="max-w-51 w-full max-sm:max-w-26.5"
                    />
                    <p className="-mt-10 font-tthoves text-40 leading-none -tracking-1 text-primary text-center max-sm:text-2xl max-sm:-mt-6">
                      8%
                    </p>
                    <p className="mt-1 text-20 leading-tight -tracking-1 text-center text-primary/40 max-sm:text-xs">
                      Preferred Return
                    </p>
                  </div>
                </div>
              </ContentCard>
            </ContentCard>
            <div className="mt-6.5 grid grid-cols-2 gap-3">
              <button
                className={clsx(
                  "p-4 rounded-[100px] bg-[linear-gradient(to_right,rgba(103,118,255,0.2),rgba(103,118,255,0.8))]",
                  "flex items-center justify-center gap-1 font-medium text-sm leading2 tracking-normal text-white text-left",
                  "relative before:u-border-gradient-[linear-gradient(to_right,rgba(51,71,255,0.2),#3347FF)]"
                )}
                type="button"
              >
                <ForwardIcon className="size-4.5 shrink-0" /> Schedule a Meeting
              </button>
              <button
                className={clsx(
                  "p-4 rounded-[100px] bg-[linear-gradient(to_bottom,rgba(51,51,51,0.3),rgba(0,0,0,0.3),rgba(0,0,0,0.3),rgba(51,51,51,0.3))]",
                  "flex items-center justify-center gap-1 font-medium text-sm leading2 tracking-normal text-white text-left",
                  "relative before:u-border-gradient-[linear-gradient(to_right,rgba(51,71,255,0.2),#3347FF)]"
                )}
                type="button"
              >
                <DownloadIcon className="size-4.5 shrink-0" /> Download Deck

              </button>
            </div>
            <p className="mt-5 text-base text-white/80 leading-4 tracking-normal text-right">
              [name]@[fundname].com
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
