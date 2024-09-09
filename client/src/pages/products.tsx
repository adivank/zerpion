import ProductList from "@/components/product/product-list";
import { AddProduct } from "@/components/product/product-add";
import { useEffect, useState } from "react";

const fetchProducts = async () => {
  const response = await fetch("http://localhost:3001/product");
  return response;
};

function Products() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetchProducts()
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      <AddProduct></AddProduct>
      {products && <ProductList products={products}></ProductList>}
    </>
  );
}

export { Products };
