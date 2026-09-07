import { businessOfferingData } from "@/constantData/businessOfferingData";
import Image from "next/image";

export default function BusinessOffering() {
  return (
    <>
      <section className="bg-gray-200 min-h-dvh ">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-5xl font-bold text-center mb-12">
            Our Business Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-x-8 gap-y-16">
            {businessOfferingData.map((offering) => (
              <div
                // className="bg-transparent p-6 rounded-lg group  hover:scale-105 transition-all transition-discrete ease-linear duration-500 hover:shadow-md hover:shadow-gray-400"
                className="bg-transparent p-6 rounded-lg group   transition-all transition-discrete ease-linear duration-500 hover:shadow-md hover:shadow-gray-400"
                key={offering.id}
              >
                <h3 className="text-2xl font-bold mb-4">{offering.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="h-[50dvh] w-[42dvw] bg-zinc-300 rounded-lg mask-r-from-25% group-hover:mask-none transition ease-in-out duration-1000">
                    <Image
                      src={offering.imageSrc}
                      alt={offering.title}
                      width={400}
                      height={400}
                      className="object-cover w-full group-hover:scale-105 transition-transform duration-700 h-full rounded-lg "
                      // className="object-cover w-full h-full rounded-lg "
                    />
                  </div>
                  <div className="c">
                    <p className="text-gray-700"></p>
                    <br />
                    <p className="c">{offering.textOne}</p>
                    <br />
                    <p className="c">{offering.textTwo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
