"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className={`flex justify-between items-center py-2 px-6 md:px-24 fixed w-full z-50 ${isOpen ? 'bg-cta text-white' : 'bg-white bg-opacity-70 text-black'}`}>
      <div className="flex items-center mr-auto">
        <Link href="/">
          <div className="text-black">
            <span>EduSchola</span>
          </div>
        </Link>
      </div>

      <div className={`md:flex ${isOpen ? "flex" : "hidden"} flex-col md:flex-row items-center md:items-center`}>
        <Link href="/services">
          <div className={`px-8 py-2 ${isOpen ? 'text-white hover:bg-cta hover:text-074786' : 'text-black hover:bg-cta hover:text-white'}`}>
            Services
          </div>
        </Link>
        <Link href="/reviews">
          <div className={`px-8 py-2 ${isOpen ? 'text-white hover:bg-cta hover:text-074786' : 'text-black hover:bg-cta hover:text-white'}`}>
            Reviews
          </div>
        </Link>
        <Link href="/about-us">
          <div className={`px-8 py-2 ${isOpen ? 'text-white hover:bg-cta hover:text-074786' : 'text-black hover:bg-cta hover:text-white'}`}>
            About Us
          </div>
        </Link>
        <Link href="/pricing">
          <div className={`px-8 py-2 ${isOpen ? 'text-white hover:bg-cta hover:text-074786' : 'text-black hover:bg-cta hover:text-white'}`}>
            Pricing
          </div>
        </Link>
      </div>

      <div className={`flex items-center ml-auto md:flex ${isOpen ? "flex" : "hidden"} flex-col md:flex-row items-center md:items-center`}>
        <Link href="/get-started">
          <div className={`border ${isOpen ? 'border-white text-white hover:text-074786' : 'border-cta'} text-cta px-4 py-2 rounded hover:bg-cta hover:text-white`}>
            Get Started
          </div>
        </Link>
      </div>

      <button
        className="md:hidden text-black"
        onClick={handleHamburgerClick}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="dark:text-black"
          >
            <line x1="3" y1="18" x2="21" y2="6" />
            <line x1="3" y1="6" x2="21" y2="18" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="dark:text-black"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
