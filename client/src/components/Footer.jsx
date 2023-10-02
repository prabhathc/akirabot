import React from "react";

export default function Footer() {
  return (
    <section className="">
      <div className="max-w-screen-xl px-2 py-8 mx-auto space-y-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-2 py-1">
            <a
              href="#"
              className="text-base leading-6 text-pillwhite hover:text-gray-900"
            >
              About
            </a>
          </div>
          <div className="px-2 py-1">
            <a
              href="#"
              className="text-base leading-6 text-pillwhite hover:text-gray-900"
            >
              Team
            </a>
          </div>
          <div className="px-2 py-1">
            <a
              href="#"
              className="text-base leading-6 text-pillwhite hover:text-gray-900"
            >
              Pricing
            </a>
          </div>
          <div className="px-2 py-1">
            <a
              href="#"
              className="text-base leading-6 text-pillwhite hover:text-gray-900"
            >
              Contact
            </a>
          </div>
          <div className="px-2 py-1">
            <a
              href="#"
              className="text-base leading-6 text-pillwhite hover:text-gray-900"
            >
              Terms
            </a>
          </div>
        </nav>
        <p className="text-xs leading-6 text-center tracking-tight text-pillwhite">
          © 2023 Boobs Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
}