import HeroSection from "@/components/contactPage/HeroSection";
import LocationSection from "@/components/contactPage/LocationSection";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

const url= getCldOgImageUrl({src:"contact_OpenGraph"})

export const metadata: Metadata = {
  title: "Contact Us | NaiMedia Studio and Events",
  description: "Planning an event in Nairobi or East Africa? Contact NaiMedia Kenya for quotes, site surveys, and technical event production support.",
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
    <LocationSection/>
    </>
  )
}
