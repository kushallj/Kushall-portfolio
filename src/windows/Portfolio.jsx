import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import { gallery, photosLinks } from '#constants';
import useWindowStore from '#store/window';
import React, { memo } from 'react';

const Portfolio = memo(() => {
  const { openWindow } = useWindowStore();

  const handleOpenImage = (id, img) => {
    openWindow('imgfile', {
      id,
      name: 'Gallery image',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      imageUrl: img,
    });
  };

  return (
    <>
      {/* Header */}
      <div className="window-header relative flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-300 cursor-grab active:cursor-grabbing select-none shrink-0">
        <div className="w-16 flex items-center">
          <WindowControls target="photos" />
        </div>
        <h2 className="absolute left-1/2 -translate-x-1/2 text-gray-700 text-sm font-medium text-center mx-auto max-w-[60%] truncate">
          Photos
        </h2>
        <div className="w-16" aria-hidden="true"></div>
      </div>

      {/* Content */}
      <div className="flex-1 min-h-0 bg-white overflow-hidden">
        {/* Toolbar / Albums */}
        <div className="px-4 pt-4 pb-2 border-b border-gray-100 bg-white/60">
          <ul className="flex flex-wrap items-center gap-3">
            {photosLinks.map(({ id, icon, title }) => (
              <li key={id} className="group">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-200 bg-white shadow-sm hover:shadow transition-all hover:-translate-y-0.5 text-gray-700 hover:text-gray-900"
                  title={title}
                >
                  <img src={icon} alt={title} className="w-4 h-4" />
                  <span className="text-sm font-medium">{title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery Grid */}
        <div className="p-4 overflow-y-auto h-full">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {gallery.map(({ id, img }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => handleOpenImage(id, img)}
                  className="block w-full overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm hover:shadow-md transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <img
                    src={img}
                    alt={`Gallery image ${id}`}
                    loading="lazy"
                    className="w-full h-28 sm:h-32 md:h-36 lg:h-40 object-cover"
                  />
                </button>
              </li>
            ))}
          </ul>
          <div className="h-2" />
        </div>
      </div>
    </>
  );
});

Portfolio.displayName = 'Portfolio';

const PortfolioWindow = WindowWrapper(Portfolio, 'photos');

export default PortfolioWindow;