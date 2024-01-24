"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "./data";
import { Button, Navbar } from "flowbite-react";
import ThemeSwitcher from "@/utils/themeSwitcher";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";

export default function NavigationBar() {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/logo/dark.svg");
  const [isHovered, setIsHovered] = useState(false);

  // Function to update isDarkTheme state
  const handleThemeChange = (isDark: boolean) => {
    setIsDarkTheme(isDark);
    setLogoSrc(isDark ? "/logo/dark.svg" : "/logo/light.svg");
  };

  useEffect(() => {
    setLogoSrc(isDarkTheme ? "/logo/dark.svg" : "/logo/light.svg");
  }, [handleThemeChange]);

  const pathname = usePathname();

  return (
    <div className="fixed top-0 w-full z-50">
      <Navbar fluid rounded className={"dark:bg-black theme-transition"}>
        <Navbar.Brand as={Link} href="/" className="p-2 flex-1">
          <Image
            src={logoSrc}
            className="mr-3 h-6 sm:h-9"
            alt="Ethereal Insights Logo"
            width={300}
            height={100}
          />
        </Navbar.Brand>
        <div className="flex flex-1 md:order-2">
          <span className="lg:ml-auto lg:mr-3 py-2 px-6 rounded-md transition duration-200">
            <ThemeSwitcher
              onThemeChange={(isDark: boolean) => handleThemeChange(isDark)}
            />
          </span>
          <Link href={"/shop"}>
            <Button
              color="dark"
              className="md:mr-4 md:mb-0 md:w-auto mb-3 hidden lg:inline-flex h-12  items-center justify-center text-lime-400 bg-zinc-800 border border-transparent enabled:hover:bg-zinc-900 focus:ring-4 focus:ring-zinc-300 dark:bg-zinc-800 dark:enabled:hover:bg-zinc-700 dark:focus:ring-zinc-800 dark:border-zinc-700 theme-transition"
            >
              Shop
            </Button>
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {navLinks.map((link) => (
            <Navbar.Link
              as={Link}
              href={link.url}
              key={link.id}
              className={clsx({
                "text-lime-400 dark:text-lime-400 font-bold transition-all duration-300":
                  pathname === link.url,
              })}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span
                className={clsx(
                  {
                    "text-zinc-400": pathname !== link.url,
                  },
                  "text-sm hover:text-lime-400 transition-all duration-300"
                )}
              >
                {link.title}
              </span>
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
