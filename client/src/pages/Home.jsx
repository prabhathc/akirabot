import React from 'react';
import logo from '../assets/logo11.png';
import icon from '../assets/icon2.png';
import text from '../assets/text.png'
import Learn from '../components/Learn';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

  const learnMoreData = useRef(null)

  return (
    <div>
      <main>
        <div className="mx-auto max-w-3xl px-6 relative h-screen flex-col">
                <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl invisible sm:visible">
                  {/* <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="75" cy="75" r="75" fill="#EA6A6C" fill-opacity="0.75" />
                  </svg> */}
                </div>
                <div className="flex justify-center">
                  <a href="#" className="pt-0 sm:pt-36 flex justify-center">
                    <span className="sr-only">Your Company</span>
                    {/* <p id="circle-text" className="absolute font-bold mt-6 text-lg leading-8 text-black sm:text-center">
                      GOOD FOR HEALTH BAD FOR EDUCATION
                    </p> */}
                    {/* <img className="h-60 mb-7 mt-12 transform-gpu hover:rotate-360 duration-1000 blur-none hover:blur-md " src={logo} alt="" /> */}
                    <img className="h-60 mb-7 mt-12 transform-gpu hover:rotate-360 duration-1000 blur-none hover:blur-md" src={logo} alt="" />
                    {/* <img className="absolute animate-spin-slow -z-20 " src={text} alt="" /> */}
                    {/* <img src={text} alt="" /> */}
                    {/* <img className="absolute h-60 mb-7 mt-12 transform-gpu hover:rotate-360 duration-1000 blur-none hover:blur-md hover:visible" src={icon} alt="" /> */}
                  </a>
                </div>
                <h1 className="text-5xl font-bold tracking-tight sm:text-center sm:text-6xl text-pillwhite">
                  Your one stop shop for endless music.
                </h1>
                <div className="mt-6 flex gap-x-4 sm:justify-center">
                  <a
                    href="#"
                    className="inline-block rounded-lg bg-pillwhite/20 px-4 py-2 text-lg font-semibold leading-7 text-pillwhite shadow-sm ring-1 ring-pillwhite/20 hover:ring-pillwhite duration-300"
                  >
                    Get started
                    {' '}
                    <span className="text-pillwhite" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                  <button onClick={() => learnMoreData.current.scrollIntoView({behavior: 'smooth'})} className="inline-block rounded-lg px-4 py-2 text-lg font-semibold leading-7 text-pillwhite ring-1 ring-pillwhite/20 hover:ring-pillwhite duration-300 cursor-pointer">
                    Learn more
                      {' '}
                    <span className="text-pillwhite" aria-hidden="true">
                      &rarr;
                    </span>
                  </button>
                </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              </div>
        </div>
      </main>
      <div ref={learnMoreData} className="mx-auto">
        <Learn />
      </div>
    </div>
  );
}
