import { businessOfferingData } from "@/constantData/businessOfferingData";
import Image from "next/image";

export default function BusinessOffering() {
  return (
    <>
      <section className="bg-gray-200 min-h-dvh ">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center text-balance mb-12">
            <h2 className="text-5xl font-bold ">Our Business Offerings</h2>
            <p className="text-xl text-semibold my-4 ">
              We combine technical precision, world class equipment, and
              creative design to power events of every scale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-x-8 gap-y-16">
            {businessOfferingData.map((offering) => (
              <div
                // className="bg-transparent p-6 rounded-lg group  hover:scale-105 transition-all transition-discrete ease-linear duration-500 hover:shadow-md hover:shadow-gray-400"
                className="bg-transparent px-6 py-12 rounded-lg group   transition-all transition-discrete ease-linear duration-500 shadow-md lg:hover:shadow-md hover:shadow-gray-400"
                key={offering.id}
              >
                <h3 className="text-2xl md:text-4xl font-bold mb-8">{offering.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="h-[50dvh] w-full md:w-[42dvw] bg-zinc-100 rounded-lg lg:mask-r-from-25% group-hover:mask-none transition ease-in-out duration-1000">
                    <Image
                      src={offering.imageSrc}
                      alt={offering.title}
                      width={400}
                      height={400}
                      className="object-cover w-full group-hover:scale-95 transition-transform duration-700 h-full rounded-lg "
                      // className="object-cover w-full h-full rounded-lg "
                    />
                  </div>
                  <div className="">
                    <p className="text-gray-700"></p>
                    <br />
                    <p className="text-lg font-semibold">{offering.textOne}</p>
                    <br />
                    <p className="leading-7 hidden">{offering.textTwo}</p>
                    <br />
                    <p className="leading-7">{offering.textThree}</p>
                    <br />
                    <p className="leading-7">{offering.textFour}</p>
                    <br />
                    <p className="leading-7">{offering.textFive}</p>
                    <br />
                    <p className="leading-7">{offering.textSix}</p>
                    <br />
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
