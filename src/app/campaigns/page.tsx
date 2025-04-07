import { Metadata } from "next";
import * as React from "react";

import FAQ from "@/app/campaigns/faq";

export const metadata: Metadata = {
  title: "Campaigns",
  description: "کمپین‌های بازاریابی و تبلیغاتی",
};

function Campaigns() {
  return (
    <div className="flex flex-col">
      <FAQ />
    </div>
  );
}

export default Campaigns;
