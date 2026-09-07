import { servicesOfferingData } from "@/constantData/servicesOfferingData";

export default function ServicesSection() {
  return (
    <section className="bg-gray-300 min-h-dvh mask-t-from-95% mask-b-to-gray-300 ">
      <div className="container mx-auto px-4 py-20 ">
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl font-bold text-center">
            Comprehensive Event Services
          </h1>
          <p className="text-lg text-gray-700 text-center mt-4"></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
            {servicesOfferingData.map((service) => (
            <div key={service.id} className="card bg-white rounded-lg shadow-md px-3 py-6">

                <div className="c">
                <h2 className="text-xl font-semibold">{service.title}</h2>
                <p className="leading-6" dangerouslySetInnerHTML={{ __html: service.description }} />
                </div>
            </div>
            
            ))}
        </div>
      </div>
    </section>
  );
}
