"use client"; // Add this line at the top of your file

import React from "react";
import { Product } from "../../../pages/types";

interface ProductCardProps extends Product {
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  onAddToCart,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-full sm:w-80 md:w-96 lg:w-80 xl:w-80">
      <img
        src={image}
        alt={name} // Use the product name for better accessibility
        className="w-full h-56 object-cover rounded-md mb-4 transform transition-all duration-300 ease-in-out"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-lg text-slate-600 mb-4">${price}</p>

      <button
        onClick={() => onAddToCart({ id, name, price, image })}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;