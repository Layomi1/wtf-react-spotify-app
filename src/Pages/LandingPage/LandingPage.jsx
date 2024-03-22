import React from "react";
import Header from "../../components/Header/Header";
import Options from "../../components/Options/Options";
import Hero from "../../components/Hero/Hero";
import PremiumOptions from "../../components/PremiumOptions/PremiumOptions";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <PremiumOptions />
      <Options />
    </div>
  );
};

export default LandingPage;
