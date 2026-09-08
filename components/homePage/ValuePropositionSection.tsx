export default function ValuePropositionSection() {
  return (
    <>
      <section className="bg-gray-400 min-h-[50dvh] ">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-5xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="flex flex-wrap justify-center gap-12 mb-20">
            <div className="grid place-content-center bg-amber-200/40 rounded-sm px-4 py-2 w-[40dvw]">
              <h3 className="text-xl font-extrabold ">The NaiMedia Difference</h3>
            </div>
            <div className="grid place-content-center bg-amber-300/50 rounded-sm px-4 py-2 w-[40dvw]">
              <p className="leading-7 ">
                When you choose NaiMedia Kenya, you are partnering with
                dedicated technical specialists committed to total operational
                reliability.
              </p>
            </div>
          </div>
          <div className="space-y-12 my-10">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl">
              <h3 className="text-2xl font-bold mb-4">Expertise</h3>
              <p className="text-gray-700">
                Our team has years of experience in event management and AV
                solutions, ensuring your event runs smoothly from start to
                finish.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-6xl ml-0 md:ml-20">
              <h3 className="text-2xl font-bold mb-4">
                Cutting Edge Technology
              </h3>
              <p className="text-gray-700">
                We use the latest audio visual equipment and stage setups to
                create unforgettable experiences for your guests.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md  max-w-7xl ml-0 md:ml-40">
              <h3 className="text-2xl font-bold mb-4">Customer Focus</h3>
              <p className="text-gray-700">
                We prioritize your vision and work closely with you to bring it
                to life, ensuring every detail is perfect.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
