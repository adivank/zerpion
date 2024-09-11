import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Products } from "./pages/products.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "products", element: <Products /> }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
