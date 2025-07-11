import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWidget from "./components/FloatingWidget";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <Products />
      <Contact />
      <Footer />
      <FloatingWidget />
    </>
  );
};

export default App;
