"use client";

import React, { useState } from "react";
import PostCard from "./postCard";
interface PostGridProps {
  data: Array<{
    backgroundImage: string;
    postTitle: string;
    author: string;
    publishDate: string;
    description: string;
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
    <div className="grid sm:grid-cols-3 grid-cols-1 grid-flow-auto gap-4">
      {data.map((post, postIndex) => (
        <div key={postIndex} className={classes[postIndex % classes.length]}>
          <PostCard
            backgroundImage={post.backgroundImage}
            postTitle={post.postTitle}
            author={post.author}
            publishDate={post.publishDate}
            description={post.description}
          />
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
