"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavItems from "./NavItems";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/jghc_logo_white@png.svg"
            width={128}
            height={38}
            alt="JHSD logo"
          />
        </Link>

        <div>
          <ul className="hidden md:flex-between w-full flex-col items-start gap-5 md:flex-row">
            <NavItems />
          </ul>
          <div onClick={handleNav} className="md:hidden">
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
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[370px] md:w-[45%] h-screen bg-white py-10 px-5 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-5 pr-10 pl-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
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
          <div className="py-4 flex flex-col cursor-pointer">
            <ul className="flex md:flex-between w-full flex-col items-start gap-5 md:flex-row">
              <NavItems />
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
