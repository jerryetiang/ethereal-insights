import React from 'react';

interface CommentProps {
  id: string;
  postSlug: string;
  author: {
    id: string;
    name: string;
  };
  createdAt: string;
  comment: string;
}

const Comment: React.FC<CommentProps> = ({ author, createdAt, comment, postSlug }) => (
    <article className="p-6 text-base bg-zinc-100 rounded-lg dark:bg-zinc-900 mb-4">
    <footer className="flex justify-between items-center mb-2">
      <div className="flex items-center">
        <p className="inline-flex items-center mr-3 text-sm text-zinc-900 dark:text-white font-semibold">
          <img className="mr-2 w-6 h-6 rounded-full" src={`https://flowbite.com/docs/images/people/profile-picture-2.jpg`} alt={author.name} />
          {author.name}
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          <time dateTime={createdAt} title={createdAt}>
            {new Date(createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
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
    <p className="text-zinc-500 dark:text-zinc-400 text-sm">{comment}</p>
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

export default Comment;