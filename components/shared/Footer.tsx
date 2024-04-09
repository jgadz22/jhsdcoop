import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";
import Translate from "./Translate";
import Map from "./Map";

const Footer = () => {
  return (
    <footer className="border-t bg-gradient-to-bl from-gray-800 from-0% to-black to-100% opacity-100 text-white">
      <div className="wrapper flex flex-col gap-5">
        <div className="flex items-center justify-center md:justify-start   gap-4 h5-bold text-yellow-400 my-5">
          <p className="flex text-center md:text-start justify-center md:justify-start">
            日本グローバル人材協同組合
          </p>
        </div>

        <Separator />

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 my-5">
          <div className="flex items-center justify-center md:items-start flex-col gap-4 p-medium-14 md:p-medium-20 ">
            <div className="flex flex-start flex-row gap-4">
              <p className="w-[32px] md:w-[40px] flex items-center">
                <Image
                  src="/assets/icons/location.svg"
                  width={28}
                  height={28}
                  alt="location logo"
                />
              </p>
              <p className="flex text-center md:text-start justify-center md:justify-start">
                〒020-0026 岩手県盛岡市開運橋通3番39号ダビンチビル2
              </p>
            </div>
            <div className="flex flex-start flex-row gap-4">
              <p className="w-[32px] md:w-[40px] flex items-center">
                <Image
                  src="/assets/icons/mail.svg"
                  width={28}
                  height={28}
                  alt="Mail logo"
                />
              </p>
              <p className="flex text-center md:text-start justify-center md:justify-start">
                contact@jhsd.coop
              </p>
            </div>
            <div className="flex flex-start flex-row gap-4">
              <p className="w-[32px] md:w-[40px] flex items-center">
                <Image
                  src="/assets/icons/phone.svg"
                  width={28}
                  height={28}
                  alt="JHSD logo"
                />
              </p>
              <p className="flex text-center md:text-start justify-center md:justify-start">
                019-654-2320 / 019-656-0230
              </p>
            </div>
            <Link href="/" className="w-400">
              <Image
                src="/assets/images/banner_hirogh.jpg"
                width={400}
                height={100}
                alt="JHSD logo"
              />
            </Link>

            <div className="w-full flex items-center justify-center md:justify-start">
              <Translate />
            </div>
          </div>

          <div className="w-full md:w-[500px] flex items-center justify-center ">
            <Map />
          </div>
        </div>

        <Separator />

        <div className="flex items-center md:justify-start justify-center">
          <p className="flex text-center justify-center md:text-start">
            2024年JHSD生協 無断転載を禁じます。
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
