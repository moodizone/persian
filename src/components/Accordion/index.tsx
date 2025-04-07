import React from "react";

interface AccordionContextType {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const AccordionContext = React.createContext<AccordionContextType | undefined>(
  undefined
);

function Accordion({ children }: React.PropsWithChildren) {
  const [activeIndex, setActiveIndex] = React.useState<number>(-1);

  return (
    <AccordionContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </AccordionContext.Provider>
  );
}

const useAccordion = () => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion component is missing.");
  }
  return context;
};

export { Accordion, useAccordion };
