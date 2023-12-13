'use client'
import React, { ReactNode, useState } from 'react'
import { Pagination } from 'flowbite-react';
interface ArticleGridProps {
    children: ReactNode;
}

const ArticleGrid: React.FC<ArticleGridProps> = ({ children }) => {
    const articlesPerPage = 6;
    const [currentPage, setCurrentPage] = React.useState(1);

    // Calculate the index of the first and last articles to be displayed
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

    // Slice the array of articles to display only the ones for the current page
    const currentArticles = React.Children.toArray(children).slice(indexOfFirstArticle, indexOfLastArticle);

    // Function to handle pagination button click
    const handlePageClick = (pageNumber: React.SetStateAction<number>) => {
        setCurrentPage(pageNumber);

        // Scroll back to the top when the page changes
        // window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    return (
        <div className="my-24 mx-auto">
            <div>
                {/* Grid rendering logic for currentArticles */}
                <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
                    {currentArticles}
                </div>

                <div className="flex overflow-x-auto sm:justify-center mt-8">
                    <Pagination currentPage={currentPage} totalPages={100} onPageChange={handlePageClick} />
                </div>
            </div>
        </div>
    )
}

export default ArticleGrid