export default function LocationSection() {
  return (
    <>
      <section className="bg-gray-200 h-[65dvh]">
        <div className="">
          <div className="text-center pb-10 px-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Location</h2>
            <p className="text-lg text-gray-700">
              We are located at 33 Chambers Rd, Nairobi,
              Kenya.
            </p>
          </div>
          <div className="c">
           
            <iframe
              title="NaiMediaKenya Location"
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.5098745191235!2d36.83921794517597!3d-1.3228651946583396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11be560b5283%3A0x9dacf93424a76a51!2sThe%20Nextgen%20Mall!5e0!3m2!1sen!2ske!4v1788589206713!5m2!1sen!2ske"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3988.832148191612!2d36.819774!3d-1.2739324!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48e9a278a1d0cea5%3A0x2cd5c990ebee89a1!2sNaimedia%20Studio%20%26%20Events!5e0!3m2!1sen!2ske!4v1789291822282!5m2!1sen!2ske"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-[65dvh] border-0 rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </>
  );
}
