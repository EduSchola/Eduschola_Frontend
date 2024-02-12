import React from "react";
import Link from "next/link";
import Image from "next/image";
import ReactImage from 'react-image';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { FaChevronUp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';



const Footer = () => {
    return(
        <footer className="flex flex-col bg-transparent w-full h-fit z-350 items-center justify-center relative">
            {/* top of footer */}
            <div className="flex h-auto flex-col w-full items-center justify-center">
            <div className="flex flex-col relative w-full h-[400px] items-center justify-center lg:flex">
                {/* image container */}
                <div className="flex w-full mt-4 relative">
                    <Image
                        src="/Vectorimg.png"
                        alt="eduschola vector image background"
                        width={180}
                        height={414}
                        style={{ objectFit: "fill", width: "100%", height: "100%" }}
                    />
                </div>

                {/* Second image container and Get Started div */}
                <div className="lg:flex lg:flex-row lg:w-[85%] lg:mb-0 flex flex-col w-full justify-center items-center absolute">
                    {/* Second image */}
                    <div className="w-[85%] lg:w-[50%] mt-8 lg:mb-0 items-center justify-center">
                        <Image
                            src="/imgFoota.png"
                            alt="eduschola image design"
                            height={689}
                            width={1440}
                            style={{ objectFit: "contain", width: "100%", height: "100%" }}
                        />
                    </div>

                    {/* Get Started div */}
                    <div className="lg:w-[50%] lg:ml-10 lg:text-left p-4 mb-10 h-[50%] w-full justify-center items-center bg-footerExt relative">
                        <p className="text-2xl lg:text-6xl border-white text-white py-3 relative">
                            Get Started!
                            <span className="absolute inset-x-0 bottom-0 h-1 bg-white w-[30%] "></span>
                        </p>
                        <p className="text-sm lg:text-l mb-2 py-2">
                            Sign up now or try any of the plans in{" "}
                            <br/>
                            <span className="text-cta">free mode</span>
                        </p>
                        <button className="text-1.5x bg-cta hover-cta_hover text-white w-[45%] lg:w-[30%] py-2">
                            <Link href="/get-started">Get Started</Link>
                        </button>
                    </div>
                </div>
                </div>
            </div>
                    {/* footer bootom */}
                    <div className="flex flex-col bg-footerbg w-full justify-center items-center relative ">
                        <div className="flex flex-col w-full py-10 lg:flex lg:flex-row relative">
                            {/* newsletter & footer nav */}
                            <div className="flex flex-col justify-center p-2 items-center text-white w-[90%] lg:w-[50%]">
                                
                                <p className="text-2xl py-1">Subscribe to our news letter</p>
                                <div className="flex">
                                    <input type="email" placeholder="Email address" className="border border-white text-xl w-[100%] px-4 py-4 rounded-tl rounded-bl bg-transparent"></input>
                                    <button className="bg-cta text-white w-17 px-4 py-4 ml-0 rounded-tr rounded-br justify-center items-center"><FaLongArrowAltRight style={{ fontSize: "24px" }}/></button>
                                </div>
                            </div>
                            <div className="flex flex-col w-[100%] text-white">
                                {/* Rounded button */}
                                <div className="w-full flex justify-end py-4">
                                    <button className="bg-cta rounded-full px-2 py-2 justify-center items-center"><FaChevronUp style={{ fontSize: "24px" }}/></button>
                                </div>
                                {/* footer nav */}
                                {/* <div className="flex-grow"/> */}
                                <div className={"lg:flex lg:flex-row flex flex-col w-full justify-center items-center"}>
                                    <Link href="/services">
                                    <div className={`px-10 py-2 `}>
                                        Services
                                    </div>
                                    </Link>
                                    <Link href="/reviews">
                                    <div className={`px-10 py-2`}>
                                        Reviews
                                    </div>
                                    </Link>
                                    <Link href="/about-us">
                                    <div className={`px-10 py-2 `}>
                                        About Us
                                    </div>
                                    </Link>
                                    <Link href="/pricing">
                                    <div className={`px-10 py-2 `}>
                                        Pricing
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* contact container */}
                        <div className="flex flex-col w-full p-2 justify-center items-center relative">
                            <div className="flex text-white justify-center w-full items-center py-5">
                                {/* top email, phone & location */}
                                <div className="flex ml-2 justify-center items-center w-[30%]">
                                    <div className="flex bg-cta py-2 px-2 rounded-full justify-center items-center">                                    
                                        <FaEnvelope style={{ fontSize:"8pt"}}/>                                
                                    </div>
                                    <p className="ml-2 text-sm">info@eduschola.edu</p>
                                </div>
                                <div className="flex ml-2 justify-center items-center w-[30%]">
                                    <div className="flex bg-cta py-2 px-2 rounded-full justify-center items-center">                                    
                                        <FaPhoneAlt style={{ fontSize:"8pt"}}/>                                
                                    </div>
                                    <p className="ml-2 text-sm">+234xxxxxxxxxx</p>
                                </div>
                                <div className="flex ml-2 justify-center items-center w-[30%]">
                                    <div className="flex bg-cta py-2 px-2 rounded-full justify-center items-center">                                    
                                        <FaMapMarkerAlt style={{ fontSize:"8pt"}}/>                                
                                    </div>
                                    <p className="ml-2 text-sm">Lagos, Nigeria</p>
                                </div>
                            </div>

                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white w-full opacity-70"></span> 

                            
                            
                        </div>
                        <div className="flex text-white py-2 w-[90%] px-2 items-center justify-center">
                            {/* bottom website details */}
                            <div className="flex w-[80%] lg:w-[60%]">
                                <p className="mr-10 text-sm">2023 &copy; All rights reserved Eduschola</p>
                            </div>
                            <div className="flex w-[20%] justify-between">
                                <Link href="/">
                                <div>
                                    <FaFacebook style={{ fontSize:"18px"}}/>
                                </div>
                                </Link>
                                <Link href="/">
                                <div >
                                    <FaTwitter style={{ fontSize:"18px"}}/>
                                </div>
                                </Link>
                                <Link href="/">
                                <div>
                                    <FaInstagram style={{ fontSize:"18px"}}/>
                                </div>
                                </Link>
                            </div>
                            <div className="hidden md:block lg:w-[20%] lg:text-sm lg:ml-4">
                                <p><Link href="/">Terms of Services</Link> | <Link href="/">Privacy & Policy</Link></p>
                            </div>
                        </div>
                
            </div>
        </footer>
    )
}
export default Footer;