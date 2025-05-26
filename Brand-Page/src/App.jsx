import { useState } from "react";
import "./App.css";
import Navigation from "./components/navigation.jsx";
import HeroSection from "./components/hero.jsx";

const App = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
    </div>
  );
};

export default App;
