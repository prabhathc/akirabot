import React, { useEffect, useState } from 'react';
import icon from '../assets/icon4.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

export default function Nav() {
  const { token, handleLogout } = useAuth();
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState(false);

  useEffect(() => {
    setLoginState(!!token);
  }, [token]);

  const handleButtonClick = () => {
    if (loginState) {
      handleLogout();
    } else {
      // Redirect to login URL
      window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=1061118038402945094&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fredirect&scope=guilds.members.read+guilds.join+guilds';
    }
  };

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
              <button
                onClick={handleButtonClick}
                className="inline-block rounded-lg px-4 py-2 text-lg font-semibold leading-7 bg-pillwhite/20 text-pillwhite shadow-sm ring-1 ring-pillwhite/20 hover:ring-pillwhite duration-300"
              >
                {loginState ? 'Logout' : 'Login'}
              </button>
            </div>
          </nav>
      </div>
    </div>
  );
}
