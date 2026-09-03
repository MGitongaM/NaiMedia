import Image from 'next/image'
import {Facebook,X,Instagram,Linkedin,Youtube} from '@thesvg/react';
import NaiMediaKenyaLogo from '../../public/images/NaiMediaKenyalogo.webp'

export default function FooterSection() {
  return (
    <>
    <footer className="bg-slate-400 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Image
            src={NaiMediaKenyaLogo}
            alt="Logo"
            width={400}
            height={400}
            className="object-contain w-80 h-80"
          />
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="text-white hover:text-gray-400">Terms of Service</a>
            <a href="#" className="text-white hover:text-gray-400">Contact Us</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly items-center -mt-20 mb-20">
          <div className="grid place-content-center ">
              <p className="text-sm text-center">Connect with us</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white hover:text-gray-400"> <Facebook className='h-6 w-6'/></a>
                <a href="#" className="text-white hover:text-gray-400"> <X className='h-6 w-6'/></a>
                <a href="#" className="text-white hover:text-gray-400"> <Instagram className='h-6 w-6'/></a>
                <a href="#" className="text-white hover:text-gray-400"> <Linkedin className='h-6 w-6'/></a>
                <a href="#" className="text-white hover:text-gray-400"> <Youtube className='h-6 w-6'/></a>
              </div>
          </div>
       

        </div>
        <div className="grid place-content-center">
            <p className="text-sm">copyright © {new Date().getFullYear()} NaiMediaKenya . All rights reserved.</p>
          </div>
          </div>
    </footer>   
    </>
  ) 
}
