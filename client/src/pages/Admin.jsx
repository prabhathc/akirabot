import React from "react";
import { useState, useEffect } from "react";
import Tilt from 'react-parallax-tilt';

export default function Admin() {

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
        <div className="h-[calc(100vh-204px)] mx-auto px-6">
            <h1 className="pt-8 text-3xl text-pillwhite font-bold tracking-tight sm:text-center sm:text-4xl">
                Select your server:
            </h1>
            <div className="px-6 lg:px-8 py-4 pt-4 grid gap-4 sm:gap-6 2xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-stretch">
                <div className="flex">
                    <Tilt className="bg-pillwhite/20 rounded-xl shadow-lg h-64 grow grid grid-cols-2 grid-rows-2" tiltEnable={width > 768} tiltReverse={true} perspective={2000} glareEnable={false} glareMaxOpacity={0.2} glareBorderRadius="24px" transitionSpeed={1000} gyroscope={true} tiltMaxAngleX={0}>
                        <div className="text-2xl md:text-xl tracking-tight text-pillwhite p-4">
                            Prabhath's Server
                        </div>
                        <div className="rounded-xl bg-pillgreen/70 text-pillwhite ring-1 ring-pillgreen/10 font-bold tracking-tight text-xl p-4 m-8 hover:ring-pillgreen">
                            Setup
                        </div>
                    </Tilt>
                </div>
                <div className="flex">
                    <Tilt className="bg-pillwhite/20 rounded-xl shadow-lg grow" tiltEnable={width > 768} tiltReverse={true} perspective={2000} glareEnable={false} glareMaxOpacity={0.2} glareBorderRadius="24px" transitionSpeed={1000} gyroscope={true} tiltMaxAngleX={0}>
                        <div className="text-2xl md:text-xl tracking-tight text-pillwhite p-4">
                            Prabhath's Server
                        </div>
                    </Tilt>
                </div>
            </div>
        </div>
    );
}