// app/dashboard/page.tsx
import { FC } from "react";
import ProductCard from "@/components/ProductCard"; // Adjust the path if needed

const Dashboard: FC = async () => {
  const response = await fetch("https://fakestoreapi.com/products"); // Example API
  const products = await response.json();

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product: any) => (
          <ProductCard
            key={product.id}
            product={{
              id: product.id,
              image: product.image,
              title: product.title,
              price: product.price,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
