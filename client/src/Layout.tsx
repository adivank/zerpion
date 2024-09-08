import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {}
const Layout = ({children}: LayoutProps) => {
    return (<>
        <Sidebar></Sidebar>
        <div className="pl-20">
            <Header></Header>
            <main>
                {children}
            </main>
        </div>
    </>)
};

export default Layout;