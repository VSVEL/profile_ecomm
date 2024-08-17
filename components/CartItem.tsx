import { FC } from "react";

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
  const handleQuantityChange = (newQuantity: number) => {
    onQuantityChange(item.id, newQuantity);
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
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={item.quantity <= 1}
            className={`px-2 py-1 border rounded-l ${
              item.quantity <= 1 ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            -
          </button>
          <input
            type="number"
            value={item.quantity}
            min="1"
            readOnly
            className="w-16 px-2 py-1 border-t border-b"
          />
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="px-2 py-1 border rounded-r"
          >
            +
          </button>
          <button
            onClick={() => onRemoveItem(item.id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-4"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
