import React from "react";
import HeroSection from "@/ui/components/hero";
import PostGrid from "@/ui/post/postGrid";

async function getData(category: string) {
  const res = await fetch(`${process.env.BASE_URL}/api/posts/cat/${category}`, {
    cache: "no-store",
  });

  if (res.status === 404) {
    console.log("Sorry, Category not found");
  }

  const data = await res.json();
  return data;
}

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;

  const data = await getData(category);
  return (
    <>
      <div>
        <HeroSection
          title={data.category.title}
          subtitle={data.category.subtitle}
        />
        <div className="mt-2">
          <PostGrid data={data.posts} catSlug={data.category.slug} />
        </div>
      </div>
    </>
  );
}
