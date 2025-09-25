// hooks/useSlider.ts

import { useState, useRef } from 'react';
import { clientData } from '@/lib/clientData';

export const useSlider = (slides: clientData[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const totalSlides = slides.length;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    dragStartX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (dragStartX.current === null) return;
    const dragEndX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const dragDistance = dragEndX - dragStartX.current;

    if (Math.abs(dragDistance) > 50) {
      dragDistance > 0 ? goToPrev() : goToNext();
    }
    dragStartX.current = null;
  };

  return {
    currentIndex,
    goToNext,
    goToPrev,
    dragHandlers: {
      onMouseDown: handleDragStart,
      onMouseUp: handleDragEnd,
      onMouseLeave: handleDragEnd,
      onTouchStart: handleDragStart,
      onTouchEnd: handleDragEnd,
    },
  };
};