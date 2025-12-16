import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import { Globe, ArrowLeft, ArrowRight, RotateCcw, Share } from 'lucide-react'
import React, { memo } from 'react'

const Safari = memo(() => {
  return (
    <div className="w-[800px] h-[600px] max-sm:w-[95vw] max-sm:h-[85vh] max-sm:max-w-none bg-white rounded-lg shadow-2xl border border-gray-300 overflow-hidden">
      {/* Safari Header */}
      <div className="window-header flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-300 cursor-grab active:cursor-grabbing select-none">
        <WindowControls windowKey="safari" />
        <h2 className="text-gray-700 text-sm font-medium">Safari — Articles</h2>
        <div className="w-16"></div>
      </div>

      {/* Safari Toolbar */}
      <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <button className="p-1 rounded hover:bg-gray-200 transition-colors">
            <ArrowLeft size={16} className="text-gray-600" />
          </button>
          <button className="p-1 rounded hover:bg-gray-200 transition-colors">
            <ArrowRight size={16} className="text-gray-600" />
          </button>
          <button className="p-1 rounded hover:bg-gray-200 transition-colors">
            <RotateCcw size={16} className="text-gray-600" />
          </button>
        </div>
        
        <div className="flex-1 flex items-center bg-white rounded-md border border-gray-300 px-3 py-1">
          <Globe size={14} className="text-gray-500 mr-2" />
          <span className="text-sm text-gray-600">jsmastery.com/articles</span>
        </div>
        
        <button className="p-1 rounded hover:bg-gray-200 transition-colors">
          <Share size={16} className="text-gray-600" />
        </button>
      </div>

      {/* Safari Content */}
      <div className="p-6 max-sm:p-3 h-full overflow-y-auto bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Latest Articles</h1>
          
          <div className="space-y-6">
            <article className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-blue-600 hover:text-blue-800 cursor-pointer mb-2">
                TypeScript Explained: What It Is, Why It Matters, and How to Master It
              </h2>
              <p className="text-gray-600 text-sm mb-2">Sep 2, 2025</p>
              <p className="text-gray-700 leading-relaxed">
                Learn everything you need to know about TypeScript, from basic concepts to advanced features. 
                This comprehensive guide covers type annotations, interfaces, generics, and best practices.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-blue-600 hover:text-blue-800 cursor-pointer mb-2">
                The Ultimate Guide to Mastering Three.js for 3D Development
              </h2>
              <p className="text-gray-600 text-sm mb-2">Aug 28, 2025</p>
              <p className="text-gray-700 leading-relaxed">
                Dive into the world of 3D web development with Three.js. Create stunning 3D experiences, 
                animations, and interactive scenes that run smoothly in the browser.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-blue-600 hover:text-blue-800 cursor-pointer mb-2">
                The Ultimate Guide to Mastering GSAP Animations
              </h2>
              <p className="text-gray-600 text-sm mb-2">Aug 15, 2025</p>
              <p className="text-gray-700 leading-relaxed">
                Master the art of web animations with GSAP. Learn how to create smooth, performant animations 
                that enhance user experience and bring your websites to life.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
})

Safari.displayName = 'Safari';

const SafariWindow = WindowWrapper(Safari, 'safari');

export default SafariWindow