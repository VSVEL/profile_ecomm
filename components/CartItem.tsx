// components/CartItem.tsx
import { FC, useState } from "react";

interface CartItemProps {
  item: {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
  };
  onQuantityChange: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

const CartItem: FC<CartItemProps> = ({
  item,
  onQuantityChange,
  onRemoveItem,
}) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
      onQuantityChange(item.id, newQuantity);
    }
  };

  const handleIncrement = () => {
    handleQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      handleQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="flex items-center border-b pb-4 mb-4">
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 object-cover mr-4"
      />
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <button
            onClick={handleDecrement}
            disabled={quantity === 0}
            className="bg-gray-300 text-black px-2 py-1 rounded-l hover:bg-gray-400"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            min="0"
            readOnly
            className="w-16 px-2 py-1 border-t border-b border-gray-300 text-center"
          />
          <button
            onClick={handleIncrement}
            className="bg-gray-300 text-black px-2 py-1 rounded-r hover:bg-gray-400"
          >
            +
          </button>
          <button
            onClick={() => onRemoveItem(item.id)}
            className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
