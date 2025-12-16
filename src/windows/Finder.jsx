import { WindowControls } from '#components'
import { locations } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import useLocationStore from '#store/location'
import useWindowStore from '#store/window'
import clsx from 'clsx'
import { Search, Folder } from 'lucide-react'
import React, { memo } from 'react'

const Finder = memo(() => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const getItemIcon = (item) => {
    return <img src={item.icon} className="w-12 h-12 object-contain" alt={item.name} />;
  };

  const handleItemClick = (item) => {
    if (item.kind === 'folder') {
      return setActiveLocation(item);
    } else {
      // Handle specific file types
      if (item.fileType === 'pdf') {
        return openWindow('resume');
      }
      if (item.fileType === 'txt') {
        return openWindow('txtfile', {
          name: item.name,
          image: item.imageUrl,
          subtitle: item.subtitle,
          description: item.description
        });
      }
      if (['fig', 'url'].includes(item.fileType) && item.href) {
        return window.open(item.href, '_blank');
      }
      if (item.fileType === 'img') {
        return openWindow('imgfile', item);
      }
    }

    // Fallback for other file types
    console.log('Unhandled file type:', item.fileType, item);
  };

  const renderSidebarList = (items) => 
    items.map((item) => (
      <li 
        key={item.id} 
        onClick={() => setActiveLocation(item)} 
        className={clsx(
          'flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors',
          item.id === activeLocation.id 
            ? 'bg-blue-100 text-blue-700' 
            : 'text-gray-700 hover:bg-gray-200'
        )}
      >
        <img src={item.icon} className="w-4 h-4" alt={item.name} />
        <p className="text-sm font-medium truncate">{item.name}</p>
      </li>
    ));

  const renderContentItems = (items) => 
    items?.map((item) => (
      <li 
        key={item.id}
        onClick={() => handleItemClick(item)}
        className={clsx(
          'absolute flex flex-col items-center gap-2 p-2 rounded-md cursor-pointer transition-all hover:bg-blue-50 group',
          item.position || 'top-5 left-5'
        )}
      >
        <div className="group-hover:scale-105 transition-transform">
          {getItemIcon(item)}
        </div>
        <p className="text-xs text-center font-medium max-w-20 truncate">
          {item.name}
        </p>
      </li>
    ));

  return (
    <div className="w-[900px] h-[600px] max-sm:w-[95vw] max-sm:h-[85vh] bg-white rounded-lg shadow-2xl border border-gray-300 overflow-hidden flex flex-col">
      {/* Finder Header */}
      <div className="window-header flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-300 cursor-grab active:cursor-grabbing select-none shrink-0">
        <WindowControls target="finder" />
        <h2 className="text-gray-700 text-sm font-medium">Finder — {activeLocation.name}</h2>
        <div className="flex items-center gap-2">
          <Search className="w-4 h-4 text-gray-500" />
        </div>
      </div>

      {/* Finder Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-48 bg-gray-50 border-r border-gray-200 flex flex-col p-4 space-y-4 shrink-0">
          <div>
            <h3 className="text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">
              Favorites
            </h3>
            <ul className="space-y-1">
              {renderSidebarList(Object.values(locations))}
            </ul>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 bg-white relative overflow-auto">
          {activeLocation.children && activeLocation.children.length > 0 ? (
            <ul className="relative h-full">
              {renderContentItems(activeLocation.children)}
            </ul>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <Folder size={48} className="mb-4 text-gray-300" />
              <p className="text-lg font-medium">Empty Folder</p>
              <p className="text-sm">This folder contains no items.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
})

const FinderWindow = WindowWrapper(Finder, "finder")

export default FinderWindow