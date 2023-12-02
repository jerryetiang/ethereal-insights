import React from "react";

interface ProductDescriptionProps {
  title: string;
  mainText: string;
  secondaryText: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  title,
  mainText,
  secondaryText,
}) => {
  return (
    <div>
      <h2 className="text-4xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-800 font-medium dark:text-gray-300 text-md mt-4 theme-transition">
        {mainText}
      </p>
      <p className="text-sm dark:text-gray-500 text-gray-600 mt-8 theme-transition">
        {secondaryText}
      </p>
    </div>
  );
};

export default ProductDescription;
