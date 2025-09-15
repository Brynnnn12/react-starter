import React from "react";
import HomeLayout from "../components/layout/HomeLayout";
import Hero from "../components/home/hero";
import About from "../components/home/about";
import Contact from "../components/home/contact";

const Home = () => {
  return (
    <HomeLayout>
      <Hero />
      <About />
      <Contact />
    </HomeLayout>
  );
};

export default Home;
