export default function HeroSection() {
  return (
    // <section className=" bg-[url('https://res.cloudinary.com/hqho8qw7/image/upload/v1788874114/home-hero-bg.jpg')] min-h-[50dvh] mask-b-from-90% mask-b-to-gray-200 ">
    <section className=" bg-slate-200 bg-[url('https://res.cloudinary.com/hqho8qw7/image/upload/v1788944360/abstract-1.jpg')]   bg-cover bg-center bg-no-repeat relative min-h-[50dvh] z-10">
      <div className="min-h-[51dvh] w-full absolute top-0 bg-black/60"></div>
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="max-w-4xl text-balance text-slate-100 mx-auto mt-20 mb-12">
          <h1 className="text-4xl md:text-7xl font-bold text-center">
            Our Work in Action{" "}
          </h1>
          <p className="text-center font-medium my-4">
            Turning Technical Vision into Flawless Live Experiences
          </p>
          <p className="text-lg  text-center mt-4">
            Behind every successful event is a seamless balance of
            high-definition visual design, crystal clear audio engineering, and
            certified structural production. Explore how NaiMedia Kenya partners
            with brands, event planners, and organizations across East Africa to
            execute unforgettable live, hybrid, and corporate experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
