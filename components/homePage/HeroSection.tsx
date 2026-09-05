import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <>
      <section className="bg-gray-200 h-dvh">
        <div className="container mx-auto px-4 py-20">
          
          <h1 className="text-7xl w-6/12 mx-auto text-center font-bold mb-4">
            Create Events with Precision and Passion!
          </h1>
          <div className="w-6/12 mx-auto text-center mt-20">
            <p className="text-lg text-gray-700 mb-8">
              Nairobi&apos;s trusted event management and equipment rental
              specialists.
            </p>
            <br />
            <p className="text-lg text-gray-700 mb-8">
              Whether you&apos;re hosting a corporate conference, live concert,
              private function, or international summit. We deliver seamless
              experiences with cutting edge audio visual gear, world class stage
              setups, and expert support.
            </p>
            <br />
            <p className="text-lg text-gray-700 mb-8">
              Let&apos;s make your next event unforgettable.
            </p>
            <div className="flex flex-wrap justify-center gap-4 my-8">
                <Button className="bg-green-400 hover:bg-blue-700 text-white text-4xl font-bold py-8 px-4 rounded">
                  Talk To Us
                </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
