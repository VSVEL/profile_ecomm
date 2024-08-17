export const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return await response.json();
};

export const fetchProducts = async (query: string) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products?search=${query}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
