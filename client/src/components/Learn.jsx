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
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-screen-xl pt-4 grid gap-4 grid-cols-1 md:grid-cols-2 flex">
            <div className="bg-pilllblue h-64 rounded-lg hover:bg-pillblue duration-100">
              <div className="flex text-3xl font-bold tracking-tight text-pilldblue p-4">
                hiii
              </div>
            </div>
            <div className="bg-pillblue h-64 rounded-md"> img </div>
            <div className="bg-pillblue h-64 rounded-md"> text </div>
            <div className="bg-pillblue h-64 rounded-md"> img </div>
          </div>
        </div>
    )
}