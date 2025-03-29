
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/for-lenders" element={<Index />} />
          <Route path="/for-dealers" element={<Index />} />
          <Route path="/login" element={<Index />} />
          <Route path="/check-rate" element={<Index />} />
          <Route path="/personal-loans" element={<Index />} />
          <Route path="/car-loan-refinance" element={<Index />} />
          <Route path="/short-term-relief" element={<Index />} />
          <Route path="/heloc" element={<Index />} />
          <Route path="/mail-offer" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
