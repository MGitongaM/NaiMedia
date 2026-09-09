import Link from "next/link";
import { Button } from "../ui/button";
import CloudinaryVideo from "../mediaAssets/CloudinaryVideo";

export default function HeroSection() {
  return (
    <>
      {/* <section className="bg-gray-200 h-dvh"> */}
      {/* <section className="bg-gray-200 bg-[url('https://res.cloudinary.com/hqho8qw7/image/upload/v1788874114/home-hero-bg.jpg')] bg-cover bg-center bg-no-repeat  h-dvh z-10"> */}
      <section className="bg-slate-900/60 relative  h-dvh ">
        {/* <div className="absolute top-0 z-20"> */}
        <div className="min-h-[80dvh] w-full absolute top-0 bg-black/30"></div>
        <CloudinaryVideo
          src="full_production_av_bg_video"
          height={1280}
          width={1920}
          autoplay="always"
          loop={true}
          muted={true}
          controls={false}
          transformation={{
            crop: "fill",
            aspect: "16:10",
            width: 1920,
            height: 1280,
          }}
          className="hidden md:block object-cover lg:min-h-[85dvh] 2xl:max-h-[70dvh] inset-0 absolute top-0 left-0 right-0 -z-20"
        />
        <CloudinaryVideo
          src="full_production_av_bg_video"
          height={1280}
          width={1920}
          autoplay="always"
          loop={true}
          muted={true}
          controls={false}
          transformation={{
            crop: "fill",
            aspect: "9:16",
            width: 1080,
            height: 1920,
          }}
          className="block md:hidden object-cover min-h-screen lg:min-h-[85dvh] 2xl:max-h-[70dvh] inset-0 absolute top-0 left-0 right-0 -z-20"
        />

        <div className="container mx-auto text-balance  px-4 py-20 absolute top-0 z-30">
          <h1 className="text-6xl text-slate-100 md:text-7xl w-full md:w-10/12 lg:w-6/12 mx-auto text-center font-bold mt-10 mb-4">
            Create Events with Precision and Passion
          </h1>
          <div className="w-full md:w-10/12 lg:w-8/12 mx-auto text-center mt-20">
            <p className="text-xl font-semibold text-slate-100 mb-8">
              Nairobi&apos;s trusted event management and equipment rental
              specialists.
            </p>
            <br />
            <p className="text-lg text-gray-100 mb-8">
              Whether you are hosting an executive corporate conference, a high
              energy live concert, an international summit, or an exclusive
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
                <Button
                  variant="secondary"
                  className="bg-green-100 hover:bg-blue-200 text-slate-800 text-xl hover:scale-105 transition-all transition-discrete ease-linear duration-500 shadow-md font-bold py-8 px-4 rounded-lg"
                >
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
