import * as React from "react";
import { twMerge } from "tailwind-merge";

function Card({
  children,
  className,
  ...others
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) {
  return (
    <div
      {...others}
      className={twMerge(
        "bg-white w-full max-w-[1200px] mx-auto px-4 md:px-9 py-8 md:py-10 rounded-lg border border-mercury",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
