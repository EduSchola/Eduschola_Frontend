import { url } from "inspector";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="min-h-screen bg-hero-bg bg-cover md:bg-center bg-left-top bg-no-repeat relative z-40">      
      <section className="flex flex-col items-center justify-between md:px-24 md:pt-40 py-20 px-3">
        <section className="md:w-[55%] w-[86%]">
          <h2 className="md:text-[40px] text-[35px] font-[600] text-white">
            <span className="text-cta">Transform </span> your institution with
            our comprehensive management system
          </h2>
          <p className="font-[400] text-white md:text-[14.5px] text-[11.5px] pt-6">
            Our comprehensive school management software is designed to help
            schools and educational institutions manage all aspects of their
            operations. whether you’re an administrator, teacher, or parent. Our
            platform provides the tools you need to streamline your work and
            enhance your students learning experience.
          </p>

          <section className="md:flex items-center content-center justify-center pt-8 hidden">
            <button className="opacity-[0.9] py-[20px] px-[100px] text-white bg-cta border-none outline-none cursor-pointer rounded-[6px]">
              Get Started
            </button>
          </section>
        </section>
      </section>
      <section className="text-white text-[15px] font-[400] flex md:gap-8 gap-3 justify-end md:pr-20 pr-6">
        <a href="/">Facebook</a>
        <a href="/">Instagram</a>
        <a href="/">Twitter</a>
      </section>
      <section className="absolute min-h-screen w-full bg-[#000] top-0 left-0 opacity-[0.2] -z-10"></section>
      
    </main>
  );
};

export default Hero;
