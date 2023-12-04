import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

interface NavLink {
    id: number;
    title: string;
    url: string;
  }
  
  interface NavbarLinkProps {
    link: NavLink;
  }
    
  const navLinks = [
    { id: 1, title: "Technology", url: "/technology" },
    { id: 2, title: "Art & Design", url: "/art-design" },
    { id: 3, title: "Music", url: "/music" },
    { id: 4, title: "Business", url: "/business" },
  ];
  
  export const NavbarLink: React.FC<NavbarLinkProps> = ({ link }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <Link
        href={link.url}
        className={clsx(
          "text-sm text-zinc-400 hover:text-lime-500",
          {
            "animate__animated animate__headShake": isHovered,
            "text-black hover:text-lime-700": !isHovered,
          }
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p className="hidden md:block">{link.title}</p>
      </Link>
    );
  };
  
 