// *********************
// Role of the component: Classical hero component on home page
// Name of the component: Hero.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Hero />
// Input parameters: no input parameters
// Output: Classical hero component with two columns on desktop and one column on smaller devices
// *********************

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[700px] w-full bg-blue-500 max-lg:h-[900px] max-md:h-[750px]">
      <div className="grid grid-cols-3 items-center justify-items-center px-10 gap-x-10 max-w-screen-2xl mx-auto h-full max-lg:grid-cols-1 max-lg:py-10 max-lg:gap-y-10">
        <div className="flex flex-col gap-y-5 max-lg:order-last col-span-2">
          <h1 className="text-6xl text-white font-bold mb-3 max-xl:text-5xl max-md:text-4xl max-sm:text-3xl">
            THE PRODUCT OF THE FUTURE
          </h1>
          <p className="text-white max-sm:text-sm">
            This platform is a simple yet powerful marketplace where people can easily buy and sell second-hand items. The goal is to make trading pre-owned products quick, safe, and accessible—whether it’s gadgets, furniture, or everyday essentials. By connecting local buyers and sellers directly, it helps save money, reduce waste, and promote a more sustainable lifestyle.
          </p>
          <div className="flex gap-x-1 max-lg:flex-col max-lg:gap-y-1">
           
<Link href="/shop">
  <button className="bg-white text-blue-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
    BUY NOW
  </button>
</Link>
            <button className="bg-white text-blue-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
              LEARN MORE
            </button>
          </div>
        </div>
        <Image
          src="/watch for banner.png"
          width={400}
          height={400}
          alt="smart watch"
          className="max-md:w-[300px] max-md:h-[300px] max-sm:h-[250px] max-sm:w-[250px] w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
