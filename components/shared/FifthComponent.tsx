import Image from "next/image";
import Link from "next/link";
import React from "react";

const FifthComponent = () => {
  return (
    <div className="w-full flex flex-col gap-10 xl:gap-5 py-10 ">
      <div className="w-full flex items-center justify-center">
        <Image
          src="/assets/icons/hand.svg"
          width={50}
          height={75}
          alt="Hand Icon"
        />
      </div>
      <div className="w-full flex items-center justify-center text-white">
        <p className="p-bold-18 lg:p-bold-24 flex text-center justify-center">
          COVID-19（新型コロナウイルス感染症）対策について
        </p>
      </div>
      <div className="w-full flex items-center justify-center">
        <p className="text-[#089ede] rounded-full bg-white px-5 py-2">
          <Link href="https://jhsd.coop/antivirus/">ここをクリック</Link>
        </p>
      </div>
    </div>
  );
};

export default FifthComponent;
