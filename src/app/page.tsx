import Layout from "@/ui/layout";
import NavigationBar from "@/ui/navbar";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <div className="flex flex-row flex-1">
        {/* Main Section */}
        <div className="w-2/3 bg-white">
          {/* Main content goes here */}
          Main
          
        </div>

        {/* Vertical Line */}
        <div className="w-1 border-l border-gray-300"></div>

        {/* Sidebar (on the right) */}
        <div className="w-1/3 bg-white">
          {/* Sidebar content goes here */}
          Sidebar
        </div>
      </div>
    </div>
    </>
  );
};

export default Page;
