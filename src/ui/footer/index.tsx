
'use client';

import { Footer } from 'flowbite-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { navLinks } from "./data";
import { useState, useEffect } from 'react';
import { NavbarLink } from '../navbar/navLinks';

export default function FooterSection() {
  const { systemTheme, theme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // Set the initial theme when the component mounts
    setIsDarkTheme(theme === 'dark' || (theme === 'system' && systemTheme === 'dark'));
  }, [theme, systemTheme]);

  const logoSrc = isDarkTheme ? '/logo/dark.svg' : '/logo/light.svg';

  // Function to update isDarkTheme state
  const handleThemeChange = (isDark: boolean | ((prevState: boolean) => boolean)) => {
    setIsDarkTheme(isDark);
  };

  return (
    <Footer container className='opacity-90 bg-zinc-100 dark:bg-zinc-900 theme-transition'>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <Footer.Brand
            href="/"
            src={logoSrc}
            alt="Ethereal Insights Logo"
          />

          <Footer.LinkGroup className="space-x-6 animate__animated animate__fadeIn" >
          {navLinks.map((link) => (
            <NavbarLink key={link.id} link={link} />
          ))}
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="/" by="Ethereal Insights" year={2023} />
      </div>
    </Footer>
  );
}