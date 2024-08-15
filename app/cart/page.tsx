// app/cart/page.tsx
"use client";
import { useContext } from "react";
import CartItem from "../../components/CartItem";
import { CartContext } from "../../context";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CartPage = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { cart, removeFromCart, updateQuantity } = cartContext;

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      {cart.length === 0 ? (
        <div className="text-center">
          <h1 className="text-xl font-semibold mb-4">Your Cart is Empty</h1>
          <p className="mb-4">
            It looks like you don't have any items in your cart.
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
            {/* Add discount logic here */}
            <p className="text-2xl font-bold mt-2">
              Total: ${subtotal.toFixed(2)}
            </p>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
