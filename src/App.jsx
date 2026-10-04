import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CustomCursor from "./components/animation/CustomCursor";
import ScrollProgress from "./components/animation/ScrollProgress";
import Hero from "./components/sections/Hero";
import Intro from "./components/sections/Intro";
import Experience from "./components/sections/Experience";
import Academics from "./components/sections/Academics";
import Life from "./components/sections/Life";
import Stats from "./components/sections/Stats";
import Voices from "./components/sections/Voices";
import CTA from "./components/sections/CTA";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar dark={dark} onThemeToggle={() => setDark((value) => !value)} />
      <main>
        <Hero />
        <Intro />
        <Experience />
        <Academics />
        <Life />
        <Stats />
        <Voices />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
