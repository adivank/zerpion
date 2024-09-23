import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { checkLoggedIn } from "@/utils/check-loggedin";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function Root() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    checkLoggedIn();

    setLoggedIn(true);
  }, []);

  if (loggedIn)
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
