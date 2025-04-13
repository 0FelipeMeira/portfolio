"use client";

import Divider from "./_components/Divider";
import About from "./_layouts/About";
import Connect from "./_layouts/Connect";
import Header from "./_layouts/Header";
import { Hero } from "./_layouts/Hero";
import Projects from "./_layouts/Projects";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Divider />
      <Projects />
      <Divider />
      <About />
      <Divider />
      <Connect />
    </>
  );
};

export default Home;
