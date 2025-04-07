import React, { ReactNode } from "react";

import { useAccordion } from "./index";

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
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}

export default AccordionItem;
