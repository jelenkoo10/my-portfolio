import React from "react";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <main>
      <Header />
      <AboutMe />
      <Projects />
      <Technologies />
      <Contact />
    </main>
  );
}

export default App;
