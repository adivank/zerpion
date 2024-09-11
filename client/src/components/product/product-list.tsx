"use client";
import { MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { cn } from "@/lib/utils";

export interface ProductListProps extends React.HTMLAttributes<HTMLDivElement> {
  productCount: number;
  products: {
    sku: string;
    name: string;
    description: string;
    price: string;
    isOnSale: boolean;
    width: number;
    length: number;
    createdAt: string;
    updatedAt: string;
    images: {
      url: string;
    }[];
  }[];
}
export default function ProductList({
  className,
  products,
  productCount,
}: ProductListProps) {
  const createDateString = (dateStr: string) => {
    const newDate = new Date(dateStr);

    return `${newDate.getHours()}:${newDate.getMinutes()} / ${newDate.getDate()}.${
      newDate.getMonth() + 1
    }`;
  };
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Products</CardTitle>
        <CardDescription>
          Manage your products and view their sales performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="hidden md:table-cell">Price</TableHead>
              <TableHead className="hidden md:table-cell">Created at</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products &&
              products.map((product) => (
                <TableRow key={product.sku}>
                  <TableCell className="hidden sm:table-cell">
                    <img
                      src={product.images[0].url}
                      alt="Product image"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      width="64"
                    />
                  </TableCell>
                  <TableCell>{product.sku}</TableCell>
                  <TableCell className="font-semibold">
                    {product.name}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">Active</Badge>
                  </TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {product.price}€
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {createDateString(product.createdAt)}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>{productCount}</strong>{" "}
          products
        </div>
      </CardFooter>
    </Card>
  );
}
