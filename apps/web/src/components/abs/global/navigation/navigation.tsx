import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface NavigationProps extends React.HTMLAttributes<HTMLDivElement> {}
function Navigation({ className }: NavigationProps) {
  return (
    <div>
      <NavigationList></NavigationList>
    </div>
  );
}

export interface NavigationListProps
  extends React.HTMLAttributes<HTMLUListElement> {}
function NavigationList({ className }: NavigationListProps) {
  return (
    <ul className="flex gap-4">
      {Array.from(Array(4)).map((item) => (
        <NavigationItem href="#">hey</NavigationItem>
      ))}
    </ul>
  );
}

export interface NavigationItemProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}
function NavigationItem({ className, href, children }: NavigationItemProps) {
  return (
    <Link className={cn("bg-teal-100 py-3 px-6", className)} href={href}>
      {children}
    </Link>
  );
}

export { Navigation, NavigationList, NavigationItem };
