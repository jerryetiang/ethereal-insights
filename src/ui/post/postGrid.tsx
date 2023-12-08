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
  gridConfigs: Array<string>;
}

const PostGrid: React.FC<PostGridProps> = ({ data, gridConfigs }) => {
  const maxPostsToShow = 8;

  return (
    <div>
      {gridConfigs.map(
        (columnWidths, index) => (
          <div
            className="grid gap-4"
            key={index}
            style={{ gridTemplateColumns: index % 3 === 0 ? "2fr 2fr" : "2fr 1fr" }}
          >
            {data.slice(index * maxPostsToShow, (index + 1) * maxPostsToShow).map((post, postIndex) => (
              <div key={postIndex}>
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
        )
      )}
    </div>
  );
};

export default PostGrid;