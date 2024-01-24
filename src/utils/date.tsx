import React from "react";

const CurrentYear = () => {
  const currentYear = new Date().getFullYear();

  return <>{currentYear}</>;
};

export default CurrentYear;
