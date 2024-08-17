import { FC } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface CustomToastProps {
  message: string;
}

const CustomToast: FC<CustomToastProps> = ({ message }) => {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to the cart page when the toast is clicked
    router.push("/cart");
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer px-4 py-2 rounded"
    >
      {message}
    </div>
  );
};

export default CustomToast;
