import React from "react";
import Image from "next/image";
import Link from "next/link";
import PurchaseButton from "@/ui/components/purchaseButton";

interface ProductDetailsProps {
  imageUrl: string;
  altText: string;
  productName: string;
  price: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  imageUrl,
  altText,
  productName,
  price,
}) => {
  return (
    <article>
      {/* Product Image */}
      <Image src={imageUrl} alt={altText} width={400} height={400} className="rounded-lg" />

      {/* Product Details */}
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-semibold">{productName}</h2>
        <p className="text-gray-600 text-xl">Price: {price}</p>

        {/* Purchase Button */}
        <PurchaseButton />
       
      </div>
    </article>
  );
};

export default ProductDetails;
