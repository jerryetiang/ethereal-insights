"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HorizontalScrollSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const cards = cardsRef.current.filter(
      (card) => card !== null
    ) as HTMLDivElement[];

    gsap.to(container, {
      xPercent: -100 * (cards.length - 2),
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        markers: true,
      },
    });
  }, []);

  return (
    <div className="horizontal-scroll-container" ref={containerRef}>
      {[1, 2, 3, 4, 5, 6].map((cardNum) => (
        <div
          key={cardNum}
          className="feature-card"
          ref={(el) => (cardsRef.current[cardNum - 1] = el)}
        >
          Card {cardNum}
        </div>
      ))}
    </div>
  );
};

export default HorizontalScrollSection;
