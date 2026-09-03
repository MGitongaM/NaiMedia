
import Image from "next/image";
import Concert from "../../public/images/Concerts.jpg";
import Conference from "../../public/images/Conference.jpg"; 
import CorporateEvents from "../../public/images/CorporateEvents.jpg";
import PrivateEvents from "../../public/images/PrivateEvents.jpg";

export default function BusinessOffering() {
  return (
    <>
      <section className="bg-gray-200 min-h-dvh ">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-5xl font-bold text-center mb-12">
            Our Business Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md ">
              <h3 className="text-2xl font-bold mb-4">Corporate Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-[40dvh] w-[40dvw] bg-zinc-300 rounded-lg">
                    <Image
                      src={CorporateEvents}
                      alt="Corporate Event"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full rounded-lg mask-clip-border"
                        />
                </div>
                <div className="c">
                  <p className="text-gray-700">
                    Professional AV solutions for business events including
                    product launches, seminars, award ceremonies, and company
                    meetings.
                  </p>
                  <br />
                  <p className="c">
                    In today&apos;s fast paced global environment, conferences
                    demand more than just tables and chairs, they require
                    precise coordination, seamless communication, and cutting
                    edge technology.
                  </p>
                  <br />
                  <p className="c">
                    At NaiMedia Studio and Events, we specialize in delivering
                    end to end multilingual conference services tailored to meet
                    the demands of high level discussions, international
                    summits, and executive board meetings.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md ">
              <h3 className="text-2xl font-bold mb-4">Conferences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-[40dvh] w-[40dvw] bg-zinc-300">
                    <Image
                      src={Conference}
                      alt="Conference"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full rounded-lg"
                        />
                </div>
                <div className="c">
                  <p className="text-gray-700">
                    We specialize in multilingual conference setups with
                    interpretation booths, headsets, and audio-visual systems
                  </p>
                  <br />
                  <p className="c">
                    Whether you&apos;re organizing a local gig, a campus tour,
                    or a full scale music festival, we deliver professional
                    concert production services that elevate the experience for
                    both performers and audiences. With cutting edge gear and a
                    skilled crew, we bring your stage to life loud, clear, and
                    unforgettable.
                  </p>
                  <br />
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md ">
              <h3 className="text-2xl font-bold mb-4">Concerts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-[40dvh] w-[40dvw] bg-zinc-300">
                    <Image
                      src={Concert}
                      alt="Concert"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full rounded-lg"
                        />
                </div>
                <div className="c">
                  <p className="text-gray-700">
                    We ensure your performers sound and look great complete
                    concert production setups — stages, Audio, Lighting,
                    Rigging, and Visuals
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md ">
              <h3 className="text-2xl font-bold mb-4">Private Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-[40dvh] w-[40dvw] bg-zinc-300">
                    <Image
                      src={PrivateEvents}
                      alt="Private Event"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full rounded-lg"
                        />
                </div>
                <div className="c">
                  <p className="text-gray-700">
                    We ensure your performers sound and look great complete
                    concert production setups — stages, Audio, Lighting,
                    Rigging, and Visuals
                  </p>
                  <br />
                  <p className="c">
                    We understand that private events are deeply personal and
                    meaningful which is why we bring a touch of
                    professionalism, refined style, and technical excellence to
                    every occasion. Our goal is to ensure your special moments
                    are not only flawlessly executed, but also beautifully
                    memorable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
