"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface Link {
  id: number;
  title: string;
  url: string;
}

interface NavLinksProps {
  links: Link[];
}

const NavLinks: React.FC<NavLinksProps> = ({ links }) => {
  const pathname = usePathname();
  return (
    <>
      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
        {/* Map through the links array */}

        {links.map((link) => (
          <div key={link.id} >
            <li>
              <Link
                className={clsx("text-sm text-gray-400 hover:text-gray-500", {
                  "text-blue": pathname === link.url,
                })}
                href={link.url}
              >
                {link.title}
              </Link>
            </li>
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default NavLinks;
