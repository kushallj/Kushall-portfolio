import useWindowStore from '#store/window'
import { X, Minus, Square } from 'lucide-react'
import React, { useState } from 'react'

const WindowControls = ({ windowKey, target }) => {
  const { closeWindow, toggleMinimize } = useWindowStore();
  const [hoveredButton, setHoveredButton] = useState(null);

  // Support both windowKey and target props for backward compatibility
  const targetWindow = windowKey || target;

  const handleClose = (e) => {
    e.stopPropagation(); // Prevent triggering drag
    if (targetWindow) {
      closeWindow(targetWindow);
    }
  };

  const handleMinimize = (e) => {
    e.stopPropagation();
    if (targetWindow) {
      toggleMinimize(targetWindow);
    }
  };

  const handleMaximize = (e) => {
    e.stopPropagation();
    // TODO: Implement maximize functionality
  };

  return (
    <div className="flex items-center gap-2">
      {/* Close Button */}
      <button
        className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors group relative"
        onClick={handleClose}
        onMouseEnter={() => setHoveredButton('close')}
        onMouseLeave={() => setHoveredButton(null)}
        aria-label="Close window"
      >
        {hoveredButton === 'close' && (
          <X size={8} className="text-red-900 absolute" strokeWidth={3} />
        )}
      </button>

      {/* Minimize Button */}
      <button
        className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center transition-colors group relative"
        onClick={handleMinimize}
        onMouseEnter={() => setHoveredButton('minimize')}
        onMouseLeave={() => setHoveredButton(null)}
        aria-label="Minimize window"
      >
        {hoveredButton === 'minimize' && (
          <Minus size={8} className="text-yellow-900 absolute" strokeWidth={3} />
        )}
      </button>

      {/* Maximize Button */}
      <button
        className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition-colors group relative"
        onClick={handleMaximize}
        onMouseEnter={() => setHoveredButton('maximize')}
        onMouseLeave={() => setHoveredButton(null)}
        aria-label="Maximize window"
      >
        {hoveredButton === 'maximize' && (
          <Square size={6} className="text-green-900 absolute" strokeWidth={3} />
        )}
      </button>
    </div>
  )
}

export default WindowControls