import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="first">
        <div className="max-h-[500px] h-[75dvh] lg:max-h-[725px] bg-hero-img bg-cover bg-center flex items-center flex-col justify-center  transition-all duration-500 gap-5 md:gap-10">
          <div className="max-w-xs md:max-w-xl flex items-center justify-center">
            <Image
              src="/assets/images/jghc_logo@png.png"
              width={500}
              height={150}
              alt="JHSD logo"
            />
          </div>

          <div className="p-semibold-14 md:p-bold-24">
            日本グローバル人材共同組合
          </div>
        </div>
      </section>

      <section id="second" className="w-full bg-bodyColor text-white">
        <div className="wrapper my-8 flex items-center justify-center flex-col md:flex-row gap-8 md:gap-12">
          <Collection />
        </div>
      </section>
    </>
  );
}
