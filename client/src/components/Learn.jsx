import React from "react";
import Tilt from "react-parallax-tilt";
import { useState, useEffect } from "react";

export default function Learn() {

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  return (
    <div className="relative h-[calc(100vh-120px)] px-6 lg:px-8 py-4 pt-4 grid gap-4 sm:gap-6 2xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-stretch">
      <div className="flex">
        <Tilt className="bg-pillwhite/20 rounded-3xl shadow-lg grow" tiltEnable={width > 768} tiltReverse={true} perspective={2000} glareEnable={false} glareMaxOpacity={0.2} glareBorderRadius="24px" transitionSpeed={1000} gyroscope={true} tiltMaxAngleX={0}>
          <div className="font-bold text-3xl md:text-4xl tracking-tight text-pillwhite p-6">
            Play unlimited music from Soundcloud
          </div>
          {/* <img className="px-6 pb-6 h-24 flex flex-row justify-center" src={soundcloud} alt="" /> */}
        </Tilt>
      </div>
      <div className="flex">
        <Tilt className="bg-pillwhite/20 rounded-3xl shadow-lg grow" tiltEnable={width > 768} tiltReverse={true} perspective={2000} glareEnable={false} glareMaxOpacity={0.2} glareBorderRadius="24px" transitionSpeed={1000} gyroscope={true} tiltMaxAngleX={0}>
          <div className="font-bold text-3xl md:text-4xl tracking-tight text-pillwhite p-6">
            Play unlimited music from Youtube
          </div>
          {/* <img className="px-6 pb-6 h-24 flex flex-row justify-center" src={youtube} alt="" /> */}
        </Tilt>
      </div>
      <div className="flex">
        <Tilt className="bg-pillwhite/20 rounded-3xl shadow-lg grow" tiltEnable={width > 768} tiltReverse={true} perspective={2000} glareEnable={false} glareMaxOpacity={0.2} glareBorderRadius="24px" transitionSpeed={1000} gyroscope={true} tiltMaxAngleX={0}>
        <div className="font-bold text-3xl md:text-4xl tracking-tight text-pillwhite p-6">
            Play unlimited music from Spotify
          </div>
        </Tilt>
      </div>
      <div className="flex">
        <Tilt className="bg-pillwhite/20 rounded-3xl shadow-lg grow" tiltEnable={width > 768} tiltReverse={true} perspective={2000} glareEnable={false} glareMaxOpacity={0.2} glareBorderRadius="24px" transitionSpeed={1000} gyroscope={true} tiltMaxAngleX={0}>
          <div className="font-bold text-3xl md:text-4xl tracking-tight text-pillwhite p-6">
            Man wtf do i put here i'm out of stuff u get the point
          </div>
        </Tilt>
      </div>
    </div>
  )
}