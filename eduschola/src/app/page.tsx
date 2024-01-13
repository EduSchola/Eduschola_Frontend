import Hero from "@/components/Hero/HeroSection";
import NavBar from "@/components/Nav/NavBar";
import Footer from "@/components/FooterSection/Footer";
import PaymentCard from "@/components/PaymentCardSection/PaymentCard";
import GetStarted from "@/components/GetStartedSection/getStarted";
import WhatWeOffer from "@/components/WhatWeOfferSection/WhatWeOffer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <WhatWeOffer />
      <PaymentCard />
      <Footer />
      
    </main>
  );
}
