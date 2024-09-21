import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});

function LoginRegister() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/auth/login`,
      data: values,
    })
      .then((res) =>
        localStorage.setItem("access_token", res.data.access_token)
      )
      .then(() => navigate("/"))
      .catch((e) => console.log(e));
  };

  return (
    <main>
      <div className="grid grid-cols-2 min-h-screen">
        <div className="w-full h-full bg-slate-800"></div>
        <div className="flex justify-center items-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john.doe@domain.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="*******" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="mt-3">
                Login
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}

export { LoginRegister };
