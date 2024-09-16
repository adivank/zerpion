import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";

function Root() {
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
