import React from "react";
import { Separator } from "../ui/separator";
import { thirdComponent } from "@/constants";
import Image from "next/image";

const ThirdComponent = () => {
  return (
    <>
      {/* Left */}
      <div className=" w-full md:w-[950px] flex flex-start flex-col gap-4 p-medium-14 md:p-medium-18 lg:p-medium-20 ">
        <div className="flex flex-start flex-col gap-4">
          <p className=" h5-bold text-yellow-400 my-5 flex text-center md:text-start justify-center md:justify-start">
            技能実習制度について
          </p>
          <Separator />
          <p className="my-5 flex text-center md:text-start justify-center md:justify-start">
            この外国人技能実習制度とは、わが国の進んだ技能・技術・知識を開発途上国等への移転を図り、
            経済発展を担う「人づくり」に協力する国際貢献を目的とした制度です。
            日本グローバル人材協同組合は、外国人技能実習制度の
            「監理団体」として外国人技能実習生を受け入れるためのサポートをしております。
          </p>
        </div>
      </div>

      {/* Right */}
      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {thirdComponent.map((third) => {
            return (
              <li key={third.id}>
                <Image
                  src={third.image}
                  width={400}
                  height={400}
                  alt={third.id}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ThirdComponent;
