import { Testimonials } from "@/constantData/testimonialData";
import Image from "next/image";

export default function TestimonialSection() {
  return (
    <>
      <section className="bg-gray-300 min-h-dvh ">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-5xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-40">
            {Testimonials.map((testimonial)=>(
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md relative">
                <p className="text-gray-700 mb-4 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="font-bold">- {testimonial.name}, {testimonial.title}</p>
                <div className="c">
                  <Image
                  src={testimonial.imgSrc}
                  width={400}
                  height={400}
                  alt={'image'}
                  className="object-cover h-40 w-40 rounded-full absolute -right-15 -bottom-20"
                  />
                </div>
              </div>

            ))}
          </div>
        </div>
      </section>
    </>
  );
}
