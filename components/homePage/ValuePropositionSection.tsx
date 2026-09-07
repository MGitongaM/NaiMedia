

export default function ValuePropositionSection() {
  return (
    <>
      <section className="bg-gray-400 min-h-[50dvh] ">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-5xl font-bold text-center mb-12">Why Choose Us?</h2>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
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
              <h3 className="text-2xl font-bold mb-4">Cutting Edge Technology</h3>
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
  )
}
