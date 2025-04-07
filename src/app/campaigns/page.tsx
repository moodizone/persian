import { Metadata } from "next";
import * as React from "react";

import FAQ from "@/app/campaigns/faq";
import Form from "@/app/campaigns/form";
import Hero from "@/app/campaigns/hero";

export const metadata: Metadata = {
  title: "Campaigns",
  description: "کمپین‌های بازاریابی و تبلیغاتی",
};

function Campaigns() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Form />
      <FAQ />
    </div>
  );
}

export default Campaigns;
