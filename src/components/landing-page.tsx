'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import dynamic from 'next/dynamic';
import schoolImage from '@/app/images/school.png';

const VantaBackground = dynamic(() => import('@/components/ui/VantaComponent'), {
  ssr: false,
});


export function LandingPage() {

  
  return (
    <div className="relative flex flex-col min-h-screen text-black">
      <VantaBackground />
      <div className="fixed h-[100vh] w-[100vw] bg-[#EDEDED] -z-10"/>
      <header className="absolute flex justify-between items-center w-full px-4 lg:px-6 h-20">
        <h1 className="text-2xl font-bold">Miami50</h1>
        <nav className="ml-auto flex gap-6 items-center">
          <a className="text-sm font-medium text-gray-600 hover:text-white transition-colors" href="#about">
            About
          </a>
          <a className="text-sm font-medium text-gray-600 hover:text-white transition-colors" href="#audience">
            Audience
          </a>
          <a className="text-sm font-medium text-gray-600 hover:text-white transition-colors" href="#criteria">
            Criteria
          </a>
          <a className="text-sm font-medium text-gray-600 hover:text-white transition-colors" href="#timeline">
            Timeline
          </a>
          <a className="text-sm font-medium text-gray-600 hover:text-white transition-colors" href="#overview">
            Overview
          </a>
          <a href="https://airtable.com/appncDwT82RQcDiV4/pagnCAE7cTVKmCKAR/form">
            <Button className="bg-white text-black hover:bg-gray-200 transition-colors">Apply Now</Button>
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full h-[100vh] flex flex-col items-center justify-center">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-9xl">
                Miami50
              </h1>
              <p className="mx-auto max-w-[800px] text-lg text-gray-600 md:text-md">
                The Dealmaking Event for Investors and Founders Raising Capital
              </p>
              <Button className="mt-8 bg-white text-black hover:bg-gray-200 text-lg px-8 py-3 rounded-full transition-colors">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-20">
          <div className="flex flex-col items-center text-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">What is Miami50?</h2>
            <p className="max-w-[900px] text-gray-600 text-lg leading-relaxed">
              Miami50 (M50) is a premier startup event centered around one thing - founder-investor engagement. No panels or speeches, just curated
              discussions between amazing investors and phenomenal founders. Historically, Basel's answer for the tech and innovation ecosystem has
              been to host a series of panels and conversations that speak about Miami's growing ecosystem but nothing has been actively designed to
              get investors connected with founders in a deliberate way to cultivate high quality conversations that raises the probability to lead to
              funding.
            </p>
          </div>
        </section>
        <section id="audience" className="w-full py-20">
          <div className="flex flex-col items-center text-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Audience</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Founders</h3>
                <p className="text-gray-600">
                  Pre-selected founders from across the state looking to kick-off or close their funding round
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Investor Groups</h3>
                <p className="text-gray-600">
                  Investor groups or unofficial groups of angels, of no more than 5 individuals each, established to look at deals together without
                  having a pre-established syndicates
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Resource Partners</h3>
                <p className="text-gray-600">
                  Organizations and institutions that provide direct financial, administrative, or operational support to startups
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="criteria" className="w-full py-20">
          <div className="flex flex-col items-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Criteria</h2>
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold mb-6">Seed Stage Focused Investors</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="mr-2 h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Angel investors, family offices, VC firms, or syndicates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Investors seeking investment in current cycle ($50-250k avg. check size per investor)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Founders Raising Seed Stage Capital</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="mr-2 h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Startup actively raising $1.5M+ seed round</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">$250k+ ARR</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Industry agnostic</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">US registered company</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="timeline" className="w-full py-20">
          <div className="flex flex-col items-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Timeline</h2>
            <div className="flex space-x-8">
              <div className="flex items-center space-x-4">
                <div className="outline rounded-full w-48 h-48 flex flex-col justify-center text-center">
                  <h1 className="text-xl text-gray-600">Applications Open</h1>
                  <h3 className="text-md font-semibold">Sept. 16</h3>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="outline rounded-full w-48 h-48 flex flex-col justify-center text-center">
                  <h1 className="text-xl text-gray-600">Selections Begin</h1>
                  <h3 className="text-md font-semibold">Oct. 16</h3>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="outline rounded-full w-48 h-48 flex flex-col justify-center text-center">
                  <h1 className="text-xl text-gray-600">Final Selections</h1>
                  <h3 className="text-md font-semibold">Nov. 2nd</h3>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="outline rounded-full w-48 h-48 flex flex-col justify-center text-center">
                  <h1 className="text-xl text-gray-600">Event Day</h1>
                  <h3 className="text-md font-semibold">Dec. 2nd</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="overview" className="w-full py-20">
          <div className="flex flex-col items-center px-4 md:px-6">
            <h2 className="text-3xl w-full text-center font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Event Overview</h2>
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Event Details</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="flex items-center">
                    <span className="font-semibold mr-2">Venue:</span>
                    University of Miami
                  </p>
                  <p className="flex items-center">
                    <span className="font-semibold mr-2">Date:</span>
                    December 2nd
                  </p>
                  <p className="flex items-center">
                    <span className="font-semibold mr-2">Participants:</span>
                    50 pre-seed founders, 10+ investor groups
                  </p>
                </div>
                <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                  This is a one day event where groups of investors will speak with vetted and selected founders in intimate engagements meant to
                  increase the probability of investment.
                </p>
              </div>
              <div>
                <Image
                  src={schoolImage}
                  alt="University of Miami"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="apply" className="w-full py-20">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Join Miami50?</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 text-xl">
                Apply now to be part of this exclusive dealmaking event during Art Basel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-3 rounded-full transition-colors">
                  Apply as a Founder
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-3 rounded-full transition-colors">
                  Apply as an Investor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-800 py-12">
        <div className="px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">© 2023 Miami50. All rights reserved.</p>
            <nav className="flex gap-6 mt-4 md:mt-0">
              <a className="text-sm text-gray-600 hover:text-white transition-colors" href="#">
                Terms of Service
              </a>
              <a className="text-sm text-gray-600 hover:text-white transition-colors" href="#">
                Privacy Policy
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
