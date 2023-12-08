"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface BGShapeProps {
  color: string;
  rotation: string;
  shape: "circle" | "triangle" | "square" | "cross";
  size: number;
  position?: { top: string; left: string };
}

const BGShape: React.FC<BGShapeProps> = ({
  color,
  rotation,
  shape,
  size,
  position,
}) => {
  const shapeRef = useRef(null);
  useEffect(() => {
    // Generate random direction and speed
    const direction = Math.random() > 0.5 ? 1 : -1; // 1 for right, -1 for left
    const speed = Math.random() * 10 + 5; // Random speed between 5 and 15

    // Animate the shape using GSAP
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(shapeRef.current, { x: `+=${direction * speed}`, duration: 2 });

    return () => {
      tl.kill(); // Kill the animation on unmount
    };
  }, [shapeRef]); // Run only on mount and unmount

  const getRandomPosition = () => {
    return {
      top: Math.floor(Math.random() * 100) + "vh",
      left: Math.floor(Math.random() * 100) + "vw",
    };
  };

  const renderShape = () => {
    switch (shape) {
      case "circle":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            className={`w-${size} h-${size} object-fill fill-${color} text-${color}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" />
          </svg>
        );
      case "triangle":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            className={`w-${size} h-${size} object-fill fill-${color} text-${color}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L22 21H2L12 2z" />
          </svg>
        );
      case "square":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            className={`w-${size} h-${size} object-fill fill-${color} text-${color}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" />
          </svg>
        );
      case "cross":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            className={`w-${size} h-${size} object-fill fill-${color} text-${color}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={shapeRef}
      style={position || getRandomPosition()}
      className={`-z-10 fixed dark:opacity-10 opacity-30 transform rotate-${rotation}`}
    >
      {renderShape()}
    </div>
  );
};

export default BGShape;
