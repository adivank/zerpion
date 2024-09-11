import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="pl-20">
        <main>
          <div className="max-w-[1500px] mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}

export { Root };
