'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface CircleDecorationProps {
  color: string;
  rotation: string;
  size: number;
  position?: { top: string; left: string };
}

const CircleDecoration: React.FC<CircleDecorationProps> = ({ color, rotation, size, position }) => {
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

  return (
    <div
      ref={shapeRef}
      style={position || getRandomPosition()}
      className={`fixed -z-10 opacity-10 transform rotate-${rotation}`}
    >
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
    </div>
  );
};

export default CircleDecoration;
