import Collection from "@/components/shared/Collection";
import FifthComponent from "@/components/shared/FifthComponent";
import FirstComponent from "@/components/shared/FirstComponent";
import FourthComponent from "@/components/shared/FourthComponent";
import ThirdComponent from "@/components/shared/ThirdComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex-1 bg-castle-img bg-fixed bg-cover">
        <section id="first">
          <FirstComponent />
        </section>

        <section id="second" className="w-full bg-bodyColor text-white py-14">
          <div className="wrapper flex items-center justify-center flex-col md:flex-row gap-8 md:gap-12">
            <Collection />
          </div>
        </section>

        <section id="third" className="w-full bg-white">
          <div className="wrapper py-8 lg:py-20 flex items-center justify-between flex-col md:flex-row gap-5 md:gap-10">
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
      </div>
    </div>
  );
}
