import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface NavLink {
    id: number;
    title: string;
    url: string;
  }
  
  interface NavbarLinkProps {
    link: NavLink;
  }
    
  
  export const NavbarLink: React.FC<NavbarLinkProps> = ({ link }) => {
    const [isHovered, setIsHovered] = useState(false);

    const pathname = usePathname();
  
    return (
      <Link
        href={link.url}
        className={clsx(
          "text-sm text-zinc-400 hover:text-lime-500",
          {
            "animate__animated animate__headShake": isHovered,
            "text-black hover:text-lime-500": !isHovered,
          },
          {
            "dark:text-zinc-200 text-zinc-800 dark:hover:text-zinc-200 hover:text-zinc-800 font-bold": pathname === link.url,
          }
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p className="hidden md:block">{link.title}</p>
      </Link>
    );
  };
  
 