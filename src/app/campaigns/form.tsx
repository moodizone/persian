import * as React from "react";

import Card from "@/components/Card";
import Button from "@/components/Form/button";
import Input from "@/components/Form/input";
import User from "@/components/SVGR/User";
import Label from "@/components/Form/label";
import Envelop from "@/components/SVGR/Envelop";
import Phone from "@/components/SVGR/Phone";
import Textarea from "@/components/Form/textarea";
import CheckboxGroup from "@/components/Form/checkbox";

const options = [
  { value: "SEO", label: "خدمات سئو " },
  { value: "Design", label: "طراحی وب سایت" },
  { value: "Marketing", label: "اتوماسیون و بازاریابی" },
  { value: "Campaigns", label: "کمپین‌های بازاریابی و تبلیغاتی" },
  { value: "Content", label: "خدمات تولید محتوا" },
];

function Form() {
  return (
    <div className="flex flex-col px-6 py-10 md:pt-15 md:pb-10">
      <div className="max-w-[1200px] mx-auto flex flex-col">
        <h2 className="font-bold text-cod-gray text-[18px] text-center mb-4 d:text-[32px] md:leading-[1.5]">
          {"فرم دریافت مشاوره"}
        </h2>

        <h3 className="text-center text-shadow-mine-shaft text-[14px] mb-8 md:mb-4">
          {
            "برای ارتقای بیزینس خود به دنبال فرصتی ناب هستید ؟ فرم زیر را تکمیل کنید تا مشاوران ما به صورت کاملان رایگان شمارا راهنمایی کنند."
          }
        </h3>
      </div>
      <Card>
        <form className="flex flex-col items-center" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mb-10 md:mb-8">
            <div>
              <Label className="mb-2 md:mb-3">
                {"نام و نام خانوادگی خود را وارد کنید"}
              </Label>
              <Input
                placeholder="نام و نام خانوادگی"
                type="text"
                icon={<User />}
              />
            </div>
            <div>
              <Label className="mb-2 md:mb-3">
                {"آدرس ایمیل خود را وارد کنید"}
              </Label>
              <Input
                placeholder="email address@mail.com"
                type="text"
                icon={<Envelop />}
              />
            </div>
            <div>
              <Label className="mb-2 md:mb-3">
                {"شماره تماس خود را وارد کنید"}
              </Label>
              <Input placeholder="021-123456789" type="text" icon={<Phone />} />
            </div>
          </div>
          <div className="w-full mb-10 md:mb-8">
            <CheckboxGroup options={options} name="service" />
          </div>
          <div className="flex flex-col w-full mb-4">
            <Label className="mb-2 md:mb-3">
              {"در مورد درخواست خود برای ما بنویسید."}
            </Label>
            <Textarea placeholder="توضیحات (اختیاری)" rows={4} />
          </div>
          <Button className="text-white w-full bg-mine-shaft rounded-lg md:rounded-2xl max-w-[380px] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300">
            {"ثبت درخواست"}
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default Form;
