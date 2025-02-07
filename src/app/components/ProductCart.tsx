import React from "react";

const ProductCard = ({ product, addToCart }: { product: { id: number; title: string; price: number; image: string }; addToCart: (product: any) => void }) => {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
      <p className="text-gray-500 mt-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
