"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "flowbite-react";
import BGShape from "@/ui/home/BGShape";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from 'next-themes';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const meditatingWomanRef = useRef(null);
  const textRef = useRef(null);
  const loaderRef = useRef(null);
  const headerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  
  const { systemTheme, theme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);


  useEffect(() => {
    // Animate the woman meditating with GSAP
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    // Fade in loader
    tl.to(loaderRef.current, { opacity: 1, duration: 0.5 });
    tl.to(loaderRef.current, { opacity: 0, duration: 1 }, "+=0.5"); // Fade out loader 0.5s after it fades in

    tl.fromTo(
      Object.values(textRef),
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
    // tl.to(meditatingWomanRef.current, { x: "+=50", duration: 5, yoyo: true, repeat: -1 });

    tl.eventCallback("onComplete", () => {
      setIsLoading(false);
    });

    return () => {
      tl.kill(); // Kill the animation on unmount
    };
  }, []);
  
  useEffect(() => {
    // Set the initial theme when the component mounts
    setIsDarkTheme(theme === 'dark' || (theme === 'system' && systemTheme === 'dark'));
  }, [theme, systemTheme]);

  const logoSrc = isDarkTheme ? '/logo/dark.svg' : '/logo/light.svg';

  // Function to update isDarkTheme state
  const handleThemeChange = (isDark: boolean | ((prevState: boolean) => boolean)) => {
    setIsDarkTheme(isDark);
  };

  return (
    <div className="dark:bg-black dark:text-light bg-white relative flex items-center justify-center overflow-hidden theme-transition h-screen mx-auto animate__animated animate__fadeIn">
      {/* Loader content */}
      {isLoading && (
        <div
          ref={loaderRef}
          className={`opacity-10 inset-0 transition-opacity absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-opacity-100 z-50`}
        >
          <Image
            src={logoSrc}
            alt="Ethereal Insights logo"
            width={300}
            height={100}
          />{" "}
        </div>
      )}
      <div
        ref={headerRef}
        className="opacity-0 z-10 relative mx-auto h-screen px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 flex flex-col items-center justify-center animate__animated animate__fadeIn"
      >
        <div className="flex flex-col items-center justify-between lg:flex-row py-16">
          <div className="scale-0 opacity-0 relative mt-4" ref={textRef}>
            <div className="z-10 absolute top-0 -left-48">
              <Image
                src="/palm-tree.png"
                className="w-36 h-full object-fill fill-y text-y"
                alt={"palm tree"}
                width={200}
                height={400}
              />
            </div>
            <div className="lg:max-w-xl lg:pr-5 relative z-10">
              <p className=" flex text-sm uppercase text-g1 text-lime-600">
                Explore
              </p>
              <h2 className=" mb-6 text-9xl font-bold leading-snug tracking-tight text-g1 sm:text-5xl sm:leading-snug text-zinc-800 dark:text-zinc-300">
                Thought provoking
                <span className="my-1 inline-block text-lime-600 border-b-8 border-g4 bg-white dark:bg-black px-4 font-medium text-g4 animate__animated animate__flash theme-transition">
                  Musings
                </span>
              </h2>
              <p className=" text-base text-zinc-700 dark:text-zinc-400 theme-transition">
                Ethereal Insights is a thought-provoking blog and digital
                platform designed to delve into the profound and abstract
                aspects of life, consciousness, and self-reflection
              </p>
              <div className="z-10 mt-10 flex flex-col items-center md:flex-row">
                <Button
                  color="dark"
                  className="md:mr-4 md:mb-0 md:w-auto mb-3 inline-flex h-12  items-center justify-center text-lime-300 bg-zinc-800 border border-transparent enabled:hover:bg-zinc-900 focus:ring-4 focus:ring-zinc-300 dark:bg-zinc-800 dark:enabled:hover:bg-zinc-700 dark:focus:ring-zinc-800 dark:border-zinc-700 theme-transition"
                >
                  Learn More
                </Button>
                <Link
                  href="/"
                  aria-label="join"
                  className=" group inline-flex items-center font-semibold text-g1 text-lime-500"
                >
                  Join the conversation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
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
          </div>
          <div className="relative hidden lg:ml-4 lg:block lg:w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white dark:bg-black p-2 lg:hidden theme-transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              />
            </svg>
            <div
              ref={meditatingWomanRef}
              className="z-10 scale-0 opacity-0 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none theme-transition"
            >
              <Image
                src="/woman-meditating.svg"
                alt="woman meditating"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden text-9xl varien absolute top-6 left-1/4 text-g/10 z-10">
        Explore
      </div>

      <BGShape
        color="lime-300"
        rotation="0"
        shape="circle"
        position={{ top: "10vh", left: "10vw" }}
        size={80}
      />
      <BGShape
        color="lime-300"
        rotation="0"
        shape="circle"
        position={{ top: "20vh", left: "10vw" }}
        size={30}
      />
      <BGShape
        color="lime-300"
        rotation="0"
        shape="circle"
        position={{ top: "30vh", left: "50vw" }}
        size={40}
      />
      <BGShape
        color="lime-300"
        rotation="0"
        shape="circle"
        position={{ top: "70vh", left: "50vw" }}
        size={80}
      />
      <BGShape
        color="lime-300"
        rotation="0"
        shape="circle"
        position={{ top: "70vh", left: "60vw" }}
        size={30}
      />
      <BGShape
        color="lime-300"
        rotation="0"
        shape="circle"
        position={{ top: "70vh", left: "10vw" }}
        size={40}
      />

      <BGShape
        color="lime-300"
        rotation="0"
        shape="circle"
        position={{ top: "80vh", left: "70vw" }}
        size={150}
      />

      <BGShape
        color="lime-300"
        rotation="30"
        shape="circle"
        size={300}
        position={{ top: "70vh", left: "10vw" }}
      />
      <BGShape
        color="lime-300"
        rotation="30"
        shape="circle"
        size={400}
        position={{ top: "10vh", left: "70vw" }}
      />

      {/* Idle path */}
      {/* <div className="absolute -bottom-24 left-10 z-0 opacity-50">
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          className="w-96 z-0 h-full object-fill fill-lime-300 text-lime-300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
           <circle cx="12" cy="12" r="6" fill="#84CC16" />
        </svg>
      </div> */}

      {/* idle path */}
      {/* <div className="absolute -bottom-0 left-3/4 z-0 opacity-50 ">
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
          className="w-48 z-0  h-full -rotate-90 object-fill fill-lime-300 text-lime-300"
        >
          <circle cx="128" cy="128" r="64" fill="#84CC16" />
        </svg>
      </div> */}

      {/* Idle path */}
      {/* <div className=" absolute top-10 left-3/4 z-0 opacity-50 ">
        <svg
          fill="#000000"
          width="800px"
          height="800px"
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
          className="w-96 z-0 h-full object-fill fill-lime-300 text-lime-300"
        >
          <circle cx="128" cy="128" r="64" fill="#84CC16" />
        </svg>
      </div> */}
    </div>
  );
}