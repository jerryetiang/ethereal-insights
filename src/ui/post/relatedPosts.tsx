"use client";
import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface RelatedPostsComponentProps {
  post: {
    slug: string;
    title: string;
    body: string;
    image: string;
  };
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};

const RelatedPostsComponent: React.FC<RelatedPostsComponentProps> = ({
  post,
}) => {
  const truncatedDescription = truncateText(post.body, 64);
  return (
    <Link href={`/posts/${post.slug}`}>
      <Card className="max-w-sm bg-zinc-100 dark:bg-zinc-900 border-none my-4 shadow-transparent">
        <div className="flex items-center space-x-4">
          <div className="shrink-0">
            <Image
              alt="Post Image"
              height="64"
              src={post.image || "/default-image.png"}
              width="64"
              className="rounded-full"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
              {post.title}
            </p>
            <p className="truncate text-sm text-gray-500 dark:text-gray-400">
              {truncatedDescription}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default RelatedPostsComponent;
