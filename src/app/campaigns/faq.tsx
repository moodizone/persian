import * as React from "react";

import { Accordion } from "@/components/Accordion";
import AccordionItem from "@/components/Accordion/item";
import Card from "@/components/Card";

const qs = [
  {
    id: 1,
    q: "مراحل طراحی وب سایت چیست؟",
    a: "تحلیل نیاز، طراحی رابط کاربری، توسعه، تست، و راه‌اندازی.",
  },
  {
    id: 2,
    q: "چرا طراحی وب سایت مهم است؟",
    a: "زیرا تاثیر زیادی بر جذب کاربران و اعتبار برند دارد.",
  },
  {
    id: 3,
    q: "چگونه یک وب سایت را بهینه کنیم؟",
    a: "با بهبود سرعت، سئو، طراحی ریسپانسیو و تجربه کاربری.",
  },
  {
    id: 4,
    q: "راهکارهای جذب ترافیک وب سایت چیست؟",
    a: "سئو، تبلیغات، تولید محتوا و فعالیت در شبکه‌های اجتماعی.",
  },
  {
    id: 5,
    q: "چطور ارزیابی امنیت وب سایت انجام دهیم؟",
    a: "با اسکن آسیب‌پذیری‌ها، تست نفوذ و بررسی دسترسی‌ها.",
  },
];

function FAQ() {
  return (
    <div className="px-6 py-10 md:pt-20 md:px-10 bg-alabaster">
      <Card>
        <div className="flex flex-col gap-6 md:flex-row md:flex-nowrap">
          <div className="grow-0 shrink-0 flex flex-col">
            <h2
              className="font-bold text-cod-gray text-[18px] text-center mb-2
      md:text-right md:text-[32px] md:leading-[1.5]"
            >
              {"FAQ"}
            </h2>
            <h2 className="font-bold text-[16px] text-cod-gray text-center md:text-right md:text-[24px]">
              {"سوالات متداولی که از ما می‌پرسند"}
            </h2>
            <h3 className="hidden md:block text-right md:mt-2 text-[16px]">
              {
                "سوالات متداولی که ممکن است نیاز شما نیز باشند در اینجا پاسخ داده شده اند"
              }
            </h3>
          </div>
          <div className="grow-1 shrink-1">
            <Accordion>
              {qs.map((item) => (
                <AccordionItem key={item.id} title={item.q} index={item.id}>
                  {item.a}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default FAQ;
