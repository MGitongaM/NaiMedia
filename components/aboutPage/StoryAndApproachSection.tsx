import React from "react";

export default function StoryAndApproachSection() {
  return (
    <>
      <section className="bg-gray-300 min-h-[80dvh] mask-b-from-90% mask-b-to-gray-200 ">
        <div className="container mx-auto px-4 py-20 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="c shadow-md px-2 md:px-12 py-8">
                <div className="mb-4">
                <h2 className="text-4xl font-bold">Our Story</h2>
                <p className="font-semibold mt-6">
                    Built on Precision, Passion, and Performance
                </p>

                </div>
              <p className="leading-7">
                What started as a passion for cutting edge sound and stage
                technology has grown into a trusted, full service production
                partner for event organizers, brands, and venue managers
                nationwide.
              </p>
              <br />
              <br />
              <br />
              <p className="leading-7">
                Over time, we&apos;ve expanded our inventory and expertise to
                cover every facet of live execution from certified structural
                rigging and high resolution video mapping to custom acoustic
                engineering and spatial CAD design. But despite our growth, our
                core mission remains unchanged: to provide stress free,
                end to end technical execution that lets our clients step into
                the spotlight with absolute confidence.
              </p>
            </div>
            <div className="shadow-md px-2 md:px-12 py-8 space-y-4">
              <h2 className="text-4xl font-bold">Our Approach</h2>
              <div className="rounded-sm px-3 py-8 bg-emerald-50">
                <p className="text-lg  font-extrabold">1. Consult & Design</p>
                <p className="leading-7 py-4">
                  Every successful show starts on paper. We analyze your venue,
                  audience size, and brand goals to design custom 3D renderings,
                  acoustic plots, and technical specs that maximize impact
                  within your footprint.
                </p>
              </div>
              <div className="rounded-sm px-3 py-8 bg-emerald-100">
                <p className="text-lg  font-extrabold">2. Prepare & Test</p>
                <p className="leading-7 py-4">
                  We don&apos;t leave performance to chance. Every line array,
                  LED panel, and lighting console undergoes rigorous quality
                  control, bench testing, and safety prep at our warehouse
                  before heading to your site.
                </p>
              </div>
              <div className="rounded-sm px-3 py-8 bg-emerald-200">
                <p className="text-lg  font-extrabold">3. Execute & Support</p>
                <p className="leading-7 py-4">
                  On event day, our team handles logistics, setup, show calling,
                  and live operation with quiet precision. From load in to post
                  show strike, our certified engineers and crew stay focused on
                  real time execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
