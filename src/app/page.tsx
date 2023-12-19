import Categories from "@/ui/categories";
import FeaturedPosts from "@/ui/featured/featuredPosts";
import Hero from "@/ui/home/hero";
import Journal from "@/ui/journal";
import React from "react";

export default function Page() {
  return (
    <div>
      <section id="Header">
        <Hero />
      </section>

      {/* <section>
        <Categories />
      </section>
      <section id="featuredPosts">
        <FeaturedPosts />
      </section>
      <section id="journal">
        <Journal />
      </section>     */}
    </div>
  );
}
