"use client";

import NaiMediaLogo from "../../public/images/NaiMediaKenyalogo.webp";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";

const navLinks = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About Us", href: "#" },
  { id: 3, title: "OurServices", href: "#" },
  { id: 4, title: "Contact Us", href: "/contact-us" },
];
export default function NavigationSection() {
  return (
    <>
      <NavigationMenu className="bg-gray-200  min-w-dvw sticky top-0 z-50">
        <NavigationMenuList>
          <NavigationMenuItem className="pl-10">
            <NavigationMenuLink href="/">
              <Image
                src={NaiMediaLogo}
                alt="Logo"
                width={400}
                height={400}
                className="object-contain h-auto w-56 "
              />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <div className="min-w-7xl mx-auto grid place-content-end">
            <NavigationMenuItem>
              {navLinks.map((link) => (
                <NavigationMenuLink
                  key={link.id}
                  className={navigationMenuTriggerStyle()}
                  render={<Link href={link.href}>{link.title}</Link>}
                  href={link.href}
                />
              ))}
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
