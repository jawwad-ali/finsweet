import React from "react";
import Grey from "../assets/grey.png";
import Image from "next/image";
 
const HeroSection = () => {
  return (
    <div className="xl:flex xl:flex-row flex-col justify-center items-center bg-[#232536] h-auto pb-10">
      <div className="w-full xl:flex xl:flex-row flex-col justify-between xl:mt-28">
        <div className="w-[470px] xl:w-[590px] pt-24 xl:ml-24 mx-auto">
          <Image src={Grey} alt="grey" />
          <h1 className="font-sans mt-3 text-4xl leading-[56px] font-bold xl:text-[56px] text-white xl:leading-[68px]">
            Transform Your Idea Into Reality with Finsweet
          </h1>
          <p className="pt-5 font-sans text-sm xl:text-base text-white/[0.6] leading-6">
            The entire Finsweet team knows what's good with Webflow and you <br /> can
            too with 1 week and a good attitude.
          </p>
          <button className="flex mt-5 bg-[#444cfc] text-white py-3 px-4 xl:py-6 xl:px-8">
            Request a Quote{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>{" "}
          </button>
        </div>

        <div className="xl:w-[600px] w-[450px] -mt-12 mx-auto">
          <div className="bg-[url('../assets/hero.png')] w-[450px] h-[430px] xl:w-[523px] xl:h-[632px] bg-no-repeat bg-cover bg-center "></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
