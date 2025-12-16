import { dockApps } from '#constants'
import { Tooltip } from 'react-tooltip';
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import useWindowStore from '#store/window';

const Dock = () => {
    const { windows, openWindow, unminimizeWindow, focusWindow } = useWindowStore();
    const dockref = useRef(null);

    useGSAP(() => {
        const dock = dockref.current;
        if (!dock) return;

        const icons = dock.querySelectorAll(".dock-icon");
        
        const animateIcons = (mouseX) => {
            const { left } = dock.getBoundingClientRect();

            icons.forEach((icon) => {
                const { left: iconLeft, width } = icon.getBoundingClientRect();
                const center = iconLeft - left + width / 2;
                const distance = Math.abs(mouseX - center);

                const intensity = Math.exp(-(distance ** 2.5) / 20000);

                gsap.to(icon, {
                    scale: 1 + 0.25 * intensity,
                    y: -15 * intensity,
                    duration: 0.2,
                    ease: "power1.out"
                });
            });
        };

        const handleMouseMove = (e) => {
            const { left } = dock.getBoundingClientRect();
            animateIcons(e.clientX - left);
        };

        const resetIcons = () => {
            icons.forEach((icon) => {
                gsap.to(icon, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power1.out",
                });
            });
        };

        dock.addEventListener("mousemove", handleMouseMove);
        dock.addEventListener("mouseleave", resetIcons);

        return () => {
            dock.removeEventListener("mousemove", handleMouseMove);
            dock.removeEventListener("mouseleave", resetIcons);
        };
    }, [])

    
    const toggleApp = (app) => {
        if (!app.canOpen) return;

        const win = windows[app.id];
        if (!win) return;

        if (!win.isOpen) {
            openWindow(app.id);
            return;
        }

        if (win.isMinimized) {
            unminimizeWindow(app.id);
            return;
        }

        // If already open and not minimized, just focus/bring to front
        focusWindow(app.id);
    }


  return (
    <section id='dock'>
        <div ref={dockref} className='dock-container'>
            {dockApps.map(({id,
            name,
            icon,
            canOpen})=>{
                const win = windows[id];
                const isOpen = !!win?.isOpen;
                const isMin = !!win?.isMinimized;

                return (
                <div key={id} className='dock-item relative'>
                    <button
                    type='button'
                    className='dock-icon'
                    aria-label={name}
                    aria-pressed={isOpen}
                    data-tooltip-id='dock-tooltip'
                    data-tooltip-content={name}
                    data-tooltip-delay-show={150}
                    disabled={!canOpen}
                    onClick={()=>toggleApp({id,canOpen})}>
                        <img
                            src={`/images/${icon}`}
                            alt={name}
                            loading='lazy'
                            className={canOpen ? "" : "opacity-60"}
                        />
                    </button>
                    {canOpen && isOpen && (
                        <span
                          className={`pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${isMin ? 'bg-gray-400/80' : 'bg-blue-500/80'}`}
                        />
                    )}
                </div>
            )})}
        <Tooltip id='dock-tooltip' place='top' className='tooltip'/>    
        </div>
    </section>
  )
}

export default Dock