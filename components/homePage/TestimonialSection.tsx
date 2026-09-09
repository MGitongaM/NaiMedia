import { Testimonials } from "@/constantData/testimonialData";

import CloudinaryImage from "../mediaAssets/CloudinaryImage";

export default function TestimonialSection() {
  return (
    <>
      <section className="bg-gray-300 min-h-dvh ">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-40 gap-y-28 md:gap-y-40 mt-20">
            {Testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md relative"
              >
                <p className="text-gray-700 mb-4 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="font-bold">
                  - {testimonial.name}, {testimonial.title}
                </p>
                <div className="c">
                  <CloudinaryImage
                    imgSrc={testimonial.imgSrc}
                    height={400}
                    width={400}
                    alt={`${testimonial.title} image`}
                    classNames={
                      "object-cover h-24 md:h-40 w-24 md:w-40 rounded-full absolute right-1 lg:-right-15 -bottom-16 lg:-bottom-20"
                    }
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
