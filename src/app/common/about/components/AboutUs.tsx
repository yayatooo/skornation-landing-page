import { CircleArrowLeft } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const AboutUs = () => {
  return (
    <div className="container mx-auto">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="font-extrabold text-7xl text-white">
              FIND YOUR <br /> GREATNESS.
            </h1>
          </div>
          <div>
            <CircleArrowLeft size={75} className="text-white rotate-45" />
          </div>
        </div>
        <div className="flex py-8 absolute">
          <div>
            <Image
              src="/assets/about-img.png"
              width={880}
              height={554}
              alt="about"
            />
          </div>
          <div className="-rotate-90 ml-16 mt-20">
            <Image
              src="/assets/logo-white.png"
              width={500}
              height={190}
              alt="about"
            />
          </div>
        </div>
      </div>
  )
}
