import CallToActionSection1 from "@/components/homePage/CallToActionSection1";
import HeroSection from "@/components/servicePage/HeroSection";
import ServicesSection from "@/components/servicePage/ServicesSection";
import WhyUsSection from "@/components/servicePage/WhyUsSection";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

const url= getCldOgImageUrl({src:"services_OpenGraph"})

export const metadata: Metadata = {
  title: "Our Services | NaiMedia Studio and Events",
  description: "Explore our event services: full production, sound systems, LED displays, intelligent lighting, staging, certified rigging, and conference setups in Nairobi.",
  openGraph:{
    images:[
      {
        width:1200,
        height:627,
        url
      }
    ]
  }
};

export default function page() {
  return (
    <>
    <HeroSection/>
    <ServicesSection/>
    <CallToActionSection1/>
    <WhyUsSection/>
    </>    
  )
}
