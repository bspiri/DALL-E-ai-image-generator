import Image from "next/image";
import React from "react";
import banner from "../public/banner.webp";
import Title from "./title";

function Header() {
  return (
    <header className="flex justify-center items-center relative w-full h-52 sm:h-80 md:h-96 lg:h-[30rem] xl:h-[40rem]">
      <Image
        src={banner}
        alt="header"
        priority={true}
        sizes="100vw"
        fill={true}
        placeholder="blur"
        className="flex rounded shadow-xl object-cover w-auto h-auto 	"
      />
      <Title />
    </header>
  );
}

export default Header;
