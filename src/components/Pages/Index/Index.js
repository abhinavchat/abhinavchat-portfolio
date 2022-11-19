import React from "react";
import About from "../../About/About";
import Projects from "../../Projects/Projects";
import Skills from "../../Skills/Skills";

import Contact from "../../Contact/Contact";
import YouTube from "../../YouTube/YouTube";

const Index = (props) => {
  return (
    <React.Fragment>
      <main>
        <About />
        <Projects />
        <Skills />
        <YouTube />
        <Contact />
      </main>

      
      
    </React.Fragment>
  );
};

export default Index;
