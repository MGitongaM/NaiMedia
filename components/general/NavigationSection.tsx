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
      <nav className="bg-gray-200/50 backdrop-blur-md fixed z-50">
        <NavigationMenu className="  min-w-[98dvw] sticky top-0 ">
          <NavigationMenuList className=" flex py-2">
            <NavigationMenuItem className="pl-1 flex-1 md:pl-10">
              <NavigationMenuLink
                href="/"
                className="bg-transparent hover:bg-transparent"
              >
                {/* <Image
                src={NaiMediaLogo}
                alt="Logo"
                width={400}
                height={400}
                className="object-contain h-auto w-40 "
              /> */}
                <CloudinaryImage
                  imgSrc={'NaiMediaKenyalogo_2'}
                  height={400}
                  width={400}
                  alt={`NaiMedia Kenya logo image`}
                  classNames={
                    "object-contain h-auto w-40"
                  }
                />
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* desktop navigation */}
            <div className="hidden lg:block flex-1 bg-amber-2000">
              <div className="grid place-content-center mr-0 lg:mr-40">
                <NavigationMenuItem>
                  {navLinks.map((link) => (
                    <NavigationMenuLink
                      key={link.id}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-bold hover:bg-fuchsia-200",
                      )}
                      render={<Link href={link.href}>{link.title}</Link>}
                      href={link.href}
                    />
                  ))}
                </NavigationMenuItem>
              </div>
            </div>
            {/* mobile navigation */}
            <div className="block  lg:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger>
                  <MenuSquare size={32} className="text-fuchsia-400" />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>
                  </SheetHeader>
                  <div className="c">
                    <div className="flex flex-col justify-center items-center gap-8">
                      <NavigationMenuItem>
                        {navLinks.map((link) => (
                          <NavigationMenuLink
                            key={link.id}
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "block my-4",
                            )}
                            render={<Link href={link.href}>{link.title}</Link>}
                            href={link.href}
                            onClick={() => setOpen(false)}
                          />
                        ))}
                      </NavigationMenuItem>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  );
}
