'use client'
import { Button } from 'flowbite-react';
import React from 'react';

interface ArticleProps {
    title: string;
    author: string;
    date: string;
    content: string;
}

const Article: React.FC<ArticleProps> = ({ title, author, date, content }) => {
    return (
        <div className="mb-6 lg:mb-0">
            <div className="relative block rounded-lg bg-zinc-100 dark:bg-zinc-900">
                <div className="flex">
                    <div className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/024.webp" className="w-full" alt="Article 1" />
                        <a href="#!">
                            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                        </a>
                    </div>
                </div>
                <div className="p-6">
                    <h5 className="mb-3 text-lg font-bold text-zinc-700 dark:text-zinc-300">{title}</h5>
                    <p className="mb-4 text-zinc-500 dark:text-zinc-300">
                        <small>Published <u>{date}</u> by
                            <a href="#!">{author}</a></small>
                    </p>
                    <p className="mb-4 pb-2 text-zinc-700 dark:text-zinc-300 text-sm">
                        {content}
                    </p>
                    <Button
                        size="xs"
                        color="dark"
                        className="p-2 mx-auto text-lime-400 bg-zinc-800 enabled:hover:bg-zinc-900 focus:ring-zinc-300 dark:bg-zinc-800 dark:enabled:hover:bg-zinc-700 dark:focus:ring-zinc-800 dark:border-zinc-700 theme-transition"
                    >
                        Read More
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Article;
