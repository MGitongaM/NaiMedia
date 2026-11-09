"use client";

// import NaiMediaLogo from "../../public/images/NaiMediaKenyalogo.webp";
// import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { MenuSquare } from "lucide-react";
import { useState } from "react";
import CloudinaryImage from "../mediaAssets/CloudinaryImage";

const navLinks = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About Us", href: "/about-us" },
  { id: 3, title: "Our Services", href: "/our-services" },
  { id: 4, title: "Our Portfolio", href: "/our-portfolio" },
  { id: 5, title: "Contact Us", href: "/contact-us" },
];
export default function NavigationSection() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className=" fixed z-50">
        {/* <NavigationMenu className=" bg-slate-900/80 backdrop-blur-md min-w-[88dvw] rounded-sm mx-auto   top-1 left-6 md:left-20"> */}
        <NavigationMenu className=" bg-slate-900/80 backdrop-blur-md min-w-[94dvw] lg:min-w-[88dvw] rounded-sm mx-auto   top-1 left-2 sm:left-6 lg:left-20">
          <NavigationMenuList className=" flex py-2">
            <NavigationMenuItem className="pl-1 flex-1 lg:pl-10">
              <Link href="/" className="bg-transparent hover:bg-transparent">
                <CloudinaryImage
                  imgSrc={"NaiMediaKenyalogo_2"}
                  height={400}
                  width={400}
                  alt={`NaiMedia Kenya logo image`}
                  classNames={"object-contain h-auto w-40  p-2 rounded-sm"}
                />
              </Link>
            </NavigationMenuItem>
            {/* desktop navigation */}
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.id} className="hidden lg:block">
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "h-11 text-slate-100 rounded-sm focus:text-slate-950 font-bold ml-2 hover:text-slate-950 hover:bg-fuchsia-200",
                  )}
                  render={<Link href={link.href}>{link.title}</Link>}
                  href={link.href}
                />
              </NavigationMenuItem>
            ))}
            {/* <div className="bg-red-500"> */}
            <NavigationMenuItem className="mr-10 justify-end md:pl-0 hidden lg:block ml-4">
              <NavigationMenuLink
                className="h-11 min-w-11 inline-flex cursor-pointer rounded-md px-4 font-bold bg-fuchsia-200 text-slate-900 hover:text-slate-900 hover:shadow-lg hover:bg-fuchsia-300"
                render={<Link href="/contact-us">Get AV Quote</Link>}
              />
            </NavigationMenuItem>
            {/* </div> */}
            {/* mobile navigation */}
            <NavigationMenuItem className="block lg:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger aria-label="Open navigation menu" className="inline-flex min-h-11 min-w-11 items-center justify-center">
                  <MenuSquare size={32} className="text-fuchsia-400 mr-2" aria-hidden="true" />
                </SheetTrigger>
                <SheetContent
                  side="top"
                  className="max-w-sm md:max-w-xl mx-auto rounded-b-md bg-slate-900/80 backdrop-blur-md border-none border-transparent"
                >
                  <SheetHeader>
                    <SheetTitle className="sr-only">Main navigation</SheetTitle>
                    <SheetDescription className="sr-only">Choose a page to visit.</SheetDescription>
                  </SheetHeader>
                  <div className="c">
                    <NavigationMenuList className="flex flex-col justify-center items-center list-none">
                      {navLinks.map((link) => (
                        <NavigationMenuItem key={link.id}>
                          <NavigationMenuLink
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "block min-h-11 my-4 font-semibold text-slate-100",
                            )}
                            render={<Link href={link.href}>{link.title}</Link>}
                            href={link.href}
                            onClick={() => setOpen(false)}
                          />
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </div>
                </SheetContent>
              </Sheet>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  );
}
