"use client";
import React from "react";
import HeroSection from "@/ui/components/hero";
import PostGrid from "@/ui/post/postGrid";
import postCardData from "./data";

export default function Technology() {
  return (
    <>
      <div>
        <HeroSection
          title="TECHNOLOGY"
          subtitle="Explore the intersection of science and creativity, where transformative ideas become reality."
        />
        <div className="mt-2">
          <PostGrid data={postCardData} />
        </div>
      </div>
    </>
  );
}
