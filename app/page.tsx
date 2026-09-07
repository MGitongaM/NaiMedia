import BusinessOffering from "@/components/homePage/BusinessOffering";
import ClientsSection from "@/components/homePage/ClientsSection";
import HeroSection from "@/components/homePage/HeroSection";
import TestimonialSection from "@/components/homePage/TestimonialSection";
import ValuePropositionSection from "@/components/homePage/ValuePropositionSection";




export default function Page() {
  return (
   <>
   <HeroSection/>
   <BusinessOffering/>
   <TestimonialSection/>
   <ValuePropositionSection/>
   <ClientsSection/>
   </>
  );
}
