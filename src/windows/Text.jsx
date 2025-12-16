import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';
import { FileText } from 'lucide-react';
import React, { memo } from 'react';

const Text = memo(() => {
  const { windows } = useWindowStore();
  const textData = windows.txtfile?.data;

  // If no data, don't render anything
  if (!textData) return null;

  const { name, image, subtitle, description } = textData;

  return (
    <>
      {/* Text File Header */}
      <div className="window-header flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-300 cursor-grab active:cursor-grabbing select-none shrink-0">
        <WindowControls target="txtfile" />
        <h2 className="text-gray-700 text-sm font-medium">
          {name || 'Text File'}
        </h2>
        <div className="w-16"></div>
      </div>

      {/* Text Content */}
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-auto bg-white">
        <div className="p-6 max-w-none">
          {/* Optional Image */}
          {image && (
            <div className="mb-8 text-center">
              <img 
                src={image} 
                alt={name || 'Content image'} 
                className="max-w-full h-auto rounded-lg shadow-lg mx-auto border border-gray-200"
                style={{ maxHeight: '250px' }}
              />
            </div>
          )}

          {/* Title */}
          <div className="mb-6 pb-4 border-b border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 break-words">
              {name}
            </h1>
            
            {/* Optional Subtitle */}
            {subtitle && (
              <h2 className="text-xl text-gray-600 font-medium break-words">
                {subtitle}
              </h2>
            )}
          </div>

          {/* Description Paragraphs */}
          {description && Array.isArray(description) && (
            <div className="space-y-6">
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-800 leading-7 text-base whitespace-pre"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {/* Fallback if no description */}
          {(!description || !Array.isArray(description) || description.length === 0) && (
            <div className="flex flex-col items-center justify-center py-16 text-gray-500">
              <FileText size={64} className="mb-6 text-gray-300" />
              <p className="text-xl font-medium mb-2">Empty File</p>
              <p className="text-sm text-gray-400">This file contains no content to display.</p>
            </div>
          )}

          {/* Bottom padding for better scrolling */}
          <div className="h-8"></div>
        </div>
      </div>
    </>
  );
});

Text.displayName = 'Text';

const TextWindow = WindowWrapper(Text, 'txtfile');

export default TextWindow;