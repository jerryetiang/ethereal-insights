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
      <h2 className="text-4xl font-semibold mb-4 text-zinc-700 dark:text-zinc-200 theme-transition">{title}</h2>
      <p className="text-zinc-600 font-medium dark:text-zinc-300 text-md mt-4 theme-transition">
        {mainText}
      </p>
      <p className="text-sm dark:text-zinc-500 text-zinc-600 mt-8 theme-transition">
        {secondaryText}
      </p>
    </div>
  );
};

export default ProductDescription;
