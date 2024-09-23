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
import { LoginRegister } from "./pages/login-register.tsx";
// import { checkLoggedIn } from "./utils/check-loggedin.ts";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginRegister />,
    index: true,
  },
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
  // {
  //   path: "*",
  //   element: checkLoggedIn() ? <p>Not Found</p> : <LoginRegister />,
  // },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
