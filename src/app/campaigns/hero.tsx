import * as React from "react";

import img from "../../../public/img/cmps.png";
import Button from "@/components/Form/button";
import Image from "next/image";

function Hero() {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row md:flex-nowrap md:items-center px-6 md:px-10 py-4 md:min-h-[540px]">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-center md:text-right text-[18px] md:text-[24px] text-cod-gray font-bold mb-3 md:mb-4">
          {"کمپین‌های بازاریابی و تبلیغاتی"}
        </h1>
        <p className="text-[14px] md:text-[18px] font-bold md:font-medium text-center md:text-right text-mine-shaft mb-2 md:mb-3">
          {
            "آیا به دنبال راهی مطمئن برای دیده شدن برندتان هستید؟ مشاوره رایگان ما به شما کمک می‌کند تا مسیر موفقیت را پیدا کنید. همین حالا قدم اول را بردارید!"
          }
        </p>
        <p className="text-scorpion text-[12px] md:text-[16px] text-center md:text-right font-medium mb-4 md:mb-8">
          {"جهت دریافت مشاوره رایگان با شماره‌ی زیر تماس بگیرید"}
        </p>
        <Button className="text-white bg-purple-heart rounded-lg font-medium md:font-bold w-[145px] focus:outline-none focus:ring-4  hover:bg-purple-800 focus:ring-purple-300">
          {"ثبت درخواست"}
        </Button>
      </div>
      <div>
        <Image src={img} alt="marketing" />
      </div>
    </div>
  );
}

export default Hero;
