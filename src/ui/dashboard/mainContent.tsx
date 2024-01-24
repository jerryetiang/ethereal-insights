import React from "react";
interface MainContentProps {
  children: React.ReactNode;
}

export const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <div className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-lg w-full">
      {children}
    </div>
  );
};
