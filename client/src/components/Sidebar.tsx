import React from "react";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxesStacked, faCartShopping, faChartLine, faGear, faHouse, faUsers } from "@fortawesome/free-solid-svg-icons";

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}
const Sidebar = ({className}: SidebarProps) => {
    return (
        <div className={cn("fixed flex flex-col left-0 border-r inset-y-0 w-20", className)}>
            <div className="flex justify-center items-center bg-gray-800 py-4 text-slate-50 rounded-b-sm">Logo</div>
            <div className="flex flex-col gap-4 mt-6">
                <div className="py-4 bg-slate-200 rounded-sm mx-3">
                    <FontAwesomeIcon className="mx-auto block" icon={faHouse} />
                </div>
                <div className="py-4 hover:bg-slate-100 rounded-sm mx-3">
                    <FontAwesomeIcon className="mx-auto block" icon={faCartShopping} />
                </div>
                <div className="py-4 hover:bg-slate-100 rounded-sm mx-3">
                    <FontAwesomeIcon className="mx-auto block" icon={faBoxesStacked} />
                </div>
                <div className="py-4 hover:bg-slate-100 rounded-sm mx-3">
                    <FontAwesomeIcon className="mx-auto block" icon={faUsers} />
                </div>
                <div className="py-4 hover:bg-slate-100 rounded-sm mx-3">
                    <FontAwesomeIcon className="mx-auto block" icon={faChartLine} />
                </div>
            </div>
            <div className="py-4 hover:bg-slate-100 rounded-sm mx-3 mt-auto mb-4">
                <FontAwesomeIcon className="mx-auto block" icon={faGear} />
            </div>
        </div>
    )
}

export default Sidebar;