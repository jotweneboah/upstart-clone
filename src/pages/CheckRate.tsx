
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  loanPurpose: z.string({
    required_error: "Please select a loan purpose.",
  }),
  loanAmount: z.string().min(1, "Please enter a loan amount"),
  loanTerm: z.string().min(1, "Please select a loan term"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  education: z.string({
    required_error: "Please select your education level",
  }),
  self_employed: z.string({
    required_error: "Please select your employment status",
  }),
  income_annum: z.string().min(1, "Please enter your annual income"),
  no_of_dependents: z.string().min(1, "Please enter number of dependents"),
  cibil_score: z.string().min(1, "Please enter your CIBIL score"),
  residential_assets_value: z.string().min(1, "Please enter residential assets value"),
  commercial_assets_value: z.string().min(1, "Please enter commercial assets value"),
  luxury_assets_value: z.string().min(1, "Please enter luxury assets value"),
  bank_asset_value: z.string().min(1, "Please enter bank asset value"),
});

const CheckRate = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      loanPurpose: "",
      loanAmount: "",
      loanTerm: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      education: "",
      self_employed: "",
      income_annum: "",
      no_of_dependents: "",
      cibil_score: "",
      residential_assets_value: "",
      commercial_assets_value: "",
      luxury_assets_value: "",
      bank_asset_value: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Rate check submitted!",
      description: "We'll process your information and get back to you shortly.",
    });
  };

  return (
    <Layout>
      <div className="py-8 md:py-16">
        <div className="container-custom max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Check your loan rate</h1>
          <div className="bg-white shadow-md rounded-xl p-6">
            <p className="text-center mb-6 text-gray-600">
              Checking your rate won't affect your credit score¹
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="loanPurpose"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Loan Purpose</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select loan purpose" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="debt_consolidation">Debt consolidation</SelectItem>
                          <SelectItem value="credit_card">Pay off credit cards</SelectItem>
                          <SelectItem value="home_improvement">Home improvement</SelectItem>
                          <SelectItem value="major_purchase">Major purchase</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="loanAmount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loan Amount ($)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter amount" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="loanTerm"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loan Term (months)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select term" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="12">12 months</SelectItem>
                            <SelectItem value="24">24 months</SelectItem>
                            <SelectItem value="36">36 months</SelectItem>
                            <SelectItem value="48">48 months</SelectItem>
                            <SelectItem value="60">60 months</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="First name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(123) 456-7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="education"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Education Level</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select education level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="high_school">High School</SelectItem>
                            <SelectItem value="undergraduate">Undergraduate</SelectItem>
                            <SelectItem value="graduate">Graduate</SelectItem>
                            <SelectItem value="post_graduate">Post Graduate</SelectItem>
                            <SelectItem value="doctorate">Doctorate</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="self_employed"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employment Status</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="yes">Self-employed</SelectItem>
                            <SelectItem value="no">Employed</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="income_annum"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Annual Income ($)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter annual income" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="no_of_dependents"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Dependents</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="cibil_score"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CIBIL Score</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter CIBIL score" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="border-t pt-4 mt-4">
                  <h3 className="text-lg font-semibold mb-4">Asset Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="residential_assets_value"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Residential Assets Value ($)</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter value" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="commercial_assets_value"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Commercial Assets Value ($)</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter value" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <FormField
                      control={form.control}
                      name="luxury_assets_value"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Luxury Assets Value ($)</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter value" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="bank_asset_value"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bank Assets Value ($)</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter value" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                  Check Your Rate
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  By clicking "Check Your Rate", you consent to allow Upstart to request your credit information.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckRate;
