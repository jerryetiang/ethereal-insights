"use client";
import React from "react";
import PropTypes from "prop-types";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

// Define prop types for the component
interface TimelineItemProps {
  category: string;
  title: string;
  description: string;
  buttonText: string;
}

function TimelineItem({
  category,
  title,
  description,
  buttonText,
}: TimelineItemProps) {
  return (
    <Timeline.Item className="theme-transition">
      <Timeline.Point className="theme-transition" />
      <Timeline.Content className="theme-transition">
        <Timeline.Time className="text-xs text-lime-600 dark:text-lime-600">
          {category}
        </Timeline.Time>
        <Timeline.Title className="text-md theme-transition">
          {title}
        </Timeline.Title>
        <Timeline.Body className="text-sm text-justify theme-transition">
          {description}
        </Timeline.Body>
        <Button
          color="gray"
          className="text-lime-900 bg-white border border-zinc-200 enabled:hover:bg-zinc-100 enabled:hover:text-lime-700 :ring-lime-700 focus:text-lime-700 dark:bg-transparent dark:text-lime-400 dark:border-zinc-600 dark:enabled:hover:text-lime-400 dark:enabled:hover:bg-zinc-700 focus:ring-2 theme-transition"
        >
          {buttonText}
          <HiArrowNarrowRight className="ml-2 h-3 w-3" />
        </Button>
      </Timeline.Content>
    </Timeline.Item>
  );
}

// Assign prop types to the component
TimelineItem.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

// Export the component
export default TimelineItem;
