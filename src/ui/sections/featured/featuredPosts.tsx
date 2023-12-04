"use client";
import { Button, Card, Timeline } from "flowbite-react";
import Image from "next/image";
import React from "react";
import TimelineItem from "./timeline";
import { featuredData } from "./data";

const FeaturedPosts = () => {
  return (
    <div className="flex flex-wrap p-4 md:p-16">
      {/* Wider Column - Featured Posts Grid */}
      <div className="w-full md:w-2/3 p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredData.map((post, index) => (
            <Card
              key={index}
              className="dark:bg-zinc-900 theme-transition z-10"
              renderImage={() => (
                <Image
                  width={500}
                  height={500}
                  src={post.image}
                  alt={post.alt}
                />
              )}
            >
              <h5 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-300 theme-transition">
                {post.title}
              </h5>
              <p className="text-sm text-zinc-700 dark:text-zinc-400 theme-transition">
                {post.cardDescription}
              </p>
              <Button
                color="dark"
                className="text-lime-300 bg-zinc-800 border border-transparent enabled:hover:bg-zinc-900 focus:ring-4 focus:ring-zinc-300 dark:bg-zinc-800 dark:enabled:hover:bg-zinc-700 dark:focus:ring-zinc-800 dark:border-zinc-700 theme-transition"
              >
                Read more
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Narrower Column - About the Blog */}
      <div className="z-10 w-full md:w-1/3 p-4 md:p-8 flex flex-col justify-start">
        <h2 className="text-4xl font-bold text-zinc-700 dark:text-zinc-300 mb-4 theme-transition">
          Blog Overview
        </h2>

        <Timeline>
          <div className="space-y-4">
            {featuredData.map((section, index) => (
              <div key={index} className="mb-4">
                <TimelineItem
                  buttonText="Explore"
                  category={section.category}
                  description={section.overviewDescription}
                  title={section.theme}
                />
              </div>
            ))}
          </div>
        </Timeline>
      </div>
    </div>
  );
};

export default FeaturedPosts;
