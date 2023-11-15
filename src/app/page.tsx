"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useRef, useState } from "react";
import CurrentYear from "@/lib/date";

interface NavLink {
  id: number;
  title: string;
  url: string;
}

interface NavbarLinkProps {
  link: NavLink;
}

interface MobileNavItemProps {
  link: NavLink;
}

const navLinks = [
  { id: 1, title: "Technology", url: "/technology" },
  { id: 2, title: "Art & Design", url: "/art-design" },
  { id: 3, title: "Music", url: "/music" },
  { id: 4, title: "Business", url: "/business" },
];

const NavbarLink: React.FC<NavbarLinkProps> = ({ link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={link.url}
      className={clsx(
        "text-sm text-gray-400 hover:text-gray-500",
        {
          "animate__animated animate__headShake": isHovered,
          "text-black hover:text-gray": !isHovered,
        }
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="hidden md:block">{link.title}</p>
    </Link>
  );
};

const MobileNavItem: React.FC<MobileNavItemProps> = ({ link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li className="mb-1">
      <Link
        href={link.url}
        className={clsx(
          "block p-4 text-sm font-semibold text-gray-400 hover:bg-gray-50 hover:text-gray rounded",
          {
            "animate__animated animate__fadeIn animate__pulse": !isHovered,
            "text-black hover:text-gray": isHovered,
          }
        )}
        onMouseEnter={() => setIsHovered(false)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p>{link.title}</p>
      </Link>
    </li>
  );
};

export default function Page() {
  const pathname = usePathname();
  const siteTitle = "Etherial Insights";

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
    <div>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <Link className="text-2xl font-bold leading-none" href="#">
          <span>{siteTitle}</span>
        </Link>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-black p-3"
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
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
          href="#"
        >
          Sign In
        </Link>
        <Link
          className="hidden lg:inline-block py-2 px-6 bg-black hover:bg-gray text-sm text-white font-bold rounded-xl transition duration-200"
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
              <Link
                className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                href="#"
              >
                Sign in
              </Link>
              <Link
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-black hover:bg-gray  rounded-xl"
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
