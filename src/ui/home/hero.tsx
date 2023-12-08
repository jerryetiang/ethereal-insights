"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "flowbite-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "next-themes";

export default function Hero() {
  const meditatingWomanRef = useRef(null);
  const textColumnRef = useRef(null);
  const loaderRef = useRef(null);
  const leadingRef = useRef(null);
  const h2Ref = useRef(null);
  const h2emphasisRef = useRef(null);
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const callButtonRef = useRef(null);
  const callToaActionRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  const { systemTheme, theme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // Animate the woman meditating with GSAP
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    // // Fade in loader
    tl.to(loaderRef.current, { opacity: 1, duration: 0.5 });
    tl.to(loaderRef.current, { opacity: 0, duration: 1 }, "+=0.5"); // Fade out loader 0.5s after it fades in

    tl.fromTo(
      Object.values(textColumnRef),
      { scale: 0, opacity: 0, y: "+=20" },
      { scale: 1, opacity: 1, y: 0, stagger: 0.2, duration: 1 },
      "+=0.1" // Start the text animation 0.25s before the loader fades out
    );

    tl.fromTo(
      meditatingWomanRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2 },
      "-=1" // Start the woman meditating animation 1 second before the text animation ends
    );

    // Optional: Add more animations to tl as needed

    // You can adjust the options and add more animations as needed
    // tl.to(meditatingWomanRef.current, {
    //   x: "+=50",
    //   duration: 2,
    //   yoyo: true,
    //   repeat: -1,
    // });

    tl.eventCallback("onComplete", () => {
      setIsLoading(false);
    });

    return () => {
      tl.kill(); // Kill the animation on unmount
    };
  }, []);

  useEffect(() => {
    // Set the initial theme when the component mounts
    setIsDarkTheme(
      theme === "dark" || (theme === "system" && systemTheme === "dark")
    );
  }, [theme, systemTheme]);

  const logoSrc = isDarkTheme ? "/logo/dark.svg" : "/logo/light.svg";

  return (
    <div className="-mt-24 relative flex items-center justify-center theme-transition h-screen mx-auto">
      {/* Loader content */}
      {isLoading && (
        <div
          ref={loaderRef}
          className={`opacity-10 inset-0 transition-opacity absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-opacity-100`}
        >
          <Image
            src={logoSrc}
            alt="Ethereal Insights logo"
            width={600}
            height={400}
          />{" "}
        </div>
      )}

      <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-10 p-24 lg:w-xl lg:pr-5 relative">
        {/* Text Column */}
        <div className="relative" ref={textColumnRef}>
          <p ref={leadingRef} className="flex text-lg uppercase text-lime-400">
            The Wisdom of
          </p>
          <h2
            ref={h2Ref}
            className="uppercase mb-6 text-9xl font-black tracking-tight text-zinc-700 dark:text-zinc-300"
          >
            Deep Mind
            <span
              ref={h2emphasisRef}
              className="my-1 text-8xl inline-block text-lime-400 border-b-8 font-bold theme-transition"
            >
              Interactions
            </span>
          </h2>
          <p
            ref={p1Ref}
            className="text-base text-justify font-medium text-zinc-600 dark:text-zinc-400 theme-transition"
          >
            Step into the enigmatic expanse of Ethereal Insights, where the
            tapestry of knowledge is woven with threads of profound curiosity
            and contemplation meets the boundless expanse of curiosity. Each
            page is an invitation to explore, to embark on a journey of
            intellectual discovery.
          </p>
          <p
            ref={p2Ref}
            className="mt-4 text-base text-justify font-medium text-zinc-600 dark:text-zinc-400 theme-transition"
          >
            Ultimately, we aspire to spark reflections that linger, leaving an
            indelible mark on the canvas of your deeper mind.
          </p>
          <div className="mt-10 flex flex-col items-center md:flex-row">
            <Button
              ref={callButtonRef}
              color="dark"
              className="md:mr-4 text-lime-400 bg-zinc-800 enabled:hover:bg-zinc-900 focus:ring-zinc-300 dark:bg-zinc-800 dark:enabled:hover:bg-zinc-700 dark:focus:ring-zinc-800 dark:border-zinc-700 theme-transition"
            >
              Learn More
            </Button>
            <Link
              ref={callToaActionRef}
              href="/"
              aria-label="join"
              className="group inline-flex items-center font-semibold text-g1 text-lime-400"
            >
              Join the conversation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Meditating Woman Column */}
        <div
          ref={meditatingWomanRef}
          className="md:col-span-1 scale-0 opacity-0 mx-auto overflow-hidden theme-transition"
        >
          <Image
            src="/woman-meditating.svg"
            alt="woman meditating"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
