import * as React from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  error?: React.ReactNode;
}

function Textarea({ className, error, ...others }: Props) {
  return (
    <div>
      <textarea
        {...others}
        className={twMerge(
          `bg-alabaster border border-mercury rounded-lg md:rounded-2xl text-[12px] leading-[1.6] outline-0
               focus:ring-gray-400 focus:border-gray-400 block w-full p-2.5`,
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

export default Textarea;
