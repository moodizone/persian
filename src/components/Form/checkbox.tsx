"use client";
import React from "react";

import Checkbox from "@/components/SVGR/checkbox";
import { twMerge } from "tailwind-merge";

export interface OptionType<T> {
  value: T;
  label: string;
}

interface Props<T> {
  options?: OptionType<T>[];
  name: string;
  value: T[];
  onChange: (value: T[]) => void;
}

export default function CheckboxGroup<T extends string>({
  options = [],
  name,
  value,
  onChange,
}: Props<T>) {
  const toggleOption = (option: T) => {
    onChange(
      value.includes(option)
        ? value.filter((o) => o !== option)
        : [...value, option]
    );
  };

  return (
    <div
      role="group"
      aria-label="Selectable options"
      className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row md:flex-wrap gap-4"
    >
      {options.map((option) => {
        const isChecked = value.includes(option.value);

        return (
          <div
            key={option.value}
            role="checkbox"
            tabIndex={0}
            aria-checked={isChecked}
            onClick={() => toggleOption(option.value)}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                toggleOption(option.value);
              }
            }}
            className={twMerge(
              `px-4 py-2 border border-mercury cursor-pointer select-none outline-none 
                text-[12px] font-bold text-mine-shaft rounded-lg md:rounded-2xl
              focus:ring-gray-400 focus:border-gray-400`,
              isChecked ? "border-mine-shaft" : "border-mercury"
            )}
          >
            <div className="flex flex-row">
              <Checkbox
                color={isChecked ? " var(--color-mine-shaft)" : "white"}
              />
              <div className="ms-1">{option.label}</div>
            </div>
            {isChecked && (
              <input type="hidden" name={`${name}[]`} value={option.value} />
            )}
          </div>
        );
      })}
    </div>
  );
}
