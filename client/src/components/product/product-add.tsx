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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useState } from "react";

const formSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.string(),
  isOnSale: z.boolean(),
  sku: z.string(),
  length: z.number(),
  weight: z.number(),
});

function AddProduct() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      isOnSale: false,
      sku: "",
      length: 0,
      weight: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      await fetch("http://localhost:3001/product", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setOpen(false);
        });
    } catch (e) {
      console.error(e);
    }
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
                name="sku"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SKU</FormLabel>
                    <FormControl>
                      <Input placeholder="A23FE45A" {...field}></Input>
                    </FormControl>
                    <FormDescription>
                      This is the ID of a product
                    </FormDescription>
                  </FormItem>
                )}
              ></FormField>
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
