import ProductList, { ProductProps } from "@/components/product/product-list";
import { AddProduct } from "@/components/product/product-add";
import { useEffect, useState } from "react";

const fetchProducts = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/product`);
  return response;
};

function Products() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    fetchProducts()
      .then((res) => res.json())
      .then((data) => {
        setProducts(data[0]);
        setProductCount(data[1]);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      <div className="py-4 flex justify-end">
        <AddProduct setProducts={setProducts} products={products}></AddProduct>
      </div>
      {products && (
        <ProductList
          products={products}
          productCount={productCount}
        ></ProductList>
      )}
    </>
  );
}

export { Products };
