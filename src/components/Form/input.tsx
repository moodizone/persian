import * as React from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: React.ReactNode;
  error?: React.ReactNode;
}

function Input({ icon, className, error, ...others }: Props) {
  return (
    <div className="relative">
      {icon ? (
        <div className="absolute top-2 start-0 flex items-center ps-3.5 pointer-events-none">
          {icon}
        </div>
      ) : null}
      <input
        {...others}
        className={twMerge(
          `border border-mercury rounded-lg md:rounded-2xl text-[12px] leading-[1.6] outline-0
         focus:ring-gray-400 focus:border-gray-400 block w-full p-2.5`,
          icon ? "ps-10" : "ps-2.5",
          error
            ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500"
            : null,
          className
        )}
      />
      {error ? <p className="mt-1 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}

export default Input;
