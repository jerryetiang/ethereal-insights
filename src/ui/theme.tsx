"use client"
import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  // State to track the dark mode status
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    // Toggle the state
    setIsDarkMode(!isDarkMode);

    // Update the class on the HTML element
    document.documentElement.classList.toggle('dark', !isDarkMode);

    // Optionally, you can save the user's preference (isDarkMode) to localStorage or a backend
  };

  // useEffect to set initial dark mode based on user preference
  useEffect(() => {
    // Replace this with your logic to get the user's dark mode preference
    const userPrefersDarkMode = /* your logic to determine if dark mode is enabled */;    setIsDarkMode(userPrefersDarkMode);

    // Update the class on the HTML element
    document.documentElement.classList.toggle('dark', userPrefersDarkMode);
  }, []);

  return (
    <button
      onClick={toggleDarkMode}
      className="bg-gray-300 dark:bg-gray-700 p-2 rounded-md focus:outline-none"
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
