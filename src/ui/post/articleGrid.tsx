'use client'
import React, { ReactNode, useState } from 'react'

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
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };
    
    return (
        <div className="my-24 mx-auto">
             <div>
            {/* Grid rendering logic for currentArticles */}
            <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
                {currentArticles}
            </div>

            {/* Pagination controls */}
            <div className="flex justify-center mt-6 space-x-4">
                {/* Previous button */}
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                    onClick={() => handlePageClick(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {/* Pagination buttons */}
                {[...Array(Math.ceil(React.Children.count(children) / articlesPerPage))].map((_, index) => (
                    // Display only three pagination buttons at a time
                    (index >= currentPage - 1 && index <= currentPage + 1) && (
                        <button
                            key={index}
                            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue ${currentPage === index + 1 ? 'bg-blue-700' : ''}`}
                            onClick={() => handlePageClick(index + 1)}
                        >
                            {index + 1}
                        </button>
                    )
                ))}

                {/* Next button */}
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                    onClick={() => handlePageClick(currentPage + 1)}
                    disabled={currentPage === Math.ceil(React.Children.count(children) / articlesPerPage)}
                >
                    Next
                </button>
            </div>
        </div>
        </div>
    )
}

export default ArticleGrid