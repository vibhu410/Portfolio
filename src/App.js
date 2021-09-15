import react from "react";
import './App.css';
import {Route} from "react-router-dom"
import Home from "./components"

import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

import Project from './components/Project/Projects'
function App() {
  return (
    <>
        <Route exact path="/portfolio" component={Home} />
        
        <Route path="/skills" component={Skills} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
       
        <Route path="/project" component={Project} />
    </>
  );
}

export default App;
