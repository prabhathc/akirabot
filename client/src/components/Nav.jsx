import React, { useState } from 'react';
import icon from '../assets/icon.png';
import { Link } from 'react-router-dom';

export default function Nav() {
  const url = 'https://discord.com/api/oauth2/authorize?client_id=1061118038402945094&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fredirect&response_type=code&scope=identify%20email%20guilds';
  return (
    <div>
      <div className="px-6 py-6 lg:px-8">
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <Link to="" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-20" src={icon} alt="" />
              </Link>
            </div>
            <div className="lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <a
                href={url}
                className="inline-block rounded-lg px-4 py-2 text-lg font-semibold leading-7 bg-pillred/20 text-pillred  shadow-sm ring-1 ring-pillred/20 hover:ring-pillred duration-300"
              >
                Login
              </a>
            </div>
          </nav>
      </div>
    </div>
  );
}
