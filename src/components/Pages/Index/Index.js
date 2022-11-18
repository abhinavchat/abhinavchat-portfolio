import React from "react";
import About from "../../About/About";
import Projects from "../../Projects/Projects";
import Skills from "../../Skills/Skills";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import Contact from "../../Contact/Contact";

const Index = (props) => {
  return (
    <React.Fragment>
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      
    </React.Fragment>
  );
};

export default Index;
