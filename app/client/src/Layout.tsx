import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {}
const Layout = ({children}: LayoutProps) => {
    return (<>
        <Header></Header>
        <Sidebar></Sidebar>
        <main>
            {children}
        </main>
    </>)
};

export default Layout;