import Hero from "@/components/Hero/HeroSection";
import NavBar from "@/components/Nav/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
    </main>
  );
}
