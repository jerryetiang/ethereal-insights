import React from "react";

interface InsightCardProps {
  title: string;
  description: string;
  icon: React.ReactNode; // You can adjust the type based on the type of icon component you are using
}

const InsightCard: React.FC<InsightCardProps> = ({ title, description, icon }) => {
  return (
    <div>
      <div
        className="transition-all theme-transition duration-50 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-950 dark:hover:bg-zinc-900 hover:shadow-xl m-2 p-4 relative group"
      >
        <div className="absolute bg-zinc-400 top-0 left-0 w-24 h-1 z-30 transition-all duration-50 group-hover:bg-lime-500 group-hover:w-1/2"></div>
        <div className="py-2 px-9 relative">
          {/* Icon */}
          <div className="mt-2 text-lime-600">{icon}</div>

          {/* Title */}
          <h3 className="mt-8 text-lg font-semibold text-lime-600 dark:text-lime-400">{title}</h3>

          {/* Description */}
          <p className="mt-4 text-xs text-zinc-600 dark:text-zinc-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
