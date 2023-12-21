"use client";

import React, { useState } from "react";
import PostCard from "./postCard";
import Link from "next/link";

interface PostGridProps {
  data: Array<{
    image: string;
    title: string;
    author: {name: string};
    createdAt: string;
    body: string;
    slug: string;
  }>;
}

const classes = [
  "col-span-1 sm:col-span-2",
  "col-span-1 sm:col-span-1",
  "col-span-1 sm:col-span-1",
  "col-span-1 sm:col-span-2",
];

const PostGrid: React.FC<PostGridProps> = ({ data }) => {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 grid-flow-auto gap-x-4 gap-y-1">
      {data.map((post, postIndex) => (
        <div key={postIndex} className={classes[postIndex % classes.length]}>
          <Link href={`/technology/${post.slug}`}>
            <PostCard
              backgroundImage={post.image}
              postTitle={post.title}
              author={post.author.name}
              publishDate={post.createdAt}
              description={post.body}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
