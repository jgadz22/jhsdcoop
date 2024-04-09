import React from "react";
import FirstCompImage from "./FirstCompImage";
import FirstCompText from "./FirstCompText";

const FirstComponent = () => {
  return (
    <div className="max-h-[500px] h-[75dvh] lg:max-h-[725px] bg-hero-img bg-cover bg-center flex items-center flex-col justify-center  transition-all duration-500 gap-5 md:gap-10">
      <div className="w-[250px] lg:w-[500px] md:max-w-xl flex items-center justify-center">
        <FirstCompImage />
      </div>

      <div className="p-semibold-14 md:p-bold-24 flex text-center">
        <FirstCompText />
      </div>
    </div>
  );
};

export default FirstComponent;
