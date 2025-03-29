
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

const formSchema = z.object({
  offerCode: z.string().min(1, "Please enter your offer code"),
});

const MailOffer = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      offerCode: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Offer code submitted",
      description: "We'll process your offer code and redirect you to your personalized offer.",
    });
  };

  return (
    <Layout>
      <div className="py-16">
        <div className="container-custom max-w-md">
          <div className="bg-white shadow-md rounded-xl p-8">
            <h1 className="text-2xl font-bold text-center mb-6">Enter your mail offer code</h1>
            <p className="text-gray-600 mb-6 text-center">
              If you received a mail offer from us, enter the code below to see your personalized offer.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="offerCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Offer Code</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your offer code" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MailOffer;
