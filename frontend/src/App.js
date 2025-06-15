
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';  
import ScrollUp from './components/scrollup/ScrollUp';
import Work from './components/work/Work';
import CodingProfiles from './components/codingProfiles/CodingProfiles';
function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Qualification/>
        <CodingProfiles/>
        <Work/>
        <Contact/>
      
      </main>
        <Footer/>
        <ScrollUp/>
    </>
  );
}

export default App;
