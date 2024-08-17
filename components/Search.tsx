// "use client";

// import { FC, useState } from "react";
// import ProductCard from "./ProductCard";
// import { Search } from "lucide-react"; // Import icon
// import { fetchProducts } from "@/lib/api";

// const SearchBar: FC = () => {
//   const [query, setQuery] = useState("");
//   const [products, setProducts] = useState([]);

//   const handleSearch = async () => {
//     if (query.trim()) {
//       const results = await fetchProducts(query);
//       setProducts(results);
//     }
//   };

//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleSearch();
//         }}
//       >
//         <div className="relative">
//           <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//           <input
//             type="search"
//             placeholder="Search products..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter") {
//                 handleSearch();
//               }
//             }}
//             className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
//           />
//         </div>
//       </form>
//       <div className="grid gap-4 mt-4">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchBar;
