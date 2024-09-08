import React from "react";
import { cn } from "@/lib/utils";

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
const Header = ({className}: HeaderProps) => {
    return (
        <header className={cn("", className)}>
            Header
        </header>
    )
}

export default Header;