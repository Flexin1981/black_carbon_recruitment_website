import React from 'react';
import './App.css';
import {Navbar} from "./components/navigation/navbar";
import {HeroSection} from "./components/hero_section/hero_section";

function App() {
  return (
    <div className={'vignette-radial'}>
      <Navbar/>
        <HeroSection/>
    </div>
  );
}

export default App;
