import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';
import React, { memo } from 'react';

const ImageViewer = memo(() => {
  const { windows } = useWindowStore();
  const imgData = windows.imgfile?.data;

  if (!imgData) return null;

  const title = imgData.title || imgData.name || 'Image';
  const imageUrl = imgData.imageUrl || imgData.image;

  if (!imageUrl) return null;

  return (
    <>
      {/* Header */}
      <div className="window-header relative flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-300 cursor-grab active:cursor-grabbing select-none shrink-0">
        <div className="w-16 flex items-center">
          <WindowControls target="imgfile" />
        </div>
        <h2
          className="absolute left-1/2 -translate-x-1/2 text-gray-700 text-sm font-medium text-center mx-auto max-w-[60%] truncate"
          title={title}
        >
          {title}
        </h2>
        <div className="w-16" aria-hidden="true"></div>
      </div>

      {/* Content */}
      <div className="flex-1 min-h-0 bg-white overflow-hidden p-5">
        <div className="w-full">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto max-h-[70vh] object-contain rounded-md shadow"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
});

ImageViewer.displayName = 'ImageViewer';

const ImageWindow = WindowWrapper(ImageViewer, 'imgfile');

export default ImageWindow;
