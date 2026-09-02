import dayjs from 'dayjs'
import { navIcons, navLinks, locations } from '#constants'
import React, { useState, useEffect } from 'react'
import useWindowStore from '#store/window'
import useLocationStore from '#store/location'

const Navbar = () => {
  const { openWindow } = useWindowStore();  
  const { setActiveLocation } = useLocationStore();
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNavClick = (type) => {
    if (type === 'finder') {
      setActiveLocation(locations.work);
    }
    openWindow(type);
  };

  const handleIconClick = (id) => {
    if (id === 1) {
      // WiFi -> Safari
      openWindow('safari');
    } else if (id === 2) {
      // Search -> Finder
      setActiveLocation(locations.work);
      openWindow('finder');
    } else if (id === 3) {
      // User -> Contact
      openWindow('contact');
    } else if (id === 4) {
      // Terminal -> Skills
      openWindow('terminal');
    }
  };

  const handleLogoClick = () => {
    setActiveLocation(locations.about);
    openWindow('finder');
  };

  return (
   <nav className="relative z-[9999] flex justify-between items-center bg-white/40 backdrop-blur-2xl px-5 py-2 select-none border-b border-white/40 shadow-sm">
    <div className="flex items-center gap-4">
        <button 
          onClick={handleLogoClick}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer group"
          title="About Kushall"
        >
          <img src='/images/logo.svg' alt='logo' className="w-4 h-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform"/>
          <span className='font-semibold text-sm text-gray-900 tracking-tight'>Kushall's Portfolio</span>
        </button>
        <ul className="flex items-center gap-1 max-sm:hidden">
            {
                navLinks.map(({id, name, type}) => (
                    <li 
                      key={id} 
                      onClick={() => handleNavClick(type)}
                      className="text-sm text-gray-800 font-medium px-2.5 py-1 rounded-md cursor-pointer transition-all duration-150 hover:bg-white/50 hover:text-black hover:shadow-xs active:scale-95"
                    >
                      {name}
                    </li>
                ))
            }
        </ul>
    </div>
    <div className="flex items-center gap-3">
        <ul className="flex items-center gap-1">
            {navIcons.map(({id, img}) => (
                <li 
                  key={id} 
                  onClick={() => handleIconClick(id)}
                  className="p-1.5 rounded-md hover:bg-white/50 cursor-pointer transition-colors"
                >
                    <img src={img} className='w-4 h-4 opacity-80 hover:opacity-100 transition-opacity' alt={`icon-${id}`}/>
                </li>
            ))}
        </ul>
        <time className="tabular-nums text-xs font-semibold text-gray-800 bg-white/30 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/30">
            {currentTime.format("ddd MMM D  h:mm A")}
        </time>
    </div>
   </nav>
  )
}

export default Navbar