import clsx from "clsx";

type Props = {
  borderGradient?: string;
  bgGradient?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function ContentCard({
  className,
  borderGradient = "linear-gradient(170deg,rgba(255,255,255,0.1),rgba(153,153,153,0))",
  bgGradient = "linear-gradient(to_bottom,rgba(255,255,255,0.003),rgba(255,255,255,0.01))",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={clsx(
        `border relative before:u-border-gradient-[${borderGradient}] bg-[${bgGradient}]`,
        className
      )}
    />
  );
}
