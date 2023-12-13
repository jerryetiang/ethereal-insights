import HeroSection from "@/ui/components/hero";
import ArticleGrid from "@/ui/post/articleGrid";
import Article from "@/ui/post/latestArticles";
import React from "react";

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 3600 } })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Art() {
  const data = await getData()
  return (
    <div>
      <HeroSection
        title="ART & DESIGN"
        subtitle="Discover captivating visual narratives, explore artistic expressions, and witness the transformative power of design."
      />
      <ArticleGrid>
        {data.map((article: { id: React.Key | null | undefined; title: string; author: string; date: string; content: string; }) => (
          <Article
            key={article.id}
            title={article.title}
            author={article.author}
            date={article.date}
            content={article.content}
          />
        ))}
      </ArticleGrid>

    </div>
  );
}
