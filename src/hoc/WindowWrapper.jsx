import useWindowStore from '#store/window'
import { useGSAP } from '@gsap/react';
import React, { useRef, memo, useCallback, useEffect } from 'react'
import { Draggable } from 'gsap/Draggable';
import gsap from 'gsap';

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = memo((props) => {
    const { focusWindow, windows } = useWindowStore();
    const win = windows[windowKey] || { isOpen: false, isMinimized: false, zIndex: 1000 };
    const { isOpen, isMinimized, zIndex } = win;
    const ref = useRef(null);
    const hasAnimatedRef = useRef(false);

    const handleClick = useCallback((e) => {
      e?.stopPropagation?.();
      focusWindow(windowKey);
    }, [focusWindow]);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen || isMinimized) return;

      gsap.registerPlugin(Draggable);

      const dragHandle = el.querySelector('.window-header') || el.querySelector('[data-drag-handle]') || el;

      const handleHeaderMouseMove = (e) => {
        const rect = dragHandle.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        dragHandle.style.setProperty('--header-glint-x', `${relX}px`);
        dragHandle.style.setProperty('--header-glint-y', `${relY}px`);
        dragHandle.style.setProperty('--header-glint-opacity', '1');
      };

      const handleHeaderMouseLeave = () => {
        dragHandle.style.setProperty('--header-glint-opacity', '0');
      };

      dragHandle.addEventListener('mousemove', handleHeaderMouseMove);
      dragHandle.addEventListener('mouseleave', handleHeaderMouseLeave);

      const draggableInstance = Draggable.create(el, {
        type: "x,y",
        bounds: "body",
        trigger: dragHandle,
        cursor: "grab",
        activeCursor: "grabbing",
        inertia: true,
        edgeResistance: 0.75,
        onPress: function () {
          focusWindow(windowKey);
          gsap.to(el, { 
            scale: 1.015, 
            duration: 0.15,
            ease: "power2.out"
          });
        },
        onDrag: function () {
          const tiltY = Math.max(-8, Math.min(8, this.deltaX * 0.35));
          const tiltX = Math.max(-8, Math.min(8, -this.deltaY * 0.35));
          const skew = Math.max(-2, Math.min(2, this.deltaX * 0.08));

          gsap.to(el, {
            rotateY: tiltY,
            rotateX: tiltX,
            skewX: skew,
            duration: 0.1,
            ease: "power1.out",
            overwrite: "auto"
          });
        },
        onDragEnd: function () {
          gsap.to(el, { 
            rotateX: 0, 
            rotateY: 0, 
            skewX: 0, 
            scale: 1, 
            duration: 0.5, 
            ease: "elastic.out(1.15, 0.45)" 
          });
        }
      });

      return () => {
        dragHandle.removeEventListener('mousemove', handleHeaderMouseMove);
        dragHandle.removeEventListener('mouseleave', handleHeaderMouseLeave);
        if (draggableInstance && draggableInstance[0]) {
          draggableInstance[0].kill();
        }
      };
    }, [isOpen, isMinimized, windowKey]);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      if (isOpen && !isMinimized) {
        // Set initial position if not already set
        if (!el.style.left && !el.style.top) {
          const offset = ((zIndex - 1000) % 8) * 30;
          const isMobile = window.innerWidth < 640;
          if (isMobile) {
            const rect = el.getBoundingClientRect();
            el.style.left = `${Math.max(10, (window.innerWidth - rect.width) / 2)}px`;
            el.style.top = `${Math.max(50, (window.innerHeight - rect.height) / 2)}px`;
          } else {
            el.style.left = `${100 + offset}px`;
            el.style.top = `${60 + offset}px`;
          }
        }

        // Only play entrance animation once when opening
        if (!hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          gsap.fromTo(el, 
            { scale: 0.94, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.28, ease: "back.out(1.4)" }
          );
        }
      } else {
        hasAnimatedRef.current = false;
      }
    }, [isOpen, isMinimized]);

    if (!isOpen || isMinimized) return null;

    return (
      <section 
        id={windowKey} 
        ref={ref} 
        style={{ zIndex }} 
        className='absolute liquid-glass-shell'
        onMouseDown={handleClick}
        onClick={handleClick}
      >
        <Component {...props} />
      </section>
    );
  });

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
};

export default WindowWrapper;