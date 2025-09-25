"use client";
import { useSlider } from "@/hooks/useSlider";
import { slidesData } from "@/lib/slidesdata";
import Image from "next/image";
import CustomCursor from "./CustomCursor";
import { useEffect } from "react";
import gsap from "gsap";

export default function ClientSection() {
  const { currentIndex, dragHandlers } = useSlider(slidesData);

  useEffect(() => {
    gsap.from("#slide-text", {
        opacity:0,
        y:-10,
        scale:0.95,
        duration: 0.77,

    })
  
    
  }, [currentIndex])
  

  const currentSlide = slidesData[currentIndex];

  return (
    <div className="h-screen w-full py-12 space-y-8">
      <p className="text-3xl sm:text-4xl text-center ">Quality Products</p>
      <p className="text-center text-[#7A7777] sm:max-w-xl mx-auto px-6 sm:px-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div className="flex flex-col items-center justify-center w-full">
        <div
          className="relative w-full h-[460px] sm:h-[550px] flex items-center justify-center overflow-x-hidden"
          {...dragHandlers}
        >
          {slidesData.map((slide, index) => {
            const totalSlides = slidesData.length;
            const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            const nextIndex = (currentIndex + 1) % totalSlides;

            let positionClass = "opacity-0 ";
            if (index === currentIndex) {
              positionClass =
                "z-20 opacity-100 scale-110 rotate-0 brightness-100";
            } else if (index === prevIndex) {
              positionClass =
                "z-10 -translate-x-[125%] sm:-translate-x-[160%] translate-y-[12%] sm:translate-y-[10%] rotate-[-10deg] brightness-75";
            } else if (index === nextIndex) {
              positionClass =
                "z-10 translate-x-[125%] sm:translate-x-[160%] translate-y-[12%] sm:translate-y-[10%] rotate-[10deg] brightness-75";
            }

            return (
              <div
                key={slide.id}
                className={`absolute w-52 sm:w-72 h-[320px] sm:h-[400px] shadow-xl overflow-hidden transition-all duration-500 ease-in-out ${positionClass} cursor-none slider-cursor`}
              >
                <Image
                  src={slide.img}
                  alt={slide.name}
                  className="object-cover w-full h-full"
                  draggable="false"
                />
              </div>
            );
          })}
        </div>

        <div id="slide-text" className="text-center mb-7">
          <h2 className="text-2xl font-medium text-gray-800">
            {currentSlide.name}
          </h2>
          <p className="text-md text-2xl text-gray-500">{currentSlide.location}</p>
        </div>
      </div>

      
      <CustomCursor />
    </div>
  );
}
