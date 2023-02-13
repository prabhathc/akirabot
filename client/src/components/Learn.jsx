import React from "react";
import Tilt from "react-parallax-tilt";
import { useState, useEffect } from "react";
import soundcloud from "../assets/soundcloud.png";
import youtube from "../assets/youtube.png";
import Footer from "./Footer";

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
    <div className="relative h-screen px-6 lg:px-8 py-4 pt-4 grid gap-4 sm:gap-6 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 justify-items-stretch">
      <div className="flex">
        <Tilt className="bg-pillwhite/20 rounded-3xl shadow-lg" tiltEnable={width > 768} tiltReverse={true} perspective={2000} glareEnable={false} glareMaxOpacity={0.2} glareBorderRadius="24px" transitionSpeed={1000} gyroscope={true} tiltMaxAngleX={0}>
          <div className="font-bold text-3xl md:text-4xl tracking-tight text-pillwhite p-6">
            Play unlimited music from Soundcloud
          </div>
          {/* <img className="px-6 pb-6 h-24 flex flex-row justify-center" src={soundcloud} alt="" /> */}
        </Tilt>
      </div>
      <div className="flex">
        <Tilt className="bg-pillwhite/20 rounded-3xl shadow-lg" tiltEnable={width > 768} tiltReverse={true} perspective={2000} glareEnable={false} glareMaxOpacity={0.2} glareBorderRadius="24px" transitionSpeed={1000} gyroscope={true} tiltMaxAngleX={0}>
          <div className="font-bold text-3xl md:text-4xl tracking-tight text-pillwhite p-6">
            Play unlimited music from Youtube
          </div>
          {/* <img className="px-6 pb-6 h-24 flex flex-row justify-center" src={youtube} alt="" /> */}
        </Tilt>
      </div>
      <div className="flex">
        <Tilt className="bg-pillwhite/20 rounded-3xl shadow-lg" tiltEnable={width > 768} tiltReverse={true} perspective={2000} glareEnable={false} glareMaxOpacity={0.2} glareBorderRadius="24px" transitionSpeed={1000} gyroscope={true} tiltMaxAngleX={0}>
          <div className="font-bold text-2xl tracking-tight text-pillwhite p-6">
            Play unlimited music from Soundcloud
          </div>
        </Tilt>
      </div>
      <div className="flex">
        <Tilt className="bg-pillwhite/20 rounded-3xl shadow-lg" tiltEnable={width > 768} tiltReverse={true} perspective={2000} glareEnable={false} glareMaxOpacity={0.2} glareBorderRadius="24px" transitionSpeed={1000} gyroscope={true} tiltMaxAngleX={0}>
          <div className="font-bold text-2xl tracking-tight text-pillwhite p-6">
            Play unlimited music from Youtube
          </div>
        </Tilt>
      </div>
    </div>
  )
}