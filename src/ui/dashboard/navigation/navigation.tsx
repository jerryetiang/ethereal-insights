import React from "react";
import { Item } from "./item";

const navLinks = [
  { id: 1, title: "Overview", url: "/dashboard/overview" },
  { id: 2, title: "Site Management", url: "/dashboard/site-management" },
  { id: 3, title: "Post Management", url: "/dashboard/post-management" },
  { id: 4, title: "Settings", url: "/dashboard/settings" },
  { id: 5, title: "Media Library", url: "/dashboard/media-llbrary" },
];

export const Navigation = () => {
  return (
    <div>
      {navLinks.map((link) => (
        <Item key={link.id} data={link} />
      ))}
    </div>
  );
};
