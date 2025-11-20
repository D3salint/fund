import React from "react";

import { Motion } from "@/shared/ui/Motion";
import { Section } from "@/shared/ui/PageWrapper";
import { Text } from "@/shared/ui/Text";
import { PDFIcon } from "@/shared/ui/icons/PDFIcon";
import clsx from "clsx";

/* Config */
const config = {
  investorsTable: [
    { range: "$100k–250k", fee: "1.75%", split: "50/50 split over 100%" },
    { range: "$250k–$1m", fee: "1.75%", split: "50/50 split over 100%" },
    { range: "$1m–$2.5m", fee: "1.50%", split: "80/20 split" },
    { range: "$2.5m+", fee: "1.25%", split: "80/20 split" },
  ],
  reports: [
    "Report #1",
    "Report #2",
    "Report #3",
    "Report #4",
    "Report #5",
    "Report #6",
    "Report #7",
    "Report #8",
  ],
};

/* Types */
type GeneralProps = {
  children: React.ReactNode;
  className?: string;
  padding?: string;
  style?: React.CSSProperties;
};

/* Section Components */
const Card = ({
  children,
  className,
  padding = "p-7.5 pt-6.25 max-xl:p-5 max-sm:p-4",
  style,
}: GeneralProps) => {
  return (
    <div
      className={clsx(
        className,
        "invest-card border relative before:u-border-gradient-[linear-gradient(170deg,rgba(255,255,255,0.1),rgba(153,153,153,0))] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.003),rgba(255,255,255,0.01))] backdrop-blur-3xl rounded-3xl",
        `${padding} flex flex-col max-sm:rounded-2xl`
      )}
      style={style}
    >
      {children}
    </div>
  );
};
const TitleH3 = ({ children, className }: GeneralProps) => {
  return (
    <h3
      className={clsx(
        className,
        "font-tthoves font-semibold text-32 -tracking-3 leading-tight",
        "text-white/60 [&_.gradient]:u-text-gradient-[linear-gradient(to_right,#FFF,rgba(255,255,255,0.4))]",
        "max-xl:text-[1.75rem] max-sm:text-18"
      )}
    >
      {children}
    </h3>
  );
};
const Name = ({ children, className }: GeneralProps) => {
  return (
    <p
      className={clsx(
        className,
        "font-semibold text-base leading-tight -tracking-1 u-text-gradient-[linear-gradient(to_right,rgba(255,255,255,0.8),rgba(255,255,255,0.5))]",
        "max-sm:text-xs"
      )}
    >
      {children}
    </p>
  );
};
const Value = ({ children, className }: GeneralProps) => {
  return (
    <p
      className={clsx(
        className,
        "font-tthoves font-normal text-40 -tracking-1 leading-[0.9] text-primary wrap-break",
        "max-xxl:text-[1.75rem] max-sm:text-20"
      )}
    >
      {children}
    </p>
  );
};

/* Root */
export const InvestmentTerms: React.FC = () => {
  return (
    <Section
      className="py-6 px-4 flex flex-col justify-center"
      circles={{ showOnEnter: true, hideOnLeave: true }}
    >
      <div className="max-w-380 w-full mx-auto">
        <Text
          className="font-tthoves text-56 font-semibold leading-none -tracking-4 max-sm:text-[1.75rem] text-center"
          animation={{}}
          as="h2"
        >
          Investment Terms & Length
        </Text>
        <Motion
          animationElement="&>.invest-card"
          initialState="[&>.invest-card]:translate-y-8 [&>.invest-card]:opacity-0 [&>.invest-card]:blur-md"
          stagger={0.1}
          delay={0.15}
          className="mt-10 gap-5 w-full flex flex-wrap max-md:gap-2"
        >
          {/* 1st card */}
          <Card className="w-[calc(66%-0.625rem)] bg-[url(/images/invest-terms-bg.png)]! bg-cover bg-top-right max-lg:w-full">
            <TitleH3>
              <span className="gradient">Fund Terms</span>
            </TitleH3>
            <div className="mt-6 flex flex-wrap gap-3 w-full max-md:gap-1.5 max-sm:mt-3">
              <Card
                padding="p-5"
                className="rounded-2xl max-sm:p-3 w-[calc(27.5%-0.5rem)] gap-8 max-md:order-4 max-md:w-[calc(34%-0.1875rem)]"
              >
                <Name>Lockup Period</Name>
                <Value className="mt-auto max-md:text-18!">12 months</Value>
                <p className="-mt-7 text-base leading-4 tracking-normal text-white/40 max-md:text-[0.5rem]">
                  90-day notice to withdraw
                </p>
              </Card>
              <Card
                padding="p-5"
                className="rounded-2xl max-sm:p-3 w-[calc(45%-0.5rem)] gap-4 max-md:order-6 max-md:w-full"
              >
                <Name>Reporting</Name>
                <div
                  className="grow mt-auto flex w-full overflow-hidden h-20 max-h-20 max-md:h-auto max-md:max-h-[unset]! max-md:grid max-md:grid-cols-4 max-md:[flex-flow:unset]! max-md:gap-2"
                  style={{ flexFlow: "wrap" }}
                >
                  {config.reports.map((report, id, arr) => (
                    <Card
                      padding="py-3.5 px-1"
                      className={clsx(
                        "flex flex-col justify-center items-center gap-1 w-20 h-full shrink-0 bg-[#0B0D16]! rounded-xl!",
                        `[&+&]:-ml-8 max-md:aspect-square max-md:ml-0! max-md:z-1!`
                      )}
                      style={{ zIndex: `${arr.length - id}` }}
                      key={report}
                    >
                      <PDFIcon className="size-6 shrink-0" />
                      <p className="text-sm text-center -tracking-1 leading-tight text-primary/40">
                        {report}
                      </p>
                    </Card>
                  ))}
                </div>
              </Card>
              <Card
                padding="p-5"
                className="rounded-2xl max-sm:p-3 w-[calc(27.5%-0.5rem)] gap-8 max-md:order-3 max-md:w-[calc(100%/3-0.25rem)]"
              >
                <Name>Minimum</Name>
                <Value className="mt-auto max-md:text-18!">$350,000</Value>
              </Card>
              <Card
                padding="p-5"
                className="rounded-2xl max-sm:p-3 w-[calc(39.5%-0.5rem)] gap-8 max-md:order-1 max-md:w-[calc(100%/3-0.25rem)]"
              >
                <Name>Fund Type</Name>
                <Value className="mt-auto max-md:text-18!">Closed-end</Value>
              </Card>
              <Card
                padding="p-5"
                className="rounded-2xl max-sm:p-3 w-[calc(21%-0.5rem)] gap-8 max-md:order-2 max-md:w-[calc(100%/3-0.25rem)]"
              >
                <Name>Target to Investors</Name>
                <Value className="mt-auto max-md:text-18!">25%</Value>
              </Card>
              <Card
                padding="p-5"
                className="rounded-2xl max-sm:p-3 w-[calc(39.5%-0.5rem)] gap-8 max-md:order-5 max-md:w-[calc(66%-0.1875rem)]"
              >
                <Name>Target to Investors</Name>
                <Value className="mt-auto max-md:text-18!">
                  Annually Dec 31st
                </Value>
                <p className="-mt-7 text-base leading-4 tracking-normal text-white/40 max-md:text-[0.5rem]">
                  (Pending positive)
                </p>
              </Card>
            </div>
          </Card>
          {/* 2nd card */}
          <Card className="w-[calc(34%-0.625rem)] max-lg:w-full">
            <TitleH3>
              <span className="gradient">Accredited Investors</span>{" "}
              <span className="block font-normal text-base leading-4 tracking-normal max-sm:text-xs">
                ($1m+ Net Worth)
              </span>
            </TitleH3>
            <div className="mt-6 grid grid-cols-2 gap-3 max-sm:mt-3 max-sm:gap-2">
              <Card
                padding="p-5 max-sm:p-3"
                className="justify-between gap-6 max-sm:gap-4 rounded-2xl"
              >
                <Name>Management Fee</Name>
                <Value>2%</Value>
              </Card>
              <Card
                padding="p-5 max-sm:p-3"
                className="justify-between gap-6 max-sm:gap-4 rounded-2xl"
              >
                <Name>Carried Interest</Name>
                <Value>80/20 split</Value>
              </Card>
              <Card
                padding="p-5 max-sm:px-3"
                className="rounded-2xl col-start-1 col-end-3 justify-between gap-6 max-sm:flex-row max-sm:items-center max-sm:gap-4"
              >
                <Name>Above 100% Yield in 1 Year</Name>
                <div className="max-sm:flex max-sm:flex-col max-sm:items-end">
                  <Value>50/50 split</Value>
                  <p className="mt-1 text-base leading-4 tracking-normal text-white/40 max-sm:text-xs">
                    (resets Dec 31st each year)
                  </p>
                </div>
              </Card>
            </div>
          </Card>
          {/* 3rd card */}
          <Card className="w-[calc(50%-0.625rem)] bg-[url(/images/invest-card3-bg.png)]! bg-cover bg-top-right max-lg:w-full">
            <TitleH3>
              <span className="gradient">Accredited Investors</span>{" "}
              <span className="font-normal text-base leading-4 tracking-normal max-sm:text-xs">
                ($5m+ Net Worth)
              </span>
            </TitleH3>
            {/* Table */}
            <ul className="mt-6 max-sm:mt-4">
              <li className="grid grid-cols-[32%_auto_33%] gap-2.5 text-sm -tracking-1 leading-tight text-primary/40 mb-3 max-sm:text-10">
                <p>Investment Range</p>
                <p>Mgmt. Fee</p>
                <p>Split</p>
              </li>
              {config.investorsTable.map((item) => (
                <li
                  className={clsx(
                    "py-2.5 grid grid-cols-[32%_auto_33%] gap-2.5 border-b border-b-white/10",
                    "font-tthoves text-18 -tracking-1 text-primary",
                    "max-sm:text-10 max-sm:py-1.5"
                  )}
                  key={item.fee + item.range + item.split}
                >
                  <p>{item.range}</p>
                  <p>{item.fee}</p>
                  <p>{item.split}</p>
                </li>
              ))}
            </ul>
          </Card>
          {/* 4th card */}
          <Card className="w-[calc(50%-0.625rem)] bg-[url(/images/invest-card4-bg.png)]! bg-cover bg-top-right max-lg:w-full">
            <TitleH3>
              <span className="gradient">Deployment Metrics</span>
            </TitleH3>
            <div className="grow mt-6 grid grid-cols-[9.375rem_auto] gap-6 max-sm:mt-4 max-sm:flex max-sm:flex-col max-sm:gap-1.5">
              <Card
                padding="p-5 max-sm:px-3"
                className="justify-between gap-6 rounded-2xl"
              >
                <Name>Deals</Name>
                <Value>5</Value>
              </Card>
              <Card
                padding="p-5 max-sm:px-3"
                className="justify-between gap-6 max-sm:gap-5 rounded-2xl"
              >
                <Name>Capital Bar (if debt)</Name>
                <div className="grow grid grid-cols-[40%_60%] gap-0.5 text-18 -tracking-1 leading-tight text-[#6776FF] max-sm:h-35.5">
                  <div className="pb-2 border-l border-l-[#6776FF] pl-1 flex flex-col justify-between gap-4 relative">
                    <p>Equity</p>
                    <p>40%</p>
                    <span className="h-1 w-full rounded-sm bg-[#6776FF] shrink-0 absolute -left-0.5 right-0 bottom-0" />
                  </div>
                  <div className="pb-2 border-l border-l-[#4A4A4D] pl-1 flex flex-col justify-between gap-4 relative">
                    <p className="text-[#4A4A4D]">Debt</p>
                    <p className="text-[#4A4A4D]">60%</p>
                    <span className="h-1 w-full rounded-sm bg-[#4A4A4D] shrink-0 absolute -left-0.5 right-0 bottom-0" />
                  </div>
                </div>
              </Card>
            </div>
          </Card>
        </Motion>
      </div>
    </Section>
  );
};
