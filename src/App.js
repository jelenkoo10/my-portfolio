import React from "react";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <AboutMe />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
