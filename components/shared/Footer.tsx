import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";
import Translate from "./Translate";
import Map from "./Map";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-10 md:gap-4 p-5 sm:p-2 mb-5 items-center md:flex-row">
        <div className="flex flex-start flex-col gap-4 md:p-medium-20 p-medium-14">
          <div className="flex flex-start flex-col gap-4 h5-bold text-yellow-400 my-10">
            <p>日本グローバル人材協同組合</p>
            <Separator />
          </div>
          <div className="flex flex-start flex-row gap-4">
            <p className="w-5 md:w-10">
              <Image
                src="/assets/icons/location-grey.svg"
                width={28}
                height={28}
                alt="location logo"
              />
            </p>
            <p>〒020-0026 岩手県盛岡市開運橋通3番39号ダビンチビル2</p>
          </div>
          <div className="flex flex-start flex-row gap-4">
            <p className="w-5 md:w-10">
              <Image
                src="/assets/icons/mail.svg"
                width={28}
                height={28}
                alt="JHSD logo"
              />
            </p>
            <p>contact@jhsd.coop</p>
          </div>
          <div className="flex flex-start flex-row gap-4">
            <p className="w-5 md:w-10">
              <Image
                src="/assets/icons/phone.svg"
                width={28}
                height={28}
                alt="JHSD logo"
              />
            </p>
            <p>019-654-2320 / 019-656-0230</p>
          </div>
          <Link href="/" className="w-400">
            <Image
              src="/assets/images/banner_hirogh.jpg"
              width={400}
              height={100}
              alt="JHSD logo"
            />
          </Link>

          <div className="">
            <div className="">
              <Translate />
            </div>
            <div className="">
              <p>2024年JHSD生協 無断転載を禁じます。</p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <Map />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
