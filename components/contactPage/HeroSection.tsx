import ContactForm from "../general/ContactForm";

export default function HeroSection() {
  return (
    <>
      <section className="bg-gray-200 min-h-[95dvh]">
        <div className="conatiner grid grid-cols-1 lg:grid-cols-2 gap-12 mt-40 mb-20 px-3">
          <div className="">
            <h1 className="text-4xl md:text-7xl w-full lg:w-7/12 mx-auto text-start font-bold mb-4">
              Contact Us
            </h1>
            <div className="w-full lg:w-7/12 mx-auto text-start mt-20">
              <p className="text-lg text-gray-700 mb-8">
                Working Hours:
                <span className="font-bold">
                  {" "}
                  Monday - Friday, 9:00 AM - 6:00 PM
                </span>
              </p>
              <br />
              <p className="text-lg text-gray-700 mb-8">
                Phone:<span className="font-bold"> +254 123 456 789</span>
              </p>
              <br />
              <p className="text-lg text-gray-700 mb-8">
                Email:<span className="font-bold"> naimediakenya@info.com</span>
              </p>
              <br />
              <p className="text-lg font-light text-gray-700 mb-8 italic">
                Let&apos;s make your next event unforgettable.
              </p>
            </div>
          </div>
          <div className="c">
            <div className="w-full max-w-3xl border rounded-lg p-6 shadow-md bg-white">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
