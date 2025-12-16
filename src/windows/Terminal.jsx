import WindowWrapper from '#hoc/WindowWrapper'
import WindowControls from '#components/WindowControls'
import { Check, Flag } from 'lucide-react';
import { techStack } from '#constants';
import React, { memo } from 'react'

const Terminal = memo(() => {
  return (
    <div className="w-[600px] h-[500px] max-sm:w-[95vw] max-sm:h-[80vh] max-sm:max-w-none bg-black/95 backdrop-blur-md rounded-lg shadow-2xl border border-gray-700/50 overflow-hidden">
      {/* Terminal Header */}
      <div className="window-header flex items-center justify-between px-4 py-3 bg-gray-800/80 border-b border-gray-700/50 cursor-grab active:cursor-grabbing select-none">
        <WindowControls windowKey="terminal" />
        <h2 className="text-gray-300 text-sm font-medium">Terminal — Tech Stack</h2>
        <div className="w-16"></div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 max-sm:p-2 font-mono text-sm max-sm:text-xs text-green-400 h-full overflow-y-auto">
        {/* Command Line */}
        <div className="mb-4">
          <span className="text-blue-400">@Kushall</span>
          <span className="text-white">:</span>
          <span className="text-yellow-400">~</span>
          <span className="text-white">$ </span>
          <span className="text-green-400">show tech stack</span>
        </div>

        {/* Output */}
        <div className="space-y-3">
          <div className="text-cyan-400 mb-3">
            ┌─ Loading tech stack...
          </div>

          {techStack.map(({ category, items }, index) => (
            <div key={category} className="ml-2">
              <div className="flex items-center gap-2 mb-2">
                <Check className="text-green-400" size={16} />
                <span className="text-yellow-400 font-semibold">{category}:</span>
              </div>
              <div className="ml-6 text-gray-300">
                {items.map((item, i) => (
                  <span key={i} className="text-white">
                    {item}
                    {i < items.length - 1 && (
                      <span className="text-gray-500">, </span>
                    )}
                  </span>
                ))}
              </div>
              {index < techStack.length - 1 && <div className="h-2"></div>}
            </div>
          ))}

          {/* Footer Stats */}
          <div className="mt-6 pt-4 border-t border-gray-700/50 space-y-2">
            <div className="flex items-center gap-2 text-green-400">
              <Check size={14} />
              <span className="text-sm">
                {techStack.length} categories loaded successfully (100%)
              </span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <Flag size={14} />
              <span className="text-sm">Render time: 6ms</span>
            </div>
          </div>

          {/* New Command Line */}
          <div className="mt-4 pt-2">
            <span className="text-blue-400">@Kushall</span>
            <span className="text-white">:</span>
            <span className="text-yellow-400">~</span>
            <span className="text-white">$ </span>
            <span className="animate-pulse">_</span>
          </div>
        </div>
      </div>
    </div>
  )
})

Terminal.displayName = 'Terminal';

const TerminalWindow = WindowWrapper(Terminal, 'terminal')

export default TerminalWindow;