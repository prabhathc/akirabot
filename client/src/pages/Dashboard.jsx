import React from "react";
import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import ProtectedRoute from "../components/ProtectedRoute";
import { useAuth } from "../components/AuthProvider";

export default function Dashboard() {
  const [width, setWidth] = useState(window.innerWidth);
  const [guilds, setGuilds] = useState([]);
  const { sendRequest } = useAuth();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    const fetchGuilds = async () => {
      try {
        const data = await sendRequest("http://localhost:3000/api/user/guilds", "GET");
        setGuilds(data.filter((guild) => guild.owner));
      } catch (err) {
        console.error('Error fetching guilds:', err);
      }
    };
    fetchGuilds();

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    const fetchGuildMembers = async () => {
      guilds.forEach(async (guild) => {
        const members = await sendRequest(`http://localhost:3000/api/user/guild_members/${guild.id}`, "GET");
        console.log(members);
      });
    }
    fetchGuildMembers();
  }, [guilds]);

  return (
    <ProtectedRoute>
      <div className="min-h-[calc(100vh-204px)] mx-auto px-6">
        <h1 className="pt-8 text-3xl text-pillwhite font-bold tracking-tight sm:text-center sm:text-4xl">
          Select your server:
        </h1>
        <div className="px-6 lg:px-8 py-4 pt-4 grid gap-4 sm:gap-6 2xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-stretch">
          {guilds.map((guild) => (
            <div key={guild.id} className="flex">
              <Tilt
                className="bg-pillwhite/20 rounded-xl shadow-lg h-64 grow grid grid-cols-2 grid-rows-2"
                tiltEnable={width > 768}
                tiltReverse={true}
                perspective={2000}
                glareEnable={false}
                glareMaxOpacity={0.2}
                glareBorderRadius="24px"
                transitionSpeed={1000}
                gyroscope={true}
                tiltMaxAngleX={0}
              >
                <div className="text-2xl md:text-xl tracking-tight text-pillwhite p-4">
                  {guild.name}
                </div>
                <a
                  href="https://discord.com/oauth2/authorize?client_id=1061118038402945094&scope=bot"
                  className="inline-block bg-pillred/70 rounded-xl text-pillwhite ring-1 ring-pillgreen/10 font-bold tracking-tight text-xl p-4 m-8 hover:ring-pillred transition-all duration-300 ease-in-out transform"
                >
                  Setup
                </a>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
