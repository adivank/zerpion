import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/lib/utils";
import {
  faBoxesStacked,
  faCartShopping,
  faChartLine,
  faGear,
  faHouse,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip";

const navigation = {
  className: "py-4 hover:bg-slate-100 rounded-sm mx-3",
  activeClass: "bg-slate-200 py-4 rounded-sm mx-3",
  paths: [
    { path: "/", icon: faHouse, name: "Homepage" },
    { path: "products", icon: faCartShopping, name: "Products" },
    { path: "orders", icon: faBoxesStacked, name: "Orders" },
    { path: "customers", icon: faUsers, name: "Customers" },
    { path: "analytics", icon: faChartLine, name: "Analytics" },
  ],
};

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}
const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div
      className={cn(
        "fixed flex flex-col left-0 border-r inset-y-0 w-20",
        className
      )}
    >
      <div className="flex justify-center items-center bg-gray-800 py-4 text-slate-50 rounded-b-sm">
        Logo
      </div>
      <div className="flex flex-col gap-4 mt-6">
        {navigation.paths.map((navItem) => (
          <NavLink
            to={navItem.path}
            className={({ isActive }) =>
              isActive
                ? "bg-slate-200 rounded-sm mx-3 flex justify-center"
                : "hover:bg-slate-100 rounded-sm mx-3 flex justify-center"
            }
          >
            <TooltipProvider delayDuration={100} key={navItem.path}>
              <Tooltip>
                <TooltipTrigger>
                  <FontAwesomeIcon
                    className="mx-auto block p-4"
                    icon={navItem.icon}
                  />
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{navItem.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </NavLink>
        ))}
        {/* <NavLink to={"/"} className={}>
          <FontAwesomeIcon className="mx-auto block" icon={faHouse} />
        </NavLink>
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            isActive
              ? "py-4 bg-slate-200 rounded-sm mx-3"
              : "py-4 hover:bg-slate-100 rounded-sm mx-3"
          }
        >
          <FontAwesomeIcon className="mx-auto block" icon={faCartShopping} />
        </NavLink>
        <div className="py-4 hover:bg-slate-100 rounded-sm mx-3">
          <FontAwesomeIcon className="mx-auto block" icon={faBoxesStacked} />
        </div>
        <div className="py-4 hover:bg-slate-100 rounded-sm mx-3">
          <FontAwesomeIcon className="mx-auto block" icon={faUsers} />
        </div>
        <div className="py-4 hover:bg-slate-100 rounded-sm mx-3">
          <FontAwesomeIcon className="mx-auto block" icon={faChartLine} />
        </div> */}
      </div>
      <div className="py-4 hover:bg-slate-100 rounded-sm mx-3 group mt-auto mb-4">
        <FontAwesomeIcon
          className="mx-auto block group-hover:rotate-90 duration-300"
          icon={faGear}
        />
      </div>
    </div>
  );
};

export default Sidebar;
