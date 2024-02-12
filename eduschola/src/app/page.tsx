import Hero from "@/components/Hero/HeroSection";
import NavBar from "@/components/Nav/NavBar";
import Footer from "@/components/FooterSection/Footer";
import Review from "@/components/ReviewSection/Review";
import PaymentCard from "@/components/PaymentCardSection/PaymentCard";
import WhatWeOffer from "@/components/WhatWeOfferSection/WhatWeOffer";
import AboutUs from "@/components/AboutUsSection/AboutUs";
import NotFoundComponent from "@/components/NotFoundSection/NotFound";
import Image from "next/image";
import React from 'react';

export default function Home() {
  
  return (
    <main className="min-h-screen">      
      <NavBar />
      <Hero />
      <WhatWeOffer />
      <AboutUs />
      <Review />
      <PaymentCard />
      <Footer />
    </main>
  );
}
