import Collection from "@/components/shared/Collection";
import FifthComponent from "@/components/shared/FifthComponent";
import FourthComponent from "@/components/shared/FourthComponent";
import ThirdComponent from "@/components/shared/ThirdComponent";
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

      <section id="second" className="w-full bg-bodyColor text-white py-14">
        <div className="wrapper flex items-center justify-center flex-col md:flex-row gap-8 md:gap-12">
          <Collection />
        </div>
      </section>

      <section id="third" className="w-full bg-white">
        <div className="wrapper py-8 lg:py-20 flex items-center justify-between flex-col md:flex-row gap-12 md:gap-16">
          <ThirdComponent />
        </div>
      </section>

      <section id="fourth" className="w-full bg-black/70">
        <div className="wrapper py-8 flex items-center justify-between flex-col md:flex-row gap-12 md:gap-16">
          <FourthComponent />
        </div>
      </section>

      <section id="fifth" className="w-full bg-[#089ede]">
        <div className="wrapper flex items-center justify-between flex-col md:flex-row gap-12 md:gap-16">
          <FifthComponent />
        </div>
      </section>
    </>
  );
}
