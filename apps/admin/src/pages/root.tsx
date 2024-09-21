import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { Navigate, Outlet } from "react-router-dom";

export interface RootProps {
  isAuthenticated: boolean;
}
function Root({ isAuthenticated }: RootProps) {
  if (!localStorage.getItem("access_token"))
    return <Navigate to="/login" replace />;

  return (
    <>
      <Sidebar></Sidebar>
      <div className="pl-20">
        <main className="max-w-[1500px] mx-auto">
          <Outlet />
          <Toaster></Toaster>
        </main>
      </div>
    </>
  );
}

export { Root };
