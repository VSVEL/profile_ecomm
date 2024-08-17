"use client";
import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CartContext } from "../context/context";
import CartItem from "@/components/CartItem";

const CartPage = () => {
  const cartContext = useContext(CartContext);
  const [selectedDiscount, setSelectedDiscount] = React.useState<number | null>(
    null
  );

  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { cart, removeFromCart, updateQuantity } = cartContext;

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const applyDiscount = (discount: number) => {
    setSelectedDiscount(discount);
  };

  const total = selectedDiscount
    ? subtotal - (subtotal * selectedDiscount) / 100
    : subtotal;

  return (
    <div className="p-6">
      {cart.length === 0 ? (
        <div className="text-center">
          <h1 className="text-xl font-semibold mb-4">Your Cart is Empty</h1>
          <p className="mb-4">
            {`It looks like you don't have any items in your cart.`}
          </p>
          <p className="mb-6">
            Browse through our products and add some to your cart!
          </p>
          <Link href="/" passHref>
            <Button variant="outline" className="w-full">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onQuantityChange={updateQuantity}
              onRemoveItem={removeFromCart}
            />
          ))}
          <div className="mt-6">
            <p className="text-xl font-semibold">
              Subtotal: ${subtotal.toFixed(2)}
            </p>
            <div className="mt-4">
              <p className="font-medium mb-2">Select a discount:</p>
              <div className="flex space-x-4">
                {[5, 10, 20].map((discount) => (
                  <button
                    key={discount}
                    onClick={() => applyDiscount(discount)}
                    className={`px-4 py-2 rounded border ${
                      selectedDiscount === discount
                        ? "bg-green-100 border-green-500"
                        : "bg-white border-gray-300"
                    } hover:bg-green-200 transition`}
                  >
                    {discount}% Off
                  </button>
                ))}
              </div>
              <button
                onClick={() => applyDiscount(0)}
                className="mt-2 px-4 py-2 rounded border bg-red-100 border-red-500 hover:bg-red-300 transition"
              >
                Remove Discount
              </button>
            </div>
            <p className="text-2xl font-bold mt-4">
              Total: ${total.toFixed(2)}
            </p>
            <div className="flex space-x-4">
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Checkout
              </button>
              <Link href="/" passHref>
                <Button variant="outline" className="mt-4 px-4 py-2 rounded">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
