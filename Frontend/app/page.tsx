import AboutUs from "@/components/AboutUs";
import Filter from "@/components/Filter";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Reviews from "@/components/Reviews";


import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navigation/>
    <Hero/>
    <AboutUs/>
    <Filter/>
    <Reviews/>
    <Footer/>
    
    </>
    
  );
}
