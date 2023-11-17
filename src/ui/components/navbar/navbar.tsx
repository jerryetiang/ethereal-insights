"use client";

import Link from "next/link";
import { useState } from "react";
import CurrentYear from "@/lib/date";
import { NavbarLink } from "@/ui/components/navbar/navLinks";
import { MobileNavItem } from "@/ui/components/navbar/mobileLinks";
import { navLinks } from "./data";
import ThemeSwitcher from "@/utils/themeSwitcher";

export default function NavigationBar() {
  const logoText = "Ethereal Insights";

  const [isMenuHidden, setIsMenuHidden] = useState(true);

  const shownMenu = () => {
    setIsMenuHidden(false);
  };

  const hideMenu = () => {
    setIsMenuHidden(true);
  };

  const toggleMenu = () => {
    setIsMenuHidden(!isMenuHidden);
  };

  return (
    <div className="">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white text-black dark:bg-black dark:text-white theme-transition">
        <Link className="text-2xl font-bold leading-none text-black dark:text-white" href="#">
          <span>{logoText}</span>
        </Link>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-black dark:text-white p-3 theme-transition"
            onClick={shownMenu}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6 animate__animated animate__fadeIn">
          {navLinks.map((link) => (
            <NavbarLink key={link.id} link={link} />
          ))}
        </ul>
        <Link
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 rounded-md transition duration-200"
          href="#"
        >
          <ThemeSwitcher/>
        </Link>
        <Link
                  className="hidden lg:inline-block py-2 px-6  items-center justify-center rounded bg-zinc-950 font-medium tracking-wide text-gray-100 shadow-md transition hover:bg-zinc-900 focus:outline-none md:mr-4 md:mb-0 md:w-auto"
                  href="#"
        >
          Shop
        </Link>
      </nav>
      <div
        className={`navbar-menu relative z-50 ${isMenuHidden ? "hidden animate__animated animate__fadeOut" : "animate__animated animate__fadeIn"}`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white dark:bg-black border-r overflow-y-auto theme-transition">
          <div className="flex items-center mb-8 bg-white dark:bg-black ">
            <Link className="mr-auto text-xl font-bold text-black dark:text-white leading-none theme-transition" href="#">
              <span>{logoText}</span>
            </Link>
            <button className="navbar-close" onClick={hideMenu}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <ul className="animate__animated animate__fadeIn">
              {navLinks.map((link) => (
                <MobileNavItem key={link.id} link={link} />
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6 animate__animated animate__fadeIn">
              <ThemeSwitcher />
              <Link
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white dark:text-black font-semibold bg-black dark:bg-white hover:bg-gray theme-transition rounded-xl"
                href="#"
              >
                Sign Up
              </Link>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>
                Copyright © <CurrentYear />
              </span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}
