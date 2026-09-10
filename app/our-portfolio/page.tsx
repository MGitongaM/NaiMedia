import CallToActionSection1 from "@/components/homePage/CallToActionSection1";
import HeroSection from "@/components/portFolioPage/HeroSection";
import OurWorkSection from "@/components/portFolioPage/OurWorkSection";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

const url= getCldOgImageUrl({src:"Portfolio_OG_image"})

export const metadata: Metadata = {
  title: "Our Portfolio | NaiMedia Studio and Events",
  description: "See NaiMedia in action. Browse our past event production projects, including corporate galas, high energy concerts, trade shows, and summits.",
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
    <OurWorkSection/>
    <CallToActionSection1/>
    </>
  )
}
