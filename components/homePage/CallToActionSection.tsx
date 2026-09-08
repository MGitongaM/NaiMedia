import Link from "next/link";
import { Button } from "../ui/button";

export default function CallToActionSection() {
  return (
    <>
      <section className="bg-emerald-700/20 ">
        <div className="container my-30 px-2">
          <div className="max-w-4xl mx-auto rounded-md hover:scale-105 hover:shadow-md transition-all transition-discrete ease-linear duration-500 bg-lime-600/20 ">
            <div className="grid place-content-center text-center px-4 py-12">
              <h3 className="text-2xl font-extrabold mb-4">
                Ready to Elevate Your Next Event?
              </h3>
              <p className="leading-7 my-4">
                Don&apos;t leave your event&apos;s sound, lighting, and stage
                execution to chance.
                <br /> Partner with Nairobi&apos;s premier technical production
                team today.
              </p>
              <div className="flex justify-center items-center gap-4">
                <Link href="/contact-us">
                    <Button variant="outline" className="rounded-sm">
                    Speak to a Production Specialist
                    </Button>
                </Link>
                <Link href="/our-portfolio">
                <Button variant="secondary" className="rounded-sm">
                  View Our Portfolio
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
