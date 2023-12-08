'use client'
import React from 'react';
import { useTheme } from 'next-themes';

interface ThemeSwitcherProps {
  onThemeChange: (isDark: boolean) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ onThemeChange }) => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const buttonClass = `w-6 h-6 ${
      currentTheme === 'dark' ? 'text-yellow-400' : 'text-lime-400'
    } ${currentTheme === 'dark' ? 'dark-transition' : ''}`;

    const handleThemeToggle = (e: { preventDefault: () => void }) => {
      e.preventDefault();
    
      const isDark: boolean = currentTheme === 'dark';
    
      onThemeChange(!isDark);
      setTheme(isDark ? 'light' : 'dark');
    };

    return (
      <button
        className={buttonClass}
        role="button"
        onClick={handleThemeToggle}
        title={currentTheme === 'dark' ? 'Light' : 'Dark'}
      >
        {currentTheme === 'dark' ? (
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
        )}
      </button>
    );
  };

  return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
