import React from "react";

export default function Learn() {

    const features = [
        {
          name: 'Competitive exchange rates',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        },
        {
          name: 'No hidden fees',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        },
        {
          name: 'Transfers are instant',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        },
        {
          name: 'Mobile notifications',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        },
      ]
    return (
        <div className="relative px-6 lg:px-8 h-screen">
          <div className="mx-auto max-w-screen-xl pt-4 grid gap-4 md:grid-cols-2 grid-cols-1">
            <div className="h-64 bg-pillwhite border-2 border-pillblue rounded-lg">
              <div className="flex justify-center font-bold text-2xl tracking-tight text-pillblue p-4">
                Play unlimited music from Soundcloud
              </div>
            </div>
            <div className="h-64 bg-pillblue border-2 border-pillwhite rounded-lg">
              <div className="flex justify-center font-bold text-2xl tracking-tight text-pillwhite p-4">
                Play unlimited music from Youtube
              </div>
            </div>
            <div className="h-64 bg-pillblue rounded-lg">
              <div className="flex justify-center font-bold text-2xl tracking-tight text-pillwhite p-4">
                All with a few simple commands
              </div>
            </div>
            <div className="h-64 bg-pillwhite border-2 border-pillblue rounded-lg">
              <div className="flex justify-center font-bold text-2xl tracking-tight text-pillblue p-4">
                All for free!
              </div>
            </div>
          </div>
        </div>
    )
}