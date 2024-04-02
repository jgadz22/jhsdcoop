import Link from "next/link";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { carouselImages } from "@/constants";

const FourthComponent = () => {
  return (
    <div className="w-full max-h-screen flex flex-col gap-5 xl:gap-10 py-16 lg:py-8">
      <div className="">
        <p className="h5-bold text-yellow-400 flex items-center justify-center">
          日本グローバル人材協同組合の強み
        </p>
      </div>
      <div className="">
        <p className="p-medium-16 lg:p-medium-20 flex text-center justify-center text-white">
          日本グローバル人材協同組合は、外国人技能実習制度の「監理団体」として外国人技能実習生を受け入れるためのサポートをしております。
        </p>
      </div>
      <div className="flex items-center justify-center my-10 lg:my-15">
        <Carousel>
          <CarouselContent className="w-[250px] md:w-[500px] lg:w-[750px]">
            {carouselImages.map((carousel) => {
              return (
                <CarouselItem
                  key={carousel.id}
                  className="flex items-center justify-center"
                >
                  <div className="w-[250px] md:w-[350px] lg:w-[500px] flex items-center justify-center">
                    <Image
                      src={carousel.image}
                      width={500}
                      height={500}
                      alt={carousel.id}
                      className="cursor-pointer"
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="text-white hover:text-black" />
          <CarouselNext className="text-white hover:text-black" />
        </Carousel>
      </div>
      <div className="w-full flex items-center justify-center">
        <p className="text-yellow-400 border border-yellow-400 rounded-full bg-none px-5 py-1">
          <Link href="https://jhsd.coop/strengths/">もっと</Link>
        </p>
      </div>
    </div>
  );
};

export default FourthComponent;
