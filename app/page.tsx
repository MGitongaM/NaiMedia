import BusinessOffering from "@/components/homePage/BusinessOffering";
import CallToActionSection from "@/components/homePage/CallToActionSection";
import CallToActionSection1 from "@/components/homePage/CallToActionSection1";
import ClientsSection from "@/components/homePage/ClientsSection";
import HeroSection from "@/components/homePage/HeroSection";
import TestimonialSection from "@/components/homePage/TestimonialSection";
import ValuePropositionSection from "@/components/homePage/ValuePropositionSection";




export default function Page() {
  return (
   <>
   <HeroSection/>
   <BusinessOffering/>
   <CallToActionSection/>
   <ValuePropositionSection/>
   <TestimonialSection/>
   <CallToActionSection1/>
   <ClientsSection/>
   </>
  );
}
