import * as React from "react";
import { twMerge } from "tailwind-merge";

function Label({
  className,
  children,
  ...others
}: React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>) {
  return (
    <label
      {...others}
      className={twMerge(
        "block text-[12px] leading-[1.6] font-normal md:text-[14px] md:leading-[1.8] md:font-medium text-mine-shaft md:text-cod-gray",
        className
      )}
    >
      {children}
    </label>
  );
}

export default Label;
