import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Products } from "./pages/products/products.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/root.tsx";
import { Orders } from "./pages/orders.tsx";
import { Customers } from "./pages/customers.tsx";
import { Analytics } from "./pages/analytics.tsx";
import { ProductDetail } from "./pages/products/product-detail.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetail /> },
      { path: "orders", element: <Orders /> },
      { path: "customers", element: <Customers /> },
      { path: "analytics", element: <Analytics /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
