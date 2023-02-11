import React from 'react';
import logo from '../assets/logo9.png';
import text from '../assets/text.png';
import Learn from '../components/Learn';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

  const learnMoreData = useRef(null)

  return (
    <div>
      <main>
        <div className="mx-auto max-w-3xl px-6 py-24 relative h-screen">
                <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl top-0">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="#EA6A6C" />
                  </svg>
                </div>
                <div className="flex justify-center">
                  <span className="sr-only">Your Company</span>
                  {/* <img className="absolute" src={text} alt="" /> */}
                  <svg  class="h-40 m-7 transform-gpu" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="900px" height="900px">
                    <path d="M 24.521484 2.0488281 C 14.656422 2.0488281 6.5260862 9.5514989 6.5214844 18.904297 C 6.4876313 20.914937 6.7175739 22.69542 7.1113281 24.320312 C 6.5162835 24.663819 6.1113281 25.298656 6.1113281 26.035156 C 6.1113281 27.625156 6.8562656 30.739187 7.3222656 31.867188 C 7.8612656 33.173187 8.1703906 33.986578 8.7753906 34.517578 C 9.0829306 34.787502 9.6713646 34.919378 10.185547 34.984375 C 10.531992 35.634269 10.934478 36.261859 11.380859 36.873047 C 13.537229 39.827035 17.567564 44.51673 24.523438 46.962891 A 1.50015 1.50015 0 0 0 25.519531 46.962891 C 32.475404 44.51673 36.506529 39.827374 38.662109 36.873047 C 39.342815 35.941021 39.899115 34.961537 40.292969 33.916016 C 40.705806 33.839351 41.119272 33.726599 41.357422 33.517578 C 41.962422 32.986578 42.271547 32.173187 42.810547 30.867188 C 43.276547 29.739187 44.021484 26.625156 44.021484 25.035156 C 44.021484 24.033759 43.279609 23.214185 42.316406 23.076172 C 42.371237 22.34336 42.410745 21.592744 42.419922 20.806641 C 42.428722 20.778391 42.452478 20.762905 42.460938 20.734375 A 1.50015 1.50015 0 0 0 42.466797 19.865234 C 42.458797 19.50486 42.539438 19.247792 42.517578 18.871094 C 42.493168 9.5342056 34.374525 2.0488281 24.521484 2.0488281 z M 31.271484 20.976562 C 31.622547 21.111149 31.661073 21.041373 32.072266 21.289062 C 33.247889 21.997231 34.340289 23.044356 34.527344 25.101562 A 1.50015 1.50015 0 0 0 36.630859 26.335938 C 36.630859 26.335938 37.803086 25.816863 39.080078 24.910156 C 39.130788 24.874156 39.182972 24.812646 39.234375 24.775391 C 38.950883 26.581708 38.529013 28.298112 38.083984 30.169922 A 1.50015 1.50015 0 0 0 38.033203 30.412109 A 1.50015 1.50015 0 0 0 38.03125 30.427734 A 1.50015 1.50015 0 0 0 38.023438 30.525391 A 1.50015 1.50015 0 0 0 38.019531 30.623047 C 38.016931 32.234006 37.424079 33.479913 36.238281 35.103516 A 1.50015 1.50015 0 0 0 36.238281 35.105469 C 34.297836 37.764943 30.854783 41.685271 25.021484 43.900391 C 19.188185 41.685275 15.746306 37.765272 13.804688 35.105469 A 1.50015 1.50015 0 0 0 13.804688 35.103516 C 12.746925 33.655221 12.235246 32.480419 12.119141 31.105469 A 1.50015 1.50015 0 0 0 12.492188 30.380859 C 13.228025 26.68705 14.376271 23.541986 15.96875 20.996094 C 16.788815 23.290597 18.684236 26.209562 23.142578 29.439453 A 1.50015 1.50015 0 0 0 24.8125 29.5 C 24.8125 29.5 30.111034 26.368374 31.271484 20.976562 z M 18.021484 26.048828 A 2 2 0 0 0 18.021484 30.048828 A 2 2 0 0 0 18.021484 26.048828 z M 32.021484 26.048828 A 2 2 0 0 0 32.021484 30.048828 A 2 2 0 0 0 32.021484 26.048828 z M 23.457031 35.048828 C 23.315031 35.048828 23.187719 35.136531 23.136719 35.269531 C 23.085719 35.401531 23.121563 35.550484 23.226562 35.646484 C 23.638562 36.021484 24.162875 36.498656 24.546875 36.847656 C 24.841875 37.115656 25.292891 37.115656 25.587891 36.847656 C 25.971891 36.498656 26.496203 36.021484 26.908203 35.646484 C 27.013203 35.550484 27.049047 35.401531 26.998047 35.269531 C 26.947047 35.136531 26.819734 35.048828 26.677734 35.048828 L 23.457031 35.048828 z M 22.021484 38.982422 A 1.0001 1.0001 0 1 0 22.021484 40.982422 L 28.021484 40.982422 A 1.0001 1.0001 0 1 0 28.021484 38.982422 L 22.021484 38.982422 z"/>
                  </svg>
                </div>
                <h1 className="text-5xl font-bold tracking-tight sm:text-center sm:text-6xl text-pillwhite">
                  Your one stop shop for endless music.
                </h1>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
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
                  {/* <a
                    href="/about"
                    className="inline-block rounded-lg px-4 py-2 text-lg font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-black duration-300"
                  >
                    Learn more
                    {' '}
                    <span className="text-black" aria-hidden="true">
                      &rarr;
                    </span>
                  </a> */}
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
