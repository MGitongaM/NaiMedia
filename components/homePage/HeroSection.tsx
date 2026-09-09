import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <>
      {/* <section className="bg-gray-200 h-dvh"> */}
      <section className="bg-gray-200 bg-[url('https://res.cloudinary.com/hqho8qw7/image/upload/v1788874114/home-hero-bg.jpg')] bg-cover bg-center bg-no-repeat  h-dvh z-10">
      <div className="min-h-dvh w-full absolute top-0 bg-black/60"></div>
        <div className="container mx-auto text-balance  px-4 py-20 relative z-20">
          <h1 className="text-6xl text-slate-200 md:text-7xl w-full md:w-10/12 lg:w-6/12 mx-auto text-center font-bold mt-10 mb-4">
            Create Events with Precision and Passion
          </h1>
          <div className="w-full md:w-10/12 lg:w-8/12 mx-auto text-center mt-20">
            <p className="text-xl font-semibold text-slate-100 mb-8">
              Nairobi&apos;s trusted event management and equipment rental
              specialists.
            </p>
            <br />
            <p className="text-lg text-gray-100 mb-8">
              Whether you are hosting an executive corporate conference, a
              high energy live concert, an international summit, or an exclusive
              private celebration, NaiMedia Kenya delivers seamless live
              experiences powered by cutting edge audiovisual gear, certified
              stage setups, and expert on site technical support.
            </p>
            <br />
            
            <div className="flex flex-wrap justify-center gap-4 my-8">
              <Link href="/contact-us">
              <Button className="bg-green-600 hover:bg-blue-400 text-white text-xl hover:scale-105 transition-all transition-discrete ease-linear duration-500 shadow-md font-bold py-8 px-4 rounded-sm">
                Request a Quote
              </Button>
              </Link>
              <Link href="/our-services">
              <Button variant="secondary" className="bg-green-100 hover:bg-blue-200 text-slate-800 text-xl hover:scale-105 transition-all transition-discrete ease-linear duration-500 shadow-md font-bold py-8 px-4 rounded-lg">
                 Our Services
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
