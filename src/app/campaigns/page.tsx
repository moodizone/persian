import { Metadata } from "next";
import * as React from "react";

import FAQ from "@/app/campaigns/faq";
import Form from "@/app/campaigns/form";

export const metadata: Metadata = {
  title: "Campaigns",
  description: "کمپین‌های بازاریابی و تبلیغاتی",
};

function Campaigns() {
  return (
    <div className="flex flex-col">
      <Form />
      <FAQ />
    </div>
  );
}

export default Campaigns;
