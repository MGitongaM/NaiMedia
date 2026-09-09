
import { Facebook, X, Instagram, Linkedin, Youtube } from "@thesvg/react";
import CloudinaryImage from "../mediaAssets/CloudinaryImage";


export default function FooterSection() {
  return (
    <>
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="my-40">
            <div className="flex flex-col lg:flex-row gap-y-10 justify-between items-center">
              <CloudinaryImage
                imgSrc={"NaiMediaKenyalogo_2"}
                height={400}
                width={400}
                alt={`NaiMedia Kenya logo image`}
                classNames={"object-contain h-auto w-80"}
              />
              <div className="flex space-x-4 my-20 lg:mt-0">
                <a href="/privacy-policy" className="text-white hover:text-gray-400">
                  Privacy Policy
                </a>
                <a href="/terms-and-conditions" className="text-white hover:text-gray-400">
                  Terms of Service
                </a>
                <a href="/contact-us" className="text-white hover:text-gray-400">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-evenly items-center lg:-mt-20 mb-20">
              <div className="grid place-content-center ">
                <p className="text-sm text-center">Connect with us</p>
                <div className="flex space-x-4 mt-4">
                  <a  href="facebook.com" target="_blank"   className="bg-slate-100 rounded-full p-2 hover:scale-95 transition-all transition-discrete ease-linear duration-500">
                    {" "}
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a  href="x.com" target="_blank"   className="bg-slate-100 rounded-full p-2 hover:scale-95 transition-all transition-discrete ease-linear duration-500">
                    {" "}
                    <X className="h-6 w-6" />
                  </a>
                  <a  href="instagram.com" target="_blank"   className="bg-slate-100 rounded-full p-2 hover:scale-95 transition-all transition-discrete ease-linear duration-500">
                    {" "}
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a  href="linkedin" target="_blank"   className="bg-slate-100 rounded-full p-2 hover:scale-95 transition-all transition-discrete ease-linear duration-500">
                    {" "}
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a  href="youtube.com" target="_blank"   className="bg-slate-100 rounded-full p-2 hover:scale-95 transition-all transition-discrete ease-linear duration-500">
                    {" "}
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

          </div>
          <div className="grid place-content-center">
            <p className="text-sm">
              copyright © {new Date().getFullYear()} NaiMediaKenya . All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
