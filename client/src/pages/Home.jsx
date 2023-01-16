import React from 'react';
import logo from '../assets/logo.png';
import Tile from '../components/Tile';

export default function Home() {

  return (
    <div className='h-fit'>
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ea6a6c" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,85.3C384,117,480,171,576,202.7C672,235,768,245,864,218.7C960,192,1056,128,1152,117.3C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div>
                <a href="#" className="flex justify-center">
                  <span className="sr-only">Your Company</span>
                  {/* <p id="circle-text" className="absolute font-bold mt-6 text-lg leading-8 text-black sm:text-center">
                    GOOD FOR HEALTH BAD FOR EDUCATION
                  </p> */}
                  <img className="h-40 mb-7 mt-12 transform-gpu hover:rotate-360 duration-1000" src={logo} alt="" />
                </a>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  Your one stop shop for endless music.
                </h1>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <a
                    href="#"
                    className="inline-block rounded-lg bg-pillred/20 px-4 py-2 text-lg font-semibold leading-7 text-pillred shadow-sm ring-1 ring-pillred/20 hover:ring-pillred duration-300"
                  >
                    Get started
                    {' '}
                    <span className="text-pillred" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                  <a
                    href="#"
                    className="inline-block rounded-lg px-4 py-2 text-lg font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-black duration-300"
                  >
                    Learn more
                    {' '}
                    <span className="text-black" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                {/* <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#EA6A6C"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
