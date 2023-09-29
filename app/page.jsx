import React from "react";

import Link from "next/link";
import Image from "next/image";
import Hero from "@components/hero";
import About from "./about/page";
import Skill from "./skill/page";
import Project from "./project/page";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Project />
    </div>
  );
};

export default Home;
