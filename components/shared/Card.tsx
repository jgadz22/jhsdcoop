import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
  image: string;
  title: string;
  date: string;
  details: string;
  route: string;
};

const Card = ({ image, title, date, details, route }: CardProps) => {
  return (
    <>
      <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex items-center flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 transition-all duration-500">
        <div className="w-[400px] px-12 flex items-center justify-center flex-col gap-6">
          <Image
            className="max-h-[225px] object-cover group-hover:scale-110 duration-300 cursor-pointer overflow-hidden rounded-lg mt-5 lg:mt-0"
            src={image}
            width={300}
            height={400}
            alt="src"
          />
          <div className="flex justify-start flex-col">
            <p className="p-medium-20">{title}</p>
            <p className="p-regular-14">{date}</p>
            <p className="p-regular-16 tracking-wide my-3 hover:text-gray-100 duration-300">
              {details}
            </p>
            <p className="p-regular-14 text-yellow-300">
              <Link href={route}>続きを読む...</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
