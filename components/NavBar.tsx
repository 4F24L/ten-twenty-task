"use client"
import gsap from "gsap";
import { Menu, MoveRight, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(!true);


   useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    gsap.from("#nav-items li", {
      opacity: 0,
      y: -20,
      duration: 1.1,
      stagger: 0.2,
    });
  }, [isOpen]);

  return (
    <div className="relative w-full bg-white text-black flex justify-between items-center h-24 px-4 sm:px-8 sm:mt-8">
      <ul id="nav-items" className="hidden sm:flex gap-5 text-base">
        <li>About</li>
        <li>News</li>
        <li>Service</li>
        <li>Our Team</li>
        <li>Make Enquiry</li>
      </ul>
      <button className="flex gap-4 border-2 border-[#111] px-3 py-1.5">
        Contact us <MoveRight />
      </button>

      <button onClick={() => setIsOpen(!isOpen)} className="flex sm:hidden gap-4 bg-[#F9F4EE] px-2 py-1.5">
        {isOpen ? <X /> : <Menu />}
      </button>  

      {isOpen && (
      <ul id="nav-items" className=" absolute bg-white text-[#191919] flex sm:hidden flex-col items-center py-16 w-full h-screen left-0 top-24 gap-11 text-4xl z-24">
        <li>About</li>
        <li>News</li>
        <li>Service</li>
        <li>Our Team</li>
        <li>Make Enquiry</li>
      </ul>)}

      </div>
  );
}
