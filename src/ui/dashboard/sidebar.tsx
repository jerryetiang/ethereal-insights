import React from "react";
import { ProfileCard } from "./profileCard";
import { Navigation } from "./navigation/navigation";

const Sidebar = () => {
  return (
    <div className="w-1/5">
      <ProfileCard />
      <Navigation />
    </div>
  );
};

export default Sidebar;
