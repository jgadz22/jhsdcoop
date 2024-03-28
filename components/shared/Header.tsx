import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
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

        <nav>
          <div className="md:flex-between hidden w-full">
            <NavItems />
          </div>
          <div className="flex w-32 justify-end gap-3">
            <MobileNav />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
