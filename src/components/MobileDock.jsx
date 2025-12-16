import React from 'react';
import { dockApps } from '#constants';
import useWindowStore from '#store/window';

const MobileDock = () => {
  const { windows, openWindow, closeWindow, unminimizeWindow, focusWindow } = useWindowStore();

  const toggleApp = (app) => {
    if (!app.canOpen) return;

    const win = windows[app.id];

    // If the window entry doesn't exist, open it and return early
    if (!win) {
      openWindow(app.id);
      return;
    }

    // If not open yet, open it
    if (!win.isOpen) {
      openWindow(app.id);
      return;
    }

    // If minimized, restore/unminimize then focus it
    if (win.isMinimized) {
      unminimizeWindow(app.id);
      focusWindow(app.id);
      return;
    }

    // Determine if this window is currently focused (front-most)
    const topZ = Math.max(
      ...Object.values(windows).map((w) => (w?.zIndex ?? 0))
    );
    const isFocused = win.zIndex === topZ;

    // If already focused, close it; otherwise, bring it to front
    if (isFocused) {
      closeWindow(app.id);
    } else {
      focusWindow(app.id);
    }
  };

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20 p-2 z-40">
      <div className="flex justify-center items-center gap-2 overflow-x-auto">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <button
            key={id}
            className={`shrink-0 w-12 h-12 rounded-lg overflow-hidden transition-all ${
              canOpen 
                ? 'hover:scale-105 active:scale-95' 
                : 'opacity-60 cursor-not-allowed'
            } ${windows[id]?.isOpen ? 'ring-2 ring-blue-400' : ''}`}
            onClick={() => toggleApp({ id, canOpen })}
            disabled={!canOpen}
            aria-label={name}
          >
            <img
              src={`/images/${icon}`}
              alt={name}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileDock;