import { ProductProps } from "@/components/product/product-list";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export interface ProductImage {
  url: string;
  imageName?: string;
}

export interface ProductDetailFieldProps
  extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  value?: string | number;
  type?: "image" | "images";
  asset?: ProductImage;
  assets?: ProductImage[];
}
function ProductDetailField({
  title,
  description,
  value,
  type,
  asset,
  assets,
  className,
}: ProductDetailFieldProps) {
  return (
    <section
      className={cn("py-6 grid grid-cols-12 min-h-56 border-t", className)}
    >
      <div className="col-span-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-slate-500">{description}</p>
      </div>
      <div className="col-span-4 col-start-8 flex justify-end">
        {type === "image" && (
          <div className="w-32 h-32 flex justify-center items-center">
            <img
              className="object-cover rounded-lg"
              src={asset!.url}
              alt={asset!.imageName}
            />
          </div>
        )}
        {type === "images" && (
          <div className="grid grid-cols-3 gap-2">
            {assets?.map((image) => (
              <img src={image.url} alt="" key={image.url} />
            ))}
          </div>
        )}
        {!type && <p>{value}</p>}
      </div>
    </section>
  );
}

function ProductDetail() {
  const [product, setProduct] = useState<ProductProps>();
  const { productId } = useParams();

  const fetchProducts = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/product/${productId}`
    );
    setProduct(response.data);
    return response;
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  if (!product) return <h1>404</h1>;

  return (
    <>
      <div className="flex py-4 justify-end gap-4">
        <Button variant="outline">Edit Product</Button>
        <Button variant="destructive">Delete Product</Button>
      </div>
      <ProductDetailField
        className="border-t-0"
        title="Product ID"
        description="This is a Product ID as seen in the database collection. This is unique to every product, is assigned when product is added to the database and is impossible to change. You can use it to search for products in the database."
        value={product.id}
      />
      <ProductDetailField
        title="Product name"
        description="Product name as it is saved in the database. This will be the field users can search for and that shows up in the Product Detail Page and the Product List Page"
        value={product.name}
      />
      <ProductDetailField
        title="Thumbnail"
        description=""
        type="image"
        asset={product.thumbnail}
      />
      <ProductDetailField
        title="Category"
        description=""
        value={product.category}
      />
      <ProductDetailField
        title="Product description"
        description=""
        value={product.description}
      />
      <ProductDetailField
        type="images"
        title="Product Images"
        description=""
        assets={product.images}
      ></ProductDetailField>
    </>
  );
}

export { ProductDetail };
