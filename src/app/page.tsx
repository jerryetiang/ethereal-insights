import FeaturedPosts from "@/ui/sections/featured/featuredPosts";
import FooterSection from "@/ui/sections/footer";
import Header from "@/ui/sections/home/header";
import Journal from "@/ui/sections/journal/journal";
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
      <section id="footer">
        <FooterSection />
      </section>
    </div>
  );
}
