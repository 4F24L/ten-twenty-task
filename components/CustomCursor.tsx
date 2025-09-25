"use client";
import gsap from "gsap";
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const slides = document.querySelectorAll(".slider-cursor");


    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const onMouseEnterSlide = () => {
      gsap.to(cursor, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const onMouseLeaveSlide = () => {
      gsap.to(cursor, {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    slides.forEach((slide) => {
      slide.addEventListener("mouseenter", onMouseEnterSlide);
      slide.addEventListener("mouseleave", onMouseLeaveSlide);
    });

  }, []);

  return (
    <div
      id="custom-cursor"
      className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] flex justify-center items-center opacity-0 scale-0 bg-white"
    >
      <span className="cursor-text text-xs tracking-[1px]">
        Drag
      </span>
    </div>
  );
}
