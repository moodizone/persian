"use client";
import React, { ReactNode } from "react";

import { useAccordion } from "./index";
import Add from "@/components/SVGR/add";

interface AccordionItemProps {
  index: number;
  title: string;
  children: ReactNode;
}

function AccordionItem({
  index,
  title,
  children,
}: React.PropsWithChildren<AccordionItemProps>) {
  const { activeIndex, setActiveIndex } = useAccordion();
  const isOpen = activeIndex === index;

  const toggleAccordion = () => {
    setActiveIndex(isOpen ? -1 : index);
  };

  return (
    <div className="px-4 py-2 md:px-5 md:py-4 rounded-lg border border-gallery">
      <div className="flex justify-between cursor-pointer" onClick={toggleAccordion}>
        <h3 className="text-cod-gray font-bold text-[12px] md:text-[16px]">{title}</h3>
        <Add />
      </div>
      {isOpen && <div className="text-dove-gray font-normal text-[12px] md:text-[14px]">{children}</div>}
    </div>
  );
}

export default AccordionItem;
