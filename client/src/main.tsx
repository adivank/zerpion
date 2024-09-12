import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Products } from "./pages/products.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/root";
import { Orders } from "./pages/orders.tsx";
import { Customers } from "./pages/customers.tsx";
import { Analytics } from "./pages/analytics.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "products", element: <Products /> },
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
