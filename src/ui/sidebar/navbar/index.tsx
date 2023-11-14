"use client"
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

export default function NavLinks() {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  const toggleMenu = () => {
    setIsMenuHidden(!isMenuHidden);
  };

  const pathname = usePathname();
  return (
    <>
      {navLinks.map((link) => {
        return (
          <Link
            key={link.id}
            href={link.url}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.url,
              }
            )}
          >
            <p className="hidden md:block">{link.title}</p>
          </Link>
        );
      })}
    </>
  );
}
