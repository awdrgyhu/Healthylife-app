import React from 'react'
import Image from "next/image";
import background from "@/public/backgroung.avif";
import Goal from '../component/Goal/goal';

const AboutPage = () => {
  return (
    <div className="about-wrapper">
    <div className="head max-w-full flex justify-center items-center">
      <h4 className="text-center font-bold">THE GOALS</h4>
    </div>
    <div
      className="background"
      style={{ position: "relative", height: "400px" }}
    >
      <Image
        src={background}
        alt="background"
        className="contrast-75"
        fill
        sizes="100vw"
        style={{ objectFit: "cover", zIndex: "-5" }}
      ></Image>
      <div className="backdrop-opacity-35 max-w-full">
        <div className="bg-content text-white">
          <h1 className="text-4xl font-extralight">
            17 GOALS TO TRANSFORM OUR WORLD
          </h1>
        </div>
        <div className="goals mt-5">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
            <Goal></Goal>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutPage