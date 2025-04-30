import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/Navbar";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <ExperienceSection />
      <TechStack />
    </>
  );
};

export default App;
