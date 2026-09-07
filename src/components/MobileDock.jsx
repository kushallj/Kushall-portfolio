import React, { memo } from 'react';
import { dockApps } from '#constants';
import useWindowStore from '#store/window';
import { asset } from '#utils/asset';

const MobileDock = memo(() => {
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
    <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-linear-to-t from-white/20 via-white/10 to-white/5 backdrop-blur-md border-t border-white/20 px-3 py-3 z-40 shadow-2xl safe-area-inset-bottom">
      <div className="flex justify-center items-center gap-3 overflow-x-auto max-w-full">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <button
            key={id}
            className={`shrink-0 w-14 h-14 rounded-lg overflow-hidden transition-all duration-200 active:scale-90 min-h-11 min-w-11 ${
              canOpen 
                ? 'hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl' 
                : 'opacity-50 cursor-not-allowed'
            } ${windows[id]?.isOpen ? 'ring-2 ring-blue-400 shadow-blue-500/50' : ''}`}
            onClick={() => toggleApp({ id, canOpen })}
            disabled={!canOpen}
            aria-label={name}
            title={name}
          >
            <img
              src={asset(`images/${icon}`)}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
});

MobileDock.displayName = 'MobileDock';

export default MobileDock;