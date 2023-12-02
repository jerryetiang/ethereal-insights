"use"
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
    <Timeline.Item>
      <Timeline.Point />
      <Timeline.Content>
        <Timeline.Time className="text-xs">{category}</Timeline.Time>
        <Timeline.Title className="text-md">{title}</Timeline.Title>
        <Timeline.Body className="text-sm">{description}</Timeline.Body>
        <Button color="gray">
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
