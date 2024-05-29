import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contacts';
import Footer from './components/Footer';
import Skills from './components/Skills';




function App() {
  return (
    <div className="App">
      <Header />
     
      <About />
      <Projects />
      <Contact />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
