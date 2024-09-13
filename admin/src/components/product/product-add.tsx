import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { DialogDescription } from "@radix-ui/react-dialog";
import React, { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { ProductProps } from "./product-list";

const formSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.string(),
  category: z.string(),
  thumbnail: z.instanceof(File).refine((file) => file.size < 10000000, {
    message: "File size must be below 10MB",
  }),
  images: z.array(z.instanceof(File).refine((file) => file.size < 10000000)),
});

export interface AddProductProps extends React.HTMLAttributes<HTMLDivElement> {
  products: ProductProps[];
  setProducts: Dispatch<SetStateAction<ProductProps[]>>;
}
function AddProduct({ setProducts, products }: AddProductProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      category: "",
      thumbnail: undefined,
      images: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData(document.querySelector("form")!);
    await axios({
      method: "post",
      url: "http://localhost:3001/product",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        setProducts([...products, res.data]);
        setOpen(false);
        return toast({
          title: "Product added",
          description: `Product ${res.data.name} has been added to the database.`,
        });
      })
      .catch((e) => {
        console.error(e);
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with the server",
        });
      });
  }

  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add New Product</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a product</DialogTitle>
          <DialogDescription>Adds a product to the database</DialogDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} id="add_product">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Sunglasses" {...field}></Input>
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Product description..."
                        {...field}
                      ></Textarea>
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input placeholder="Category" {...field}></Input>
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input {...field} type="number"></Input>
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="thumbnail"
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel>Thumbnail</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Browse thumbnail"
                        {...fieldProps}
                        type="file"
                        onChange={(event) =>
                          onChange(event.target.files && event.target.files[0])
                        }
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="images"
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel>Images</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Browse images..."
                        {...fieldProps}
                        multiple
                        type="file"
                        onChange={(event) =>
                          onChange([...Array.from(event.target.files ?? [])])
                        }
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
            </form>
          </Form>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" form="add_product">
            Confirm
          </Button>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export { AddProduct };
