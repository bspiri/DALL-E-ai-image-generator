import React from "react";
import Image from "next/image";

function Placeholder() {
  return (
    <div className="flex justify-center relative h-[15rem] sm:h-[18rem] md:h-[20rem] lg:h-[25rem] xl:h-[30rem] w-[20rem] sm:w-[25rem] md:w-[30rem] lg:w-[35rem] xl:w-[45rem] mx-auto px-8 sm:px-16 mb-10 lg:mb-16 z-1">
      <Image
        src={
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        }
        alt="Placeholder"
        fill={true}
        sizes="100vw"
        className="flex rounded-sm shadow-md object-cover opacity-40 w-full h-auto "
      />
    </div>
  );
}

export default Placeholder;
