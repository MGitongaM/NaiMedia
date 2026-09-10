export default function HeroSection() {
  return (
    <>
      <section className="bg-gray-200 bg-[url('https://res.cloudinary.com/hqho8qw7/image/upload/v1789027379/about_us_hero_bg.jpg')] bg-cover bg-center bg-no-repeat relative min-h-[85dvh] z-10 ">
      <div className="min-h-[85dvh] w-full absolute top-0 bg-black/60"></div>
        <div className="container  mx-auto px-4 py-20 relative z-20 ">
          <div className="max-w-6xl text-balance text-slate-100 mx-auto mt-20 mb-12">
            <h1 className="text-4xl md:text-7xl font-bold text-center">
              Bringing Vision to Life Through Flawless Live Production
            </h1>
            <p className="text-2xl text-center my-10 font-semibold">
              At our core, we believe great technology should feel invisible.
            </p>
            <p className="text-lg text-center mt-4">
              Behind every unforgettable conference, high energy concert, or
              landmark corporate launch is a precise network of sound, light,
              and design working in complete harmony. We are a full service
              event production and audiovisual company dedicated to turning bold
              ideas into seamless, immersive live experiences.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
