import { IndustriesServed } from "@/constantData/industriesData";
import Image from "next/image";

export default function IndustriesSection() {
  return (
    <section className="bg-gray-200 min-h-[80dvh] mask-b-from-90% mask-b-to-gray-200 ">
      <div className="container mx-auto px-4 py-20 ">
        <div className="max-w-4xl text-balance mx-auto mb-12">
          <h1 className="text-5xl font-bold text-center">
            Industries We Serve
          </h1>
          <p className="text-lg text-gray-700 text-center mt-4">
            At NaiMedia Kenya, we understand that no two events are alike.
            Different sectors demand unique technical approaches, acoustic
            setups, and visual storytelling. We bring deep industry expertise,
            cutting edge inventory, and specialized technical execution to a
            diverse range of sectors across Kenya and beyond.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {IndustriesServed.map((industry) => (
            <div
              key={industry.id}
              className="relative border border-amber-300 min-h-80 w-full rounded-sm overflow-hidden group"
            >
              <Image
                src={industry.imgSrc}
                alt={industry.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover -z-10"
              />
              <div className="absolute inset-0 bg-black/85 group-hover:bg-black/60 transition-colors -z-5" />
              <div className="relative p-6 text-white">
                <h3 className="text-lg font-semibold drop-shadow-md">
                  {industry.name}
                </h3>
                <div className="prose prose-invert prose-p:text-white/90 prose-span:text-white max-w-none px-1 pt-6">
                  <p dangerouslySetInnerHTML={{ __html: industry.details }}></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
