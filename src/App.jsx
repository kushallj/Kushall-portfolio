import { Navbar,Welcome,Dock } from '#components'
import MobileView from '#components/MobileView'
import MobileDock from '#components/MobileDock'
import { Terminal, Safari, Resume, Finder, Text, Image, Contact, Portfolio } from '#windows';
import gsap from "gsap";
import { Draggable } from 'gsap/Draggable'
import React, { useState, useEffect } from 'react'
import Home from '#components/Home';

gsap.registerPlugin(Draggable);

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main>
      <Navbar/>
      {!isMobile && <Welcome/>}
      <Dock/>
      <MobileDock/>

      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Text/>
      <Image/>
      <Contact/>
      <Portfolio/>
      <Home/>
      {isMobile && <MobileView />}
    </main>
  )
}

export default App