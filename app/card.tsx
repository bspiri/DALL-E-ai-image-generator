import React from "react";
import Image from "next/image";

function Card({ url }: { url: string }) {
  console.log(`The URL is: ${url}`);

  return (
    <div className="flex justify-center relative h-[15rem] sm:h-[18rem] md:h-[20rem] lg:h-[25rem] xl:h-[30rem] w-[20rem] sm:w-[25rem] md:w-[30rem] lg:w-[35rem] xl:w-[45rem] mx-auto px-8 sm:px-16 mb-10 lg:mb-16 z-1">
      <Image
        src={url}
        alt="image"
        fill={true}
        sizes="100vw"
        className="flex relative rounded-sm shadow-xl object-cover w-full h-auto"
      />
    </div>
  );
}

export default Card;
