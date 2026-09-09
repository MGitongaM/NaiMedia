import { servicesOfferingData } from "@/constantData/servicesOfferingData";
import CloudinaryImage from "../mediaAssets/CloudinaryImage";

export default function ServicesSection() {
  return (
    <section className="bg-slate-100 min-h-dvh mask-t-from-95% mask-b-to-gray-300 ">
      <div className="container mx-auto px-4 py-20 ">
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl font-bold text-center">
            Comprehensive Event Services
          </h1>
          <p className="text-lg text-gray-700 text-center mt-4"></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
          {servicesOfferingData.map((service) => (
            <div
              key={service.id}
              className="card grid grid-cols-12  items-end bg-white rounded-lg shadow-md group hover:shadow-fuchsia-200"
            >
              <div className="col-span-8 px-3 py-6">
                <h2 className="text-xl font-semibold">{service.title}</h2>
                <p
                  className="leading-6 my-10"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />
              </div>
              <div className="col-span-4 px-3 py-6">
                <CloudinaryImage
                  imgSrc={service.imageSrc}
                  height={400}
                  width={400}
                  alt={`${service.title} image`}
                  classNames={
                    "object-cover h-60 w-full group-hover:scale-105 transition-transform duration-700  rounded-lg"
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
