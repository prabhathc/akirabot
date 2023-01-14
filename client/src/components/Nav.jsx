import React, { useState } from 'react';
import icon from '../assets/icon.png';

export default function Nav() {
  return (
    <div>
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-20" src={icon} alt="" />
              </a>
            </div>
            <div className="lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <a
                href="https://discord.com/api/oauth2/authorize?client_id=1061525982927917146&permissions=292463606326&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code&scope=bot%20identify%20guilds%20email"
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-white bg-pillred shadow-sm ring-1 ring-pillred hover:ring-gray-900/20"
              >
                Log in
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
