// import logo from "../assets/logo11.png";
import Learn from "../components/Learn";
import { useRef, useEffect } from "react";
import React from "react";
import { useAuth } from "../components/AuthProvider";
import Link from "next/link";

export default function Home() {
  const { handleLogin } = useAuth();
  const learnMoreData = useRef(null);

  useEffect(() => {
    handleLogin();
  }, []);

  return (
    <div>
      <main>
        <div className="mx-auto max-w-3xl px-6 h-[calc(100vh-84px)]">
          <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl invisible sm:visible"></div>
          <div className="flex justify-center">
            <a href="#" className="pt-0 sm:pt-36 flex justify-center">
              <span className="sr-only">Your Company</span>
              <img
                className="h-60 mb-7 mt-12 transform-gpu hover:rotate-360 duration-1000 blur-none hover:blur-md"
                src={'/assets/logo11.png'}
                alt=""
              />
            </a>
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-center sm:text-6xl text-pillwhite">
            Your one stop shop for endless music.
          </h1>
          <div className="mt-6 flex gap-x-4 sm:justify-center">
            <Link
              href="/admin"
              className="inline-block rounded-lg bg-pillwhite/20 px-4 py-2 text-lg font-semibold leading-7 text-pillwhite shadow-sm ring-1 ring-pillwhite/20 hover:ring-pillwhite duration-300"
            >
              Get started{" "}
              <span className="text-pillwhite" aria-hidden="true">
                &rarr;
              </span>
            </Link>
            <button
              onClick={() =>
                learnMoreData.current.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-block rounded-lg px-4 py-2 text-lg font-semibold leading-7 text-pillwhite ring-1 ring-pillwhite/20 hover:ring-pillwhite duration-300 cursor-pointer"
            >
              Learn more{" "}
              <span className="text-pillwhite" aria-hidden="true">
                &rarr;
              </span>
            </button>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"></div>
        </div>
      </main>
      <div ref={learnMoreData} className="mx-auto">
        <Learn />
      </div>
    </div>
  );
}
