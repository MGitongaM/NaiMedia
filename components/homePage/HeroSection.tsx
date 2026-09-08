import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <>
      <section className="bg-gray-200 h-dvh">
        <div className="container mx-auto text-balance px-4 py-20">
          <h1 className="text-6xl md:text-7xl w-full md:w-10/12 lg:w-6/12 mx-auto text-center font-bold mb-4">
            Create Events with Precision and Passion
          </h1>
          <div className="w-full md:w-10/12 lg:w-8/12 mx-auto text-center mt-20">
            <p className="text-xl font-semibold text-gray-700 mb-8">
              Nairobi&apos;s trusted event management and equipment rental
              specialists.
            </p>
            <br />
            <p className="text-lg text-gray-700 mb-8">
              Whether you are hosting an executive corporate conference, a
              high energy live concert, an international summit, or an exclusive
              private celebration, NaiMedia Kenya delivers seamless live
              experiences powered by cutting edge audiovisual gear, certified
              stage setups, and expert on site technical support.
            </p>
            <br />
            <p className="text-lg text-gray-700 mb-8">
              Let&apos;s make your next event unforgettable.
            </p>
            <div className="flex flex-wrap justify-center gap-4 my-8">
              <Button className="bg-green-600 hover:bg-blue-400 text-white text-4xl font-bold py-8 px-4 rounded">
                Request a Quote
              </Button>
              <Button variant="secondary" className="bg-green-100 hover:bg-blue-200 text-slate-800 text-4xl font-bold py-8 px-4 rounded">
                 Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
