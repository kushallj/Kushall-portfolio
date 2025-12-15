import useWindowStore from '#store/window'
import { useGSAP } from '@gsap/react';
import React, { useRef, memo, useCallback, useLayoutEffect } from 'react'
import { Draggable } from 'gsap/Draggable';
import gsap from 'gsap';

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = memo((props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef(null);


    const handleClick = useCallback(() => {
      focusWindow(windowKey);
    }, [focusWindow, windowKey]);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      // Register the Draggable plugin
      gsap.registerPlugin(Draggable);

      // Find drag handle (header element)
      const dragHandle = el.querySelector('.window-header') || el.querySelector('[data-drag-handle]') || el;

      // Create draggable instance
      const draggableInstance = Draggable.create(el, {
        type: "x,y",
        bounds: "body", // Keep window within viewport
        trigger: dragHandle, // Only drag from header
        cursor: "grab",
        activeCursor: "grabbing",
        inertia: true, // Add smooth momentum
        edgeResistance: 0.65, // Resistance when hitting bounds
        onPress: () => {
          focusWindow(windowKey);
          // Add slight scale effect on press
          gsap.to(el, { scale: 1.02, duration: 0.1 });
        },
        onDrag: function() {
          // Optional: Add shadow effect while dragging
          el.style.filter = 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))';
        },
        onDragEnd: function() {
          // Reset effects
          gsap.to(el, { scale: 1, duration: 0.2 });
          el.style.filter = 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))';
        }
      });

      // Cleanup function
      return () => {
        if (draggableInstance && draggableInstance[0]) {
          draggableInstance[0].kill();
        }
      };
    }, [isOpen, focusWindow, windowKey])

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      
      if (isOpen) {
        el.style.display = "block";
        
        // Set initial position if not already positioned
        if (!el.style.left && !el.style.top) {
          const offset = (zIndex - 1000) * 30; // Cascade windows
          el.style.left = `${100 + offset}px`;
          el.style.top = `${100 + offset}px`;
        }
      } else {
        el.style.display = "none";
      }
    }, [isOpen, zIndex])

    if (!isOpen) return null;

    return (
      <section 
        id={windowKey} 
        ref={ref} 
        style={{ zIndex }} 
        className='absolute'
        onClick={handleClick}
      >
        <Component {...props} />
      </section>
    );
  });

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped
}

export default WindowWrapper