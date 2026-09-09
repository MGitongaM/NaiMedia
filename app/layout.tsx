import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import FooterSection from "@/components/general/FooterSection";
import NavigationSection from "@/components/general/NavigationSection";
import { Toaster } from 'sonner';
import { getCldOgImageUrl } from "next-cloudinary";


const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const url= getCldOgImageUrl({src:"home_OpenGraph"})

export const metadata: Metadata = {
  title: "Home | NaiMedia Studio and Events",
  description: "Nairobi's trusted event equipment rental & production specialists. We deliver audio, lighting, video, staging, and conference solutions.",
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", figtree.variable)}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <NavigationSection/>
        {children}
        <Toaster position="top-right"/>
      <FooterSection/>
      </body>
    </html>
  );
}
