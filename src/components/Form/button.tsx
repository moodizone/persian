import * as React from "react";
import { twMerge } from "tailwind-merge";

import Spinner from "@/components/SVGR/Spinner";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  loading?: boolean;
}

function Button({ children, className, loading, ...others }: Props) {
  return (
    <button
      {...others}
      className={twMerge("text-[14px] p-2 font-medium", className)}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
}

export default Button;
