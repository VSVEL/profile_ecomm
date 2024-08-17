// components/ProductCard.tsx
"use client";
import { FC, useContext } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/app/context/context";
import toast from "react-hot-toast";
import CustomToast from "./CustomToast";

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
    toast.success(<CustomToast message={`${product.title} added to cart!`} />, {
      duration: 4000, // Optional: Duration for which the toast is visible
    });
  };

  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <h5 className="text-md font-bold mb-2">{product.title}</h5>
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
