import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function CallToActionSection1() {
  return (
    <>
    <section className="bg-emerald-700/20 ">
        <div className="container my-30 px-2">
             <div className="max-w-4xl mx-auto rounded-md hover:scale-105 hover:shadow-md transition-all transition-discrete ease-linear duration-500 bg-lime-600/20">
            <div className="grid place-content-center text-center px-4 py-12">
              <h3 className="text-2xl font-extrabold mb-4">
                Let&apos;s Build Something Unforgettable Together
              </h3>
              <p className="leading-7 text-sm text-balance my-4">
                Have an upcoming event in Nairobi or across East Africa?<br />
                 Tell us
                about your technical requirements, date, and venue, <br/>and our team
                will prepare a tailored production plan and quote.
              </p>
              <div className="flex justify-center items-center gap-4">
                <Link href="/contact-us">
                  <Button variant="outline" className="rounded-sm">
                    Request Your Quote Now
                  </Button>
                </Link>

                
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}
