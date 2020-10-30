import React from "react";
import { BrowserRouter} from "react-router-dom";
import Intro from "./components/Intro";
import Details from "./components/Details/Details";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Intro />
      <Details />
      <Projects />
      <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
