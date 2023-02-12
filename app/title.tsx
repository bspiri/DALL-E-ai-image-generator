import React from "react";

function Title() {
  return (
    <div className="flex flex-col absolute z-1 top-1/3  ">
      <h1 className="text-lg sm:text-2xl md:text-4xl xl:text-6xl 2xl:text-8xl font-medium bg-clip-text text-transparent bg-gradient-to-l from-cyan-50 to-cyan-500 pb-2">
        Welcome
      </h1>
      <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-teal-600 pb-2">
        Cool AI Image Generator
      </h1>
    </div>
  );
}

export default Title;
