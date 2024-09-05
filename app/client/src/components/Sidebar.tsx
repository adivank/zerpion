import React from "react";

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}
const Sidebar = ({className}: SidebarProps) => {
    return (
        <div className={className}>
            Sidebar
        </div>
    )
}

export default Sidebar;