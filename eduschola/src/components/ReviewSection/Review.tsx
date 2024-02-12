import React from "react";
import Image from "next/image";

const Review = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full relative my-10 reltive">
      <section className="flex relative w-full">
        <Image
            src="/reviewbg.png"
            alt="vector image background for review section"
            width={1440}
            height={383}
            style={{ objectFit: "fill", width: "100%", height: "100%" }}
        />
      </section>
      <section className="flex flex-col absolute w-full h-9 justify-center items-center top-8 lg:top-10">
        <span className="text-cta text-xl my-10 font-Convergence lg:text-4xl">Reviews</span>        
      </section>
      <section className="flex flex-col w-full items-center justify-center top-0 relative lg:flex lg:flex-row lg:absolute lg:top-48 lg:w-[80%]">
        {/* reviews card section */}
        <section className="flex flex-col rounded-xl w-[80%] mb-4 bg-goldbg text-white items-center justify-center lg:mr-4 lg:w-[30%]">
          <section className="flex w-[90%] h-16 items-center justify-center my-4">
            <section className="rounded-full w-10 h-10 mr-4">
              <Image
                src="/r1.png"
                alt="vector image background for review section"
                width={50}
                height={50}
                style={{ objectFit: "fill", width: "100%", height: "100%" }}
            />
            </section>
            <section className="items-left">
              <span className="text-lg font-bold">Mechela Stephens</span>
              <p className="text-xs">Student Councelor</p> 
            </section>            
          </section>
          <section className="flex items-center justify-center text-center w-[90%] text-base my-4">
                <article>
                  “Using the EduSchola Education Management system at work makes my work easy.
                   It's extensive and accurste reporting and analysis on the students makes
                   understanding my students better and aslo makes communication with them a lot
                   smoother. I definitely recommend this platform for schools a like."
                </article>
              </section>

        </section>

        <section className="flex flex-col rounded-xl w-[80%] mb-4 bg-goldbg text-white items-center justify-center lg:mr-4 lg:w-[30%]">
          <section className="flex w-[90%] h-16 items-center justify-center my-4">
            <section className="rounded-full w-10 h-10 mr-4">
              <Image
                src="/r2.png"
                alt="vector image background for review section"
                width={50}
                height={50}
                style={{ objectFit: "fill", width: "100%", height: "100%" }}
            />
            </section>
            <section className="items-left">
              <span className="text-lg font-bold">Eric Wang</span>
              <p className="text-xs">Educational Consultant</p> 
            </section>            
          </section>
          <section className="flex items-center justify-center text-center w-[90%] text-base my-4">
                <article>
                “I would highly recommend Eduschola to anyone 
                looking for a reliable and comprehensive online platform with reliable
                educational resources. The user interface is great and easy to navigate. 
                I also highly recommend the E-Library for its educaional resources and 
                great collection of multimedia resources.”
                </article>
              </section>

        </section>

        <section className="flex flex-col rounded-xl w-[80%] mb-4 bg-goldbg text-white items-center justify-center lg:w-[30%]">
          <section className="flex w-[90%] h-20 items-center justify-center my-4">
            <section className="rounded-full w-10 h-10 mr-4">
              <Image
                src="/r3.png"
                alt="vector image background for review section"
                width={50}
                height={50}
                style={{ objectFit: "fill", width: "100%", height: "100%" }}
            />
            </section>
            <section className="items-left">
              <span className="text-lg font-bold">San George</span>
              <p className="text-xs">Mathematics Teacher</p> 
            </section>            
          </section>
          <section className="flex items-center justify-center text-center w-[90%] text-base my-4">
                <article>
                “Using Eduschola made it easy for me to manage all of my course materials
                 and assignments. The gradebook feature was especially helpful, as it allowed
                 me to quickly and easily manage my students grades. I will highly recommend it to anyone.”
                </article>
              </section>

        </section>
        </section> 
      
    </section>
  );
};

export default Review;
