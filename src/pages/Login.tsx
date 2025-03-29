
import React from "react";
import Layout from "../components/Layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { useToast } from "@/hooks/use-toast";
import { LockIcon } from "lucide-react";
import { Link } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Login attempt",
      description: "This is a demo. No actual login functionality is implemented.",
    });
  };

  return (
    <Layout>
      <div className="py-16">
        <div className="container-custom max-w-md">
          <div className="bg-white shadow-md rounded-xl p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center bg-teal-100 w-12 h-12 rounded-full mb-4">
                <LockIcon className="h-6 w-6 text-teal-600" />
              </div>
              <h1 className="text-2xl font-bold">Log in to your account</h1>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
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
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="text-right">
                  <a href="#" className="text-sm text-teal-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
                
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                  Log in
                </Button>
              </form>
            </Form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/check-rate" className="text-teal-600 hover:underline">
                  Check your rate
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
