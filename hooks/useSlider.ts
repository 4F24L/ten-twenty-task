// hooks/useSlider.ts
import { clientData } from "@/lib/slidesdata";
import { useState } from "react";

export const useSlider = (slides: clientData[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const totalSlides = slides.length;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleStart = (x: number) => {
    setStartX(x);
  };

  const handleEnd = (x: number) => {
    if (startX === null) return;
    const distance = x - startX;

    if (Math.abs(distance) > 50) {
      distance > 0 ? goToPrev() : goToNext();
    }

    setStartX(null);
  };

  return {
    currentIndex,
    goToNext,
    goToPrev,
    dragHandlers: {
      onMouseDown: (e: React.MouseEvent) => handleStart(e.clientX),
      onMouseUp: (e: React.MouseEvent) => handleEnd(e.clientX),
      onTouchStart: (e: React.TouchEvent) => handleStart(e.touches[0].clientX),
      onTouchEnd: (e: React.TouchEvent) =>
        handleEnd(e.changedTouches[0].clientX),
    },
  };
};
