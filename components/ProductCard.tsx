// components/ProductCard.tsx
"use client";

import { FC, useContext } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context";

interface ProductCardProps {
  product: {
    id: number;
    image: string;
    title: string;
    price: number;
  };
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const cartContext = useContext(CartContext);
  const router = useRouter();

  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { addToCart } = cartContext;

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
    });
    // Navigate to the cart page after adding to cart
    router.push("/cart");
  };

  return (
    <div className="border p-4 rounded shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-lg font-semibold mb-4">${product.price.toFixed(2)}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
