"use client";
import { Button, Card, Timeline } from "flowbite-react";
import Image from "next/image";
import React from "react";
import TimelineItem from "./timeline";

// Data for each featured post
const featuredData = [
  {
    theme: "Future Horizons Unveiled",
    title: "Tech Trends Shaping Tomorrow",
    category: "Technology",
    image: "/Featured/technology.jpg",
    alt: "Tech",
    cardDescription:
      "Explore the latest in technology, from AI breakthroughs to cutting-edge innovations, and envision the future of our digital landscape.",
    overviewDescription:
      "Embark on a journey through the ever-evolving landscape of technology. Future Horizons Unveiled takes you beyond the surface, exploring the latest advancements in AI, groundbreaking innovations, and the transformative potential of emerging technologies. Dive into insightful discussions that illuminate the path to a tech-inspired future.",
  },
  {
    theme: "Elegance in Every Stroke",
    title: "Harmony in Design: The Art of Balance",
    category: "Art & Design",
    image: "/Featured/art.jpg",
    alt: "Art",
    cardDescription:
      "Dive into the world of art and design, discovering the principles that create visual harmony and inspire creative expression.",
    overviewDescription:
      "Elegance in Every Stroke invites you into the world of Art & Design, where creativity knows no bounds. Immerse yourself in discussions about the principles that create visual harmony, interviews with visionary artists, and explorations of design trends that shape the aesthetic landscape. Witness the beauty in every stroke and the stories behind the art.",
  },
  {
    theme: "Resonance Unleashed",
    title: "Exploring Music's Power",
    category: "Music",
    image: "/Featured/music.jpg",
    alt: "Music",
    cardDescription:
      "Embark on a sonic journey, exploring the influence of music on emotions, culture, and its transformative power in our lives.",
    overviewDescription:
      "Discover the transformative power of music in Resonance Unleashed. Embark on a sonic journey exploring the influence of music on emotions, culture, and its profound impact on our lives. Immerse yourself in discussions that uncover the hidden layers of melodies, rhythms, and the stories that music tells.",
  },
  {
    theme: "Business Insights",
    title: "Navigating Entrepreneurial Waters",
    category: "Business",
    image: "/Featured/business.jpg",
    alt: "Business",
    cardDescription:
      "Gain valuable insights into the business world, from entrepreneurial tips to market trends, empowering you to navigate the corporate seas.",
    overviewDescription:
      "Navigate the intricate waters of entrepreneurship in Business Insights. Gain valuable insights into the business world, from entrepreneurial tips to market trends. Empower yourself with the knowledge needed to navigate the corporate seas and chart a course for success.",
  },
];

const FeaturedPosts = () => {
  return (
    <div className="flex flex-wrap p-4 md:p-16">
      {/* Wider Column - Featured Posts Grid */}
      <div className="w-full md:w-2/3 p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredData.map((post, index) => (
            <Card
              key={index}
              className="dark:bg-zinc-900 theme-transition"
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
              <Button color="dark" className="text-lime-300 bg-zinc-800 border border-transparent enabled:hover:bg-zinc-900 focus:ring-4 focus:ring-zinc-300 dark:bg-zinc-800 dark:enabled:hover:bg-zinc-700 dark:focus:ring-zinc-800 dark:border-zinc-700 theme-transition">
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
      <div className="w-full md:w-1/3 p-4 md:p-8 flex flex-col justify-start">
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
