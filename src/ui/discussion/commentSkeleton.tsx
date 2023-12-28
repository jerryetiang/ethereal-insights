import React from 'react';

const CommentSkeleton: React.FC = () => (
  <article className="p-6 text-base bg-zinc-100 rounded-lg dark:bg-zinc-900 mb-4">
    <footer className="flex justify-between items-center mb-2">
      <div className="flex items-center">
        {/* User Avatar Skeleton */}
        <div className="skeleton-avatar mr-3 "></div>
        {/* User Name and Comment Date Skeleton */}
        <div className="skeleton-info">
          <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-36 mb-1"></div>
          <div className="h-3 bg-zinc-300 dark:bg-zinc-700 rounded w-24 mb-2"></div>
          <div className="h-3 bg-zinc-300 dark:bg-zinc-700 rounded w-12"></div>
        </div>
      </div>
      {/* Comment Settings Skeleton */}
      <div className="skeleton-settings"></div>
    </footer>
    {/* Comment Body Skeleton */}
    <div className="skeleton-comment mb-4"></div>
    <div className="flex items-center mt-4 space-x-4">
      {/* Reply Button Skeleton */}
      <div className="skeleton-reply"></div>
    </div>
  </article>
);

export default CommentSkeleton;
