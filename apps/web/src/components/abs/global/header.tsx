import { cn } from "@/lib/utils";
import {
  Navigation,
  NavigationList,
  NavigationItem,
} from "./navigation/navigation";
import React from "react";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}
function Header({ className }: HeaderProps) {
  return (
    <header className={cn("", className)}>
      <Navigation></Navigation>
    </header>
  );
}

export { Header };
