"use client";

import { heroData } from "@/lib/heroData";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const newIndex = (currentIndex + 1) % heroData.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((currentIndex)=> (currentIndex + 1) % heroData.length);
    }, 6000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen text-white ">
      <div className=" absolute w-full h-full bg-black/25 sm:px-8">
        <NavBar />
      </div>

      <div className="absolute top-[40%] left-8 sm:top-[40%] sm:left-[10%] flex flex-col gap-7 z-20">
        <p className="text-lg">Welcome To TenTwenty Farms</p>
        <p className="text-5xl sm:text-6xl">From our Farms {<br />} to your hands</p>

        <div className="mt-32 sm:mt-16 flex items-center gap-8">
          <button
            key={currentIndex}
            onClick={() => setCurrentIndex(newIndex)}
            className="p-5 bg-black/20 w-24 h-24 animatedButton flex justify-center items-center"
            aria-label="Next Image"
          >
            <p className=" absolute">Next</p>
            <Image
              src={heroData[newIndex].img}
              alt={heroData[newIndex].alt}
              className="object-cover object-center w-full h-full"
            />
          </button>

          <div className="flex items-center gap-3"> {'0' + (currentIndex+1) } <hr className="w-20"/> {'0' + heroData.length} </div>
        </div>
      </div>

      <div key={currentIndex} className=" w-full h-full">
        <Image
          src={heroData[currentIndex].img}
          alt={heroData[currentIndex].alt}
          priority
          className="object-cover object-center w-full h-full"
        />
      </div>
    </div>
  );
}
