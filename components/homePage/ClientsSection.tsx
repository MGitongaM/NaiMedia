import { brands } from "@/constantData/brandsData";
import Image from "next/image";


export default function ClientsSection() {
  return (
    <>
    <section className="bg-slate-100 min-h-dvh ">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-5xl font-bold text-center mb-12">Brands that Trusted Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {brands.map((brand)=>(
                <div key={brand.id} className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-2md transition-all transition-discrete ease-linear duration-500">
                    <Image
                        src={brand.imgSrc}
                        width={400}
                        height={400}
                        alt={brand.name}
                        className="object-contain h-40 w-80 mx-auto rounded-sm group-hover:scale-95 transition-all transition-discrete ease-linear duration-500"
                    />
                <h3 className="text-sm text-center text-slate-300 group-hover:text-slate-600 font-medium mb-4">{brand.name}</h3>
                </div>

            ))}
           
          </div>    
        </div>
        </section>
    </>
  )
}
