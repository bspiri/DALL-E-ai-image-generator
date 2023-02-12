import React from "react";
import Image from "next/image";
import background from "../public/background.webp";

function Background() {
  return (
    <div>
      <Image
        src={background}
        alt="background"
        fill={true}
        sizes="100vw"
        className="absolute"
      />
    </div>
  );
}

export default Background;
