import InsightCard from "@/ui/journal/insightCard";
import React from "react";

interface InsightSectionProps {
  insights: { title: string; description: string; icon: JSX.Element }[];
}

const InsightSection: React.FC<InsightSectionProps> = ({ insights }) => {
  return (
    <section className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
      {insights.map((insight, index) => (
        <InsightCard
          key={index}
          title={insight.title}
          description={insight.description}
          icon={insight.icon}
        />
      ))}
    </section>
  );
};

export default InsightSection;
