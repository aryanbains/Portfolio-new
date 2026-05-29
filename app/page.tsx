"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedWork from "@/components/FeaturedWork";
import Experiments from "@/components/Experiments";
import Skills from "@/components/Skills";
import OpenTo from "@/components/OpenTo";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Hero />
      <About />
      <FeaturedWork />
      <Experiments />
      <Skills />
      <OpenTo />
      <Contact />
    </motion.main>
  );
}
