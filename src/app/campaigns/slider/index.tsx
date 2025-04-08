"use client";
import * as React from "react";
import { StaticImageData } from "next/image";
import { Keyboard, Autoplay } from "swiper/modules";

import Item from "@/app/campaigns/slider/item";
import hand from "../../../../public/img/hand.png";
import management from "../../../../public/img/management.png";
import time from "../../../../public/img/time.png";
import ads from "../../../../public/img/ads.png";
import strategy from "../../../../public/img/strategy.png";
import team from "../../../../public/img/team.png";
import budget from "../../../../public/img/budget.png";
import growth from "../../../../public/img/growth.png";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export interface CardType {
  icon: StaticImageData;
  description: string;
  title: string;
  id: number;
}

const items: CardType[] = [
  {
    id: 1,
    icon: hand,
    title: "نگرانی از هزینه‌های تبلیغات",
    description:
      "برخی افراد ممکن است تصور کنند که تبلیغات هزینه‌بر است؛ اما پرشین سایت با ارائه سود بالا، این هزینه‌ها را جبران می‌کند.",
  },
  {
    id: 2,
    icon: management,
    title: "ترس از پیچیدگی مدیریت",
    description:
      "مدیران ممکن است نگران دشواری مدیریت کمپین‌ها باشند، اما ما تمامی فرآیندها را به ساده‌ترین شکل ممکن ارائه می‌دهیم.",
  },
  {
    id: 3,
    icon: time,
    title: "تصور زمان‌بر بودن نتایج",
    description:
      "برخی از افراد نگران این هستند که نتایج تبلیغات دیر به دست آید، در حالی که پرشین سایت با سرعت بالا، شما را در دستیابی به نتایج مطلوب یاری می‌کند.",
  },
  {
    id: 4,
    icon: ads,
    title: "ناآگاهی از تأثیر تبلیغات",
    description:
      "بسیاری از افراد نمی‌دانند که کمپین‌های تبلیغاتی چگونه می‌توانند منجر به افزایش فروش شوند؛ ما این تأثیرات را به وضوح برای شما نمایش خواهیم داد.",
  },
  {
    id: 5,
    icon: strategy,
    title: "نبود استراتژی مشخص",
    description:
      "نگران هماهنگی با اهداف کسب‌وکار خود نباشید؛ پرشین سایت برنامه‌ای متناسب با نیازهای شما طراحی خواهد کرد.",
  },
  {
    id: 6,
    icon: team,
    title: "عدم تخصص تیم در تبلیغات",
    description:
      "اگر تیم شما تجربه کافی در زمینه تبلیغات ندارد، ما تمامی فرآیندها را به صورت حرفه‌ای و با کیفیت بالا انجام خواهیم داد.",
  },
  {
    id: 7,
    icon: budget,
    title: "دغدغه هدر رفتن بودجه",
    description:
      "اگر نگران عدم کسب نتیجه هستید، پرشین سایت با برنامه‌ریزی دقیق به شما اطمینان می‌دهد که از بودجه خود به بهترین نحو استفاده خواهید کرد.",
  },
  {
    id: 8,
    icon: growth,
    title: "نداشتن برنامه برای رشد",
    description:
      "اگر استراتژی مشخصی برای رشد ندارید، پرشین سایت نقشه راه جامعی برای شما طراحی خواهد کرد.",
  },
];

function Slider() {
  return (
    <div className="pb-10 md:pb-[60px] pt-16 md:pt-[82px] px-6 flex flex-col relative">
      <h3 className="px-6 text-[18px] md:text-[20px] font-bold text-center text-white mb-6">
        {"موانع رایج در دریافت خدمات تولید محتوا برای کسب‌وکارها"}
      </h3>
      <div className="w-full max-w-[1200px] mx-auto h-[220px]">
        <Swiper
          spaceBetween={24}
          slidesPerView="auto"
          width={260}
          className="w-full overflow-visible"
          loop
          centeredSlides={false}
          modules={[Keyboard, Autoplay]}
          keyboard={{ enabled: true }}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className="!w-[260px]">
              <Item
                description={item.description}
                icon={item.icon}
                title={item.title}
                id={item.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute  top-10 md:top-[60px] left-0 right-0 h-[220px] md:h-[240px] bg-linear-to-b from-purple-heart to-meteorite z-[-1]" />
    </div>
  );
}

export default Slider;
