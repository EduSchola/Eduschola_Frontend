"use client";
import React, { useState } from "react";

const PaymentCard = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly((prev) => !prev);
  };

  return (
    <div className="flex flex-col w-full h-100 items-center justify-center my-10 relative lg:mt-40">
      <div className="flex relative w-80 justify-center items-center mt-32">
        <div
          className={`absolute flex items-center rounded-full border border-formbg h-10 w-64 cursor-pointer overflow-hidden`}
          onClick={handleToggle}
        >
          
          <section className="flex flex-row text-formbg bg-white w-full h-full p-2 items-center justify-center">
            <span className="mr-10">Monthly</span>
            <span>Annually</span>
          </section>
          <input
            type="checkbox"
            id="subscription-mode-toggle"
            className="hidden peer focus:outline-none"
            checked={isMonthly}
            onChange={() => setIsMonthly(!isMonthly)}
          />
          <label
            htmlFor="dark-mode-toggle"
            className={`absolute inset-0 w-1/2 h-full rounded-full transition-transform duration-300 ease-in-out bg-blue-500 ${
              isMonthly ? "transform translate-x-0" : "transform translate-x-full"
            }`}
          >
            <span className={`absolute inset-0 flex items-center justify-center text-${isMonthly ? "white" : isMonthly === false ? "white" : "blue-500"}`}>
              {isMonthly ? "Monthly" : "Annually"}
            </span>
          </label>
          
        </section>
        <section className="flex absolute rounded-full w-16 h-5 left-64 bg-cta text-white items-center justify-center text-xs">
            <span>save 17%</span>
        </section>
      </section>
      <section className="flex items-center justify-center text-formbg text-lg mt-10 relative">Get started with one of our subscription plans</section>
            
      <section className="flex flex-col w-full justify-center items-center text-white relative my-8 lg:flex lg:flex-row">
        {/* payment cards container*/}

        <section className="flex flex-col rounded-2xl w-[80%] h-90 bg-formbg justify-center items-center my-2 py-8 lg:w-80 lg:order-1">
          <h1 className="font-extrabold text-4xl mb-4">Bronze</h1>
          <span className="text-l mb-4">Features</span>
          <h1 className="font-extrabold text-4xl">$29.75 </h1>
          <span className="text-l mb-4"> /per Month</span>
          <span className="font-semibold">What is included</span>
          <ul className="list-disc list-inside text-white p-4">
            <li className="list-item">1 active chatbot</li>
            <li className="list-item">Send up to 500 mails</li>
          </ul>

          <button className="bg-white text-formbg font-bold items-center justify-center rounded-xl w-[60%] py-2 px-8 mt-4 mb-2">Start Free Trial</button>
          <span>Learn more</span>
        </section>

        <section className="flex flex-col rounded-2xl w-[80%] bg-formbg justify-center items-center my-2 py-8 lg:w-80 lg:order-3">
          <h1 className="font-extrabold text-4xl mb-4">Silver</h1>
          <span className="text-l mb-4">Basic Features</span>
          <h1 className="font-extrabold text-4xl">$39.75 </h1>
          <span className="text-l mb-4"> /per Month</span>
          <span className="font-semibold">What is included</span>
          <ul className="list-disc list-inside text-white p-4">
            <li className="list-item">All standard features</li>
            <li className="list-item">3 active chatbots</li>
            <li className="list-item">Send up to 40k mails</li>
          </ul>

          <button className="bg-white text-formbg font-bold items-center justify-center rounded-xl w-[60%] py-2 px-8 mt-4 mb-2">Start Free Trial</button>
          <span>Learn more</span>
        </section>

        <section className="flex flex-col rounded-2xl w-[85%] h-90 bg-formbg justify-center items-center my-2 py-8 lg:w-80 lg:order-2 lg:z-10 lg:bg-goldbg">
          <h1 className="font-extrabold text-4xl mb-4">Gold</h1>
          <span className="text-l mb-4">Features</span>
          <h1 className="font-extrabold text-4xl">$49.75 </h1>
          <span className="text-l mb-4"> /per Month</span>
          <span className="font-semibold">What is included</span>
          <section className="flex w-[80%] items-center justify-center">
            <ul className="list-disc list-inside text-white p-4">
              <li className="list-item w-full">All standard and advanced features</li>
              <li className="list-item">5 active chatbots</li>
              <li className="list-item">Send up to 40k mails</li>
            </ul>
          </section>
          <button className="bg-white text-formbg font-bold items-center justify-center rounded-xl w-[60%] py-2 px-8 mt-4 mb-2">Start Free Trial</button>
          <span>Learn more</span>
        </section>
      </section>
            
    </section>
  );
};

export default PaymentCard;
