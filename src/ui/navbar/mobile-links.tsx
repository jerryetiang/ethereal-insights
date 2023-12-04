import Link from "next/link";
import React from "react";

interface Link {
  id: number;
  title: string;
  url: string;
}

interface NavLinksProps {
  links: Link[];
}

const MobileLinks: React.FC<NavLinksProps> = ({ links }) => (
  <ul>
    {/* Map through the links array */}

    {links.map((link) => (
        <li className="mb-1" key={link.id}>
          <Link
            className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
            href={link.url}
          >
            {link.title}
          </Link>
        </li>
    ))}
  </ul>
);

export default MobileLinks;
