"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavItems from "./NavItems";
import { Separator } from "../ui/separator";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="w-full border-b bg-black text-white">
      <div className="p-3 w-full xl:wrapper flex items-center justify-between">
        <Link href="/" className="w-[250px]">
          <Image
            src="/assets/images/jghc_logo_white@png.svg"
            width={128}
            height={38}
            alt="JHSD logo"
          />
        </Link>

        <div>
          <ul className="hidden lg:flex-between w-full flex-col items-start gap-5 md:flex-row">
            <NavItems />
          </ul>
          <div onClick={handleNav} className="lg:hidden">
            <Image
              src="/assets/icons/menu.svg"
              alt="menu"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "lg:hidden fixed left-0 top-0 w-full h-full bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[270px] h-full bg-white pt-10 p-2 ease-in duration-500"
              : "fixed left-[-150%] top-0 p-2 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between mb-5">
              <Link href="/" className="w-36">
                <Image
                  src="/assets/images/jghc_logo_white@png.svg"
                  width={128}
                  height={38}
                  alt="JHSD logo"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pinter"
              >
                <Image
                  src="/assets/icons/close.svg"
                  alt="menu"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>

          <Separator />

          <div className="py-4 flex flex-col cursor-pointer mt-5">
            <ul className="flex w-full flex-col items-start gap-5 text-black">
              <NavItems />
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
