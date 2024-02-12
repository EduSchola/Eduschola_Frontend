import React from "react";
import Hero from "@/components/Hero/HeroSection";
import NavBar from "@/components/Nav/NavBar";
import Footer from "@/components/FooterSection/Footer";
import GetStarted from "@/components/GetStartedSection/getStarted";

export default function Page() {
    return (
        <>
            <NavBar />
            <Hero />
            <GetStarted />
            <Footer />
        </>

    )
}