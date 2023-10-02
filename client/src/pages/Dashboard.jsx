import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import ProtectedRoute from "../components/ProtectedRoute";
import { useAuth } from "../components/AuthProvider";

export default function Dashboard() {
  const [width, setWidth] = useState(window.innerWidth);
  const { token } = useAuth(); // Access the token from the AuthProvider
  const [serverData, setServerData] = useState([]);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    if (token) {
      fetch("http://localhost:3000/api/user/guilds", {
        headers: {
          "x-authtoken": token, // Include the token in the request headers
        },
        credentials: "include", // Include all cookies in the request
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Unauthorized");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setServerData(data);
        }) // Store the server data in state
        .catch((error) => console.error("Error:", error));
    }
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [token]); // Include the token as a dependency

  function selectServer(server) {
    console.log(server);
    let url = `https://discord.com/oauth2/authorize?client_id=1061118038402945094&permissions=3072&scope=bot&guild_id=${server.id}`;
    console.log(url);
    window.open(url, '_blank').focus();
  }

  return (
    <ProtectedRoute>
      <div className="h-full mx-auto px-6">
        <h1 className="pt-8 text-3xl text-pillwhite font-bold tracking-tight sm:text-center sm:text-4xl">
          Select your server:
        </h1>
        <div className="px-6 lg:px-8 py-4 pt-8 grid gap-4 sm:gap-6 2xl:grid-cols-4 sm:grid-cols-4 grid-cols-1 justify-items-stretch">
          {serverData.map((server) => {
            if (server.permissions == '140737488355327') {
              return (
            <div className="flex" key={server.id} onClick={() => selectServer(server)}>
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
              >
                <div className="text-2xl md:text-xl tracking-tight text-pillwhite p-4">
                  {server.name}
                </div>
              </Tilt>
            </div>
          )}})}
        </div>
      </div>
    </ProtectedRoute>
  );
}
