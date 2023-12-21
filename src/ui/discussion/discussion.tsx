'use client'
import React, { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';
import Comment from './comment';

interface CommentProps {
  id: string;
  author: {
    id: string;
    name: string;
  };
  createdAt: string;
  comment: string;
}

const DiscussionSection: React.FC<{ postSlug: string }> = ({ postSlug }) => {
  // State for managing comments, new comments, and pagination
  const [postComments, setPostComments] = useState<CommentProps[]>([]);
  const [newComment, setNewComment] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 2;

  // Fetch comments based on postSlug
  const fetchComments = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/comments?postSlug=${postSlug}`);
      if (response.ok) {
        const comments = await response.json();
        setPostComments(comments);
      } else {
        console.error('Error fetching comments:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  // Fetch comments on component mount
  useEffect(() => {
    fetchComments();
  }, [postSlug]);

  // Get current comments based on pagination
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = postComments.slice(indexOfFirstComment, indexOfLastComment);

  // Function to handle comment submission
  const handleCommentSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postSlug,
          comment: newComment,
        }),
      });

      if (response.ok) {
        console.log('Comment posted successfully!');
        // Fetch and update the comments array
        fetchComments();
        // Reset the form by clearing the newComment state
        setNewComment('');
        // Reset to the last page after submitting a new comment
        setCurrentPage(Math.ceil(postComments.length / commentsPerPage));
      } else {
        console.error('Error posting comment:', response.statusText);
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  // Function to handle page navigation
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };


  return (
    <section className="antialiased mb-4">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-zinc-700 dark:text-zinc-300">
            Discussion ({postComments.length})
          </h2>
        </div>
        <form className="mb-6">
          {/* Your comment input and button */}
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows={6}
              className="px-0 w-full text-sm text-zinc-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-zinc-400 dark:bg-zinc-800"
              placeholder="Write a comment..."
              required
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
          </div>
          <Button
            size="xs"
            color="dark"
            className="p-2 text-lime-400 bg-zinc-800 enabled:hover:bg-zinc-900 focus:ring-zinc-300 dark:bg-zinc-800 dark:enabled:hover:bg-zinc-700 dark:focus:ring-zinc-800 dark:border-zinc-700 theme-transition"
            onClick={handleCommentSubmit}
          >
            Post Comment
          </Button>
        </form>

       {/* Render comments for the current page */}
       {currentComments.map((comment) => (
          <Comment postSlug={postSlug} key={comment.id} {...comment} />
        ))}
        {/* Pagination controls */}
        <div className="flex justify-center gap-4 items-center mt-4">
          <Button
            size="xs"
            color="dark"
            className="p-2 text-lime-400 bg-zinc-800 enabled:hover:bg-zinc-900 focus:ring-zinc-300 dark:bg-zinc-800 dark:enabled:hover:bg-zinc-700 dark:focus:ring-zinc-800 dark:border-zinc-700 theme-transition"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </Button>
          <Button
            size="xs"
            color="dark"
            className="p-2 text-lime-400 bg-zinc-800 enabled:hover:bg-zinc-900 focus:ring-zinc-300 dark:bg-zinc-800 dark:enabled:hover:bg-zinc-700 dark:focus:ring-zinc-800 dark:border-zinc-700 theme-transition"
            disabled={indexOfLastComment >= postComments.length}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiscussionSection;
