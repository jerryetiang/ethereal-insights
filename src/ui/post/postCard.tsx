"use client";
import React, { useState } from "react";

interface PostCardProps {
  backgroundImage: string;
  postTitle: string;
  author: string;
  publishDate: string;
  description: string;
}

const PostCard: React.FC<PostCardProps> = ({
  backgroundImage,
  postTitle,
  author,
  publishDate,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className={`my-2 z-10 h-96 rounded-lg p-8 relative overflow-hidden hover:cursor-pointer`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`absolute inset-0 transition-all duration-300 bg-zinc-100 dark:bg-zinc-900 ${isHovered && 'blur-sm scale-125'}`}
        style={cardStyle}
      ></div>

      <div className="relative  dark:bg-black bg-white opacity-70 p-4 rounded-md min-h-full z-10 shadow-sm">
        <h2 className="text-3xl font-bold mb-2 text-zinc-800 dark:text-zinc-300">
          {postTitle}
        </h2>
        <p className="text-sm font-light dark:text-zinc-300 text-zinc-700">
          <span className="text-lime-400">Author:</span>{author}
        </p>
        <p className="text-sm font-light dark:text-zinc-300 text-zinc-700">
          <span className="text-lime-400">Published on:</span> {publishDate}
        </p>
        <p className="text-sm font-regular dark:text-zinc-100 text-zinc-800 mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
