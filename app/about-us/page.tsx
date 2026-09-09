import HeroSection from "@/components/aboutPage/HeroSection";
import IndustriesSection from "@/components/aboutPage/IndustriesSection";
import StoryAndApproachSection from "@/components/aboutPage/StoryAndApproachSection";
import CallToActionSection1 from "@/components/homePage/CallToActionSection1";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

const url= getCldOgImageUrl({src:"about_OpenGraph"})

export const metadata: Metadata = {
  title: "About | NaiMedia Studio and Events",
  description: "Discover how NaiMedia delivers stress-free event execution across East Africa. Learn about our technical expertise, tier 1 inventory, and commitment to safety.",
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
    <StoryAndApproachSection/>
    <IndustriesSection/>
    <CallToActionSection1/>
    </>
  )
}
