import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

interface NavLink {
    id: number;
    title: string;
    url: string;
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

export const MobileNavItem: React.FC<MobileNavItemProps> = ({ link }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <li className="mb-1">
        <Link
          href={link.url}
          className={clsx(
            "block p-4 text-sm font-semibold text-gray-400 hover:bg-gray-50 hover:text-gray rounded",
            {
              "animate__animated animate__pulse": !isHovered,
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