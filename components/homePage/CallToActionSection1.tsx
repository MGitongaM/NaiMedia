import React from 'react'
import { Button } from '../ui/button'

export default function CallToActionSection1() {
  return (
    <>
    <section className="bg-slate-300">
        <div className="container my-30">
             <div className="max-w-4xl mx-auto rounded-md hover:scale-105 hover:shadow-md transition-all transition-discrete ease-linear duration-500 bg-lime-600/20">
            <div className="grid place-content-center text-center px-4 py-12">
              <h3 className="text-2xl font-extrabold mb-4">
                Let&apos;s Build Something Unforgettable Together
              </h3>
              <p className="leading-7 my-4">
                Have an upcoming event in Nairobi or across East Africa?<br />
                 Tell us
                about your technical requirements, date, and venue, <br/>and our team
                will prepare a tailored production plan and quote.
              </p>
              <div className="flex justify-center items-center gap-4">
                <Button variant="outline" className="rounded-sm">
                  Request Your Quote Now
                </Button>
                
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}
