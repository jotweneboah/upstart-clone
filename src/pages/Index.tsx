
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import LoanTypes from "../components/LoanTypes";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <LoanTypes />
      </main>
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        <div className="container-custom">
          <p>
            * Rates and terms depend on credit score and other factors.
            <br />† While next day funding is available for most loans, timing may vary.
            <br />¹ Checking your rate generates a soft credit inquiry, which doesn't affect your credit score.
          </p>
          <p className="mt-4">
            © {new Date().getFullYear()} Upstart. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
