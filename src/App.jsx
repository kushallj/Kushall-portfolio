import { Navbar, Welcome, Dock } from '#components'
import MobileView from '#components/MobileView'
import MobileDock from '#components/MobileDock'
import { Terminal, Safari, Resume, Finder, Text, Image, Contact, Portfolio } from '#windows';
import React, { useState, useEffect, memo } from 'react'
import Home from '#components/Home';

// Lazy load GSAP only on desktop
let Draggable;

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Load GSAP only on desktop
    if (!isMobile) {
      import('gsap').then((gsapModule) => {
        import('gsap/Draggable').then((draggableModule) => {
          const gsap = gsapModule.default;
          Draggable = draggableModule.default;
          gsap.registerPlugin(Draggable);
        });
      });
    }
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  return (
    <main className="min-h-screen">
      {!isMobile && <Navbar />}
      {!isMobile && <Welcome />}
      <Dock />
      <MobileDock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Portfolio />
      <Home />
      {isMobile && <MobileView />}
    </main>
  )
}

export default memo(App);