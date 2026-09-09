export default function HeroSection() {
  return (
    <>
      <section className="bg-gray-200 bg-[url('https://res.cloudinary.com/hqho8qw7/image/upload/v1788944360/abstract-1.jpg')]   bg-cover bg-center bg-no-repeat relative min-h-[80dvh] z-10">
      <div className="min-h-[80dvh] w-full absolute top-0 bg-black/60"></div>
        <div className="container mx-auto px-4 py-20 relative z-20 ">
            <div className="max-w-6xl text-balance text-slate-100 mx-auto mt-20 mb-12">
                <h1 className="text-4xl md:text-7xl font-bold text-center">
                    Seamless AV and production management for any occasion
                </h1>
                <p className="text-lg  text-center mt-4">
                    From concept and technical design to seamless setup and on site
                    execution, we deliver high impact audiovisual experiences tailored
                    to your vision. Whether you are hosting a corporate summit, live
                    concert, or private gala, our expert team and cutting edge inventory
                    ensure flawless execution every time.
                </p>
            </div>
        </div>
      </section>
    </>
  );
}
