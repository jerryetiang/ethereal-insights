import React from "react";
import HeroSection from "@/ui/components/hero";
import PostGrid from "@/ui/post/postGrid";
import postCardData from "./data";

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 3600 } })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Technology() {
  const data = await getData()
  return (
    <>
      <div>
        <HeroSection
          title="TECHNOLOGY"
          subtitle="Explore the intersection of science and creativity, where transformative ideas become reality."
        />
        <div className="mt-2">
          <PostGrid data={data} />
        </div>
      </div>
    </>
  );
}
