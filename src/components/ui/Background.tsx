"use client";
import { useEffect, useState, useCallback } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

const useCursorPosition = () => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = useCallback((event: MouseEvent) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return cursorPosition;
};

const Background = () => {
  const { x, y } = useCursorPosition();

  return (
    <>
      <div
        className="block lg:hidden pointer-events-none fixed top-0 left-0 right-0 bottom-0 z-30 inset-0 transition-all transition duration-300 ease-in-out"
        style={{
          background: `radial-gradient(600px at 0 0, var(--color-misty), transparent 80%)`,
        }}
      />
      <div
        className="hidden lg:block pointer-events-none fixed top-0 left-0 right-0 bottom-0 z-30 inset-0 transition-all transition duration-300 ease-in-out"
        style={{
          background: `radial-gradient(600px at ${x}px ${y}px, var(--color-misty), transparent 80%)`,
        }}
      />
    </>
  );
};

export default Background;
