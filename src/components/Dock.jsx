import { dockApps, locations } from '#constants'
import { Tooltip } from 'react-tooltip';
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import useWindowStore from '#store/window';
import useLocationStore from '#store/location';
import { asset } from '#utils/asset';

const Dock = () => {
    const { windows, openWindow, unminimizeWindow, focusWindow } = useWindowStore();
    const { setActiveLocation } = useLocationStore();
    const dockref = useRef(null);

    useGSAP(() => {
        const dock = dockref.current;
        if (!dock) return;

        const icons = dock.querySelectorAll(".dock-icon");
        
        const animateIcons = (mouseX, mouseY) => {
            const rect = dock.getBoundingClientRect();
            const relX = mouseX - rect.left;
            const relY = mouseY - rect.top;

            // Update dynamic sheen position via CSS variables
            dock.style.setProperty('--dock-mouse-x', `${relX}px`);
            dock.style.setProperty('--dock-mouse-y', `${relY}px`);
            dock.style.setProperty('--dock-sheen-opacity', '1');

            icons.forEach((icon) => {
                const { left: iconLeft, width } = icon.getBoundingClientRect();
                const center = iconLeft - rect.left + width / 2;
                const distance = Math.abs(relX - center);

                // Gaussian bell curve for magnification
                const intensity = Math.exp(-(distance ** 2.2) / 16000);

                gsap.to(icon, {
                    scaleX: 1 + 0.3 * intensity,
                    scaleY: 1 + 0.38 * intensity,
                    y: -18 * intensity,
                    duration: 0.18,
                    ease: "power2.out",
                    overwrite: "auto"
                });
            });
        };

        const handleMouseMove = (e) => {
            animateIcons(e.clientX, e.clientY);
        };

        const resetIcons = () => {
            dock.style.setProperty('--dock-sheen-opacity', '0');
            icons.forEach((icon) => {
                gsap.to(icon, {
                    scaleX: 1,
                    scaleY: 1,
                    y: 0,
                    duration: 0.35,
                    ease: "elastic.out(1.1, 0.4)",
                    overwrite: "auto"
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

    const toggleApp = (app, e) => {
        if (!app.canOpen) return;

        // Bouncy launch animation on icon
        const btn = e?.currentTarget;
        if (btn) {
            gsap.timeline()
                .to(btn, { y: -22, scaleY: 1.15, scaleX: 0.9, duration: 0.18, ease: "power2.out" })
                .to(btn, { y: 0, scaleY: 1, scaleX: 1, duration: 0.45, ease: "elastic.out(1.2, 0.35)" });
        }

        if (app.id === 'trash') {
            setActiveLocation(locations.trash);
            openWindow('finder');
            return;
        }

        if (app.id === 'finder') {
            setActiveLocation(locations.work);
            openWindow('finder');
            return;
        }

        const win = windows[app.id];
        if (!win) {
            openWindow(app.id);
            return;
        }

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
            {dockApps.map(({id, name, icon, canOpen}) => {
                const win = windows[id];
                const isOpen = !!win?.isOpen;
                const isMin = !!win?.isMinimized;

                return (
                <div key={id} className='dock-item relative group'>
                    <button
                        type='button'
                        className='dock-icon'
                        aria-label={name}
                        aria-pressed={isOpen}
                        data-tooltip-id='dock-tooltip'
                        data-tooltip-content={name}
                        data-tooltip-delay-show={120}
                        disabled={!canOpen}
                        onClick={(e) => toggleApp({id, canOpen}, e)}
                    >
                        <img
                            src={asset(`images/${icon}`)}
                            alt={name}
                            loading='lazy'
                            className={`transition-all duration-200 ${canOpen ? "group-hover:brightness-110" : "opacity-50 grayscale"}`}
                        />
                    </button>
                    {canOpen && isOpen && (
                        <span
                          className={`pointer-events-none absolute -bottom-1.5 left-1/2 -translate-x-1/2 ${isMin ? 'liquid-bead-minimized w-1.5 h-1.5 rounded-full' : 'liquid-bead'}`}
                        />
                    )}
                </div>
            )})}
            <Tooltip id='dock-tooltip' place='top' className='tooltip' />    
        </div>
    </section>
  )
}

export default Dock