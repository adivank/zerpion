import ProductList from "@/components/product/product-list";
import { AddProduct } from "@/components/product/product-add";

function Products() {
  return (
    <>
      <AddProduct></AddProduct>
      <ProductList></ProductList>
    </>
  );
}

export { Products };
