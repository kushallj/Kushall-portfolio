import { locations } from '#constants'
import useLocationStore from '#store/location';
import useWindowStore from '#store/window';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import { Draggable } from 'gsap/Draggable';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { asset } from '#utils/asset';

const projects = locations.work?.children ?? [];

const Home = () => {
    const { openWindow } = useWindowStore();
    const { setActiveLocation } = useLocationStore();
    const containerRef = useRef(null);

    const handleOpenProjectFinder = (project, e) => {
        const item = e.currentTarget.closest('.folder');
        if (item) {
            // Viscous squish-and-pop on click
            gsap.timeline()
                .to(item, { scaleX: 0.9, scaleY: 0.9, duration: 0.12, ease: "power2.in" })
                .to(item, { scaleX: 1, scaleY: 1, duration: 0.4, ease: "elastic.out(1.2, 0.4)" });
        }
        setActiveLocation(project);
        openWindow("finder");
    };

    useGSAP(() => {
        const container = containerRef.current;
        if (!container) return;

        gsap.registerPlugin(Draggable);
        const folderElements = container.querySelectorAll(".folder");

        // Interactive 3D tilt on mousemove
        const cleanupTiltListeners = [];

        folderElements.forEach((folder) => {
            const handleMouseMove = (e) => {
                const rect = folder.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                const rotateY = (x / (rect.width / 2)) * 14;
                const rotateX = -(y / (rect.height / 2)) * 14;

                gsap.to(folder, {
                    rotateX,
                    rotateY,
                    scale: 1.06,
                    duration: 0.2,
                    ease: "power1.out",
                    overwrite: "auto"
                });
            };

            const handleMouseLeave = () => {
                gsap.to(folder, {
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    duration: 0.45,
                    ease: "elastic.out(1.1, 0.4)",
                    overwrite: "auto"
                });
            };

            folder.addEventListener("mousemove", handleMouseMove);
            folder.addEventListener("mouseleave", handleMouseLeave);

            cleanupTiltListeners.push(() => {
                folder.removeEventListener("mousemove", handleMouseMove);
                folder.removeEventListener("mouseleave", handleMouseLeave);
            });
        });

        const draggables = Draggable.create("#home .folder", {
            bounds: "body",
            edgeResistance: 0.7,
            inertia: true
        });

        return () => {
            cleanupTiltListeners.forEach((cleanup) => cleanup());
            draggables.forEach((d) => d.kill());
        };
    }, []);

  return (
    <section id="home" ref={containerRef}>
        <ul>
            {projects.map((project) => (
                <li key={project.id} className={clsx("group folder liquid-folder-card", project.windowPosition)}>
                    <img 
                        src={asset('images/folder.png')} 
                        alt={project.name} 
                        onClick={(e) => handleOpenProjectFinder(project, e)}
                        className="cursor-pointer"
                    />
                    <p onClick={(e) => handleOpenProjectFinder(project, e)} className="cursor-pointer select-none">
                        {project.name}
                    </p>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Home