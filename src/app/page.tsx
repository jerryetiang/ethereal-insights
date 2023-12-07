import FeaturedPosts from "@/ui/featured/featuredPosts";
import FooterSection from "@/ui/footer";
import Header from "@/ui/home/header";
import Journal from "@/ui/journal";
import React from "react";

export default function Page() {
  return (
    <div>
      <section id="Header">
        <Header />
      </section>
      <section id="featuredPosts">
        <FeaturedPosts />
      </section>
      <section id="journal">
        <Journal />
      </section>    
    </div>
  );
}
