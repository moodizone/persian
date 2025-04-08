import * as React from "react";

import { CardType } from "./index";
import Image from "next/image";

function Item({ description, icon, title }: CardType) {
  return (
    <div className="flex flex-col w-[230px] h-[200px] md:w-[280px] md:h-[220px] py-4 px-4 md:py-6 bg-white border border-mercury rounded-lg">
      <div className="flex justify-center mb-2 md:mb-5">
        <Image src={icon} alt={title} width={40} height={40} />
      </div>
      <h5 className="font-bold text-center text-[12px] text-mine-shaft mb-2">
        {title}
      </h5>
      <p className="text-[12px] text-center text-mine-shaft">{description}</p>
    </div>
  );
}

export default Item;
