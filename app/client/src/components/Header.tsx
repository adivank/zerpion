import React from "react";

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
const Header = ({className}: HeaderProps) => {
    return (
        <header className={className}>
            Header
        </header>
    )
}

export default Header;