'use client'
import React from 'react';
import { Button } from 'flowbite-react';

interface CommentProps {
    id: number;
    author: {
        id: number;
        name: string;
        avatar: string;
    }
    date: string;
    content: string;
}

const sampleComments = [
    {
      id: 1,
      author: {
        id: 1,
        name: 'Michael Gough',
        avatar: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
      },
      date: '2022-02-08',
      content: 'Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools is as important as the creation of the design strategy.',
    },
    {
      id: 2,
      author: {
        id: 2,
        name: 'John Doe',
        avatar: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
      },
      date: '2022-03-15',
      content: 'Great insights! I totally agree with the importance of both tools and strategy in UX design.',
    },
    // Add more comments as needed
  ];

const Comment: React.FC<CommentProps> = ({ author, date, content }) => (
  <article className="p-6 text-base bg-zinc-100 rounded-lg dark:bg-zinc-900 mb-4">
    <footer className="flex justify-between items-center mb-2">
      <div className="flex items-center">
        <p className="inline-flex items-center mr-3 text-sm text-zinc-900 dark:text-white font-semibold">
          <img className="mr-2 w-6 h-6 rounded-full" src={author.avatar} alt={author.name} />
          {author.name}
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          <time dateTime={date} title={date}>
            {new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
          </time>
        </p>
      </div>
      <button
        id={`dropdownComment${author.id}Button`}
        data-dropdown-toggle={`dropdownComment${author.id}`}
        className="inline-flex items-center p-2 text-sm font-medium text-center text-zinc-500 dark:text-zinc-400 bg-white rounded-lg hover:bg-zinc-100 focus:ring-4 focus:outline-none focus:ring-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600"
        type="button"
      >
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
        </svg>
        <span className="sr-only">Comment settings</span>
      </button>
      {/* Dropdown menu */}
      <div id={`dropdownComment${author.id}`} className="hidden z-10 w-36 bg-white rounded divide-y divide-zinc-100 shadow dark:bg-zinc-700 dark:divide-zinc-600">
        <ul className="py-1 text-sm text-zinc-700 dark:text-zinc-200" aria-labelledby={`dropdownMenuIconHorizontalButton${author.id}`}>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white">
              Edit
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white">
              Remove
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white">
              Report
            </a>
          </li>
        </ul>
      </div>
    </footer>
    <p className="text-zinc-500 dark:text-zinc-400 text-sm">{content}</p>
    <div className="flex items-center mt-4 space-x-4">
      <button type="button" className="flex items-center text-sm text-zinc-500 hover:underline dark:text-zinc-400 font-medium">
        <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
          />
        </svg>
        Reply
      </button>
    </div>
  </article>
);

const DiscussionSection = () => {
  const comments = sampleComments

  return (
    <section className="antialiased mb-4">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-zinc-700 dark:text-zinc-300">Discussion (20)</h2>
        </div>
        <form className="mb-6">
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
            ></textarea>
          </div>
          <Button
            size="xs"
            color="dark"
            className="p-2 text-lime-400 bg-zinc-800 enabled:hover:bg-zinc-900 focus:ring-zinc-300 dark:bg-zinc-800 dark:enabled:hover:bg-zinc-700 dark:focus:ring-zinc-800 dark:border-zinc-700 theme-transition"
          >
            Post Comment
          </Button>
        </form>

        {/* Render comments */}
        {comments.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </div>
    </section>
  );
};

export default DiscussionSection;
