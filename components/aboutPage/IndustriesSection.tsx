import { IndustriesServed } from "@/constantData/industriesData";
import CloudinaryImage from "../mediaAssets/CloudinaryImage";

export default function IndustriesSection() {
  return (
    <section className="bg-gray-200 min-h-[80dvh] mask-b-from-90% mask-b-to-gray-200 ">
      <div className="container mx-auto px-4 py-20 ">
        <div className="max-w-4xl text-balance mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
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
              className="relative  min-h-80 w-full rounded-sm overflow-hidden group transition-all transition-discrete ease-linear duration-500 shadow-md hover:shadow-fuchsia-200 "
            >
              {/* <Image
                src={industry.imgSrc}
                alt={industry.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover -z-10"
              /> */}
              <CloudinaryImage
                imgSrc={industry.imgSrc}
                height={400}
                width={400}
                alt={`${industry.name} image`}
                classNames={
                  "object-cover h-80 w-full -z-20 group-hover:scale-105 transition-all transition-discrete ease-linear duration-500 shadow-md "
                }
              />
              <div className="absolute inset-0 bg-black/85  transition-colors -z-5" />
              <div className="relative p-6 text-white">
                <h3 className="text-lg font-semibold drop-shadow-md -mt-20 bg-emerald-200 text-slate-800 w-64 px-2 py-1 rounded-sm">
                  {industry.name}
                </h3>
                <div className="prose prose-invert prose-p:text-white/90 prose-span:text-white max-w-none px-1 pt-6">
                  <p className="prose prose-p:font-medium mt-4" dangerouslySetInnerHTML={{ __html: industry.textOne }}></p>
                  <p dangerouslySetInnerHTML={{ __html: industry.textTwo }}></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
