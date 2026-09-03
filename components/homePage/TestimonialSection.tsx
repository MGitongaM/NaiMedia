export default function TestimonialSection() {
  return (
    <>
      <section className="bg-gray-300 min-h-dvh ">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-5xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                &quot;NaiMedia Studio and Events transformed our corporate event into
                an unforgettable experience. Their attention to detail and
                professionalism were unmatched.&quot;
              </p>
              <p className="font-bold">- John Doe, CEO of TechCorp</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                &quot;The team at NaiMedia Studio and Events made our wedding day
                magical. From the AV setup to the stage design, everything was
                perfect.&quot;
              </p>
              <p className="font-bold">- Jane Smith, Bride</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                &quot;We hosted an international summit with NaiMedia Studio and
                Events, and they exceeded our expectations. Their expertise in
                multilingual conference setups was invaluable.&quot;
              </p>
              <p className="font-bold">- Dr. Emily Johnson, Event Organizer</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
