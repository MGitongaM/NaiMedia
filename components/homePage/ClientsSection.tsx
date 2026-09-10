import { brands } from "@/constantData/brandsData";
import CloudinaryImage from "../mediaAssets/CloudinaryImage";

export default function ClientsSection() {
  return (
    <>
      <section className="bg-slate-100 min-h-dvh ">
        <div className="container mx-auto px-1 md:px-4 py-20">
          <div className="text-center text-balance my-14">
            <h2 className="text-4xl md:text-5xl font-bold text-center my-8">
              Brands that Trusted Us
            </h2>
            <p className="text-lg font-semibold">
              Trusted by Industry Leaders Across East Africa
            </p>
            <p className="leading-7">
              Partnering with top brands, financial institutions, and
              hospitality leaders to deliver world-class event experiences.
            </p>
          </div>
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8"> */}
          <div className="flex flex-wrap justify-center ">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="group w-40 md:w-48 lg:w-56 mx-1 md:mx-4 my-8 bg-white p-6 rounded-lg   shadow-sm hover:shadow-2md transition-all transition-discrete ease-linear duration-500"
              >
                <CloudinaryImage
                  imgSrc={brand.imgSrc}
                  height={400}
                  width={400}
                  alt={`${brand.name} image`}
                  classNames={
                    "object-contain h-40 w-80 mx-auto rounded-sm group-hover:scale-95 transition-all transition-discrete ease-linear duration-500"
                  }
                />
                <h3 className="text-sm text-center text-slate-300 group-hover:text-slate-600 font-medium mb-4">
                  {brand.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
