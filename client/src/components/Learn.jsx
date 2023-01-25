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
        <div className="relative px-6 lg:px-8 hidden">
          <div className="mx-auto max-w-screen-xl pt-4 grid gap-4 grid-cols-1">
            <div className="h-64 bg-blue-500"> text </div>
            <div className="h-64 bg-blue-500"> img </div>
            <div className="h-64 bg-blue-500"> text </div>
            <div className="h-64 bg-blue-500"> img </div>
          </div>
        </div>
    )
}