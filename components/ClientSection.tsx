"use client";
import { useSlider } from "@/hooks/useSlider";
import { slidesData } from "@/lib/clientData";
import Image from "next/image";
import CustomCursor from "./CustomCursor";

export default function ClientSection() {
  const { currentIndex, dragHandlers } = useSlider(slidesData);

  const currentSlide = slidesData[currentIndex];

  return (
    <div className="h-screen w-full py-12 space-y-8">
      <p className=" text-4xl text-center">Quality Products</p>
      <p className=" max-w-xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div className="flex flex-col items-center justify-center w-full">
        <div
          className="relative w-full h-96 my-16 flex items-center justify-center"
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
                "z-10 -translate-x-[160%] translate-y-[10%] rotate-[-10deg] brightness-75";
            } else if (index === nextIndex) {
              positionClass =
                "z-10 translate-x-[160%] translate-y-[10%] rotate-[10deg] brightness-75";
            }

            return (
              <div
                key={slide.id}
                className={`absolute w-72 h-[400px] shadow-xl overflow-hidden transition-all duration-500 ease-in-out ${positionClass} cursor-none slider-cursor`}
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

        <div className="text-center my-10">
          <h2 className="text-2xl font-medium text-gray-800">
            {currentSlide.name}
          </h2>
          <p className="text-md text-gray-500">{currentSlide.location}</p>
        </div>
      </div>

      
      <CustomCursor />
    </div>
  );
}
