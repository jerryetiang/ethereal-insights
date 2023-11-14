"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";

const navLinks = [
  { id: 1, title: "Technology", url: "/technology" },
  { id: 2, title: "Art & Design", url: "/art-design" },
  { id: 3, title: "Music", url: "/music" },
  { id: 4, title: "Business", url: "/business" },
];

export default function Page() {
  const pathname = usePathname();

  const [isMenuHidden, setIsMenuHidden] = useState(true);

  const toggleMenu = () => {
    setIsMenuHidden(!isMenuHidden);
  };

  const siteTitle = "Etherial Insights";

  return (
    <div>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <Link className="text-2xl font-bold leading-none" href="#">
          <span>{siteTitle}</span>
        </Link>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={toggleMenu}
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
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          {navLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className={clsx("text-sm text-gray-400 hover:text-gray-500", {
                  "text-black hover:text-blue-600": pathname === link.url,
                })}
              >
                <p className="hidden md:block">{link.title}</p>
              </Link>
            );
          })}
        </ul>
        <Link
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
          href="#"
        >
          Sign In
        </Link>
        <Link
          className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
          href="#"
        >
          Sign up
        </Link>
      </nav>
      <div
        className={`navbar-menu relative z-50 ${isMenuHidden ? "hidden" : ""}`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link className="mr-auto text-xl font-bold leading-none" href="#">
              <span>{siteTitle}</span>
            </Link>
            <button className="navbar-close" onClick={toggleMenu}>
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
            <ul>
              {navLinks.map((link) => {
                return (
                  <li className="mb-1" key={link.id}>
                    <Link
                      key={link.id}
                      href={link.url}
                      className={clsx(
                        "block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded",
                        {
                          "text-black hover:text-blue-600":
                            pathname === link.url,
                        }
                      )}
                    >
                      <p>{link.title}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                href="#"
              >
                Sign in
              </a>
              <a
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                href="#"
              >
                Sign Up
              </a>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}
