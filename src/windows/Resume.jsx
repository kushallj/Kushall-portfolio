import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper'
import { FileText, Download, ExternalLink, Eye } from 'lucide-react'
import React, { memo, useState } from 'react'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Using @react-pdf-viewer with hosted worker for compatibility with React 19
const Resume = memo(() => {
  const [viewMode, setViewMode] = useState('pdf'); // Start with PDF view
  const [pdfError, setPdfError] = useState(null);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { CurrentPageLabel, NumberOfPages } = pageNavigationPluginInstance;
  const onDocumentLoadFail = (error) => {
    console.error('PDF load error:', error);
    setPdfError(`Failed to load PDF: ${error?.message || 'Unknown error'}`);
    setViewMode('preview');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/resume.pdf';
    link.download = 'Kushall_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openInNewTab = () => {
    window.open('/files/resume.pdf', '_blank');
  };

  // Pagination controls removed; default layout provides built-in toolbar

  return (
    <div className="w-[700px] h-[800px] max-sm:w-[95vw] max-sm:h-[90vh] bg-white rounded-lg shadow-2xl border border-gray-300 overflow-hidden flex flex-col">
      {/* Resume Header */}
      <div className="window-header flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-300 cursor-grab active:cursor-grabbing select-none shrink-0">
        <WindowControls target="resume" />
        <h2 className="text-gray-700 text-sm font-medium">Resume — Kushall</h2>
        <div className="w-16"></div>
      </div>

      {/* Action Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200 shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('preview')}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              viewMode === 'preview' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Preview
          </button>
          
          <button
            onClick={() => setViewMode('pdf')}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              viewMode === 'pdf' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <FileText size={14} className="inline mr-1" />
            PDF View
          </button>
          
          <button
            onClick={() => setViewMode('iframe')}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              viewMode === 'iframe' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <Eye size={14} className="inline mr-1" />
            Browser View
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={openInNewTab}
            className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors"
          >
            <ExternalLink size={14} />
            <span className="max-sm:hidden">Open</span>
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
          >
            <Download size={14} />
            <span className="max-sm:hidden">Download</span>
          </button>
          {viewMode === 'pdf' && !pdfError && (
            <div className="ml-2 flex items-center gap-2">
              <button
                onClick={() => pageNavigationPluginInstance.jumpToPreviousPage()}
                className="p-1 rounded hover:bg-gray-200 text-gray-700"
                title="Previous page"
              >
                ←
              </button>
              <span className="text-sm text-gray-600">
                <CurrentPageLabel /> / <NumberOfPages />
              </span>
              <button
                onClick={() => pageNavigationPluginInstance.jumpToNextPage()}
                className="p-1 rounded hover:bg-gray-200 text-gray-700"
                title="Next page"
              >
                →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto bg-gray-100 flex items-center justify-center p-4">
        {viewMode === 'pdf' && !pdfError && (
          <div className="bg-white shadow-lg max-w-full max-h-full w-full h-full">
            {/* Pin worker to PDF.js v3 to match @react-pdf-viewer 3.x */}
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <div className="w-[650px] max-sm:w-full h-[720px] max-sm:h-[70vh]">
                <Viewer 
                  fileUrl="/files/resume.pdf" 
                  plugins={[defaultLayoutPluginInstance, pageNavigationPluginInstance]}
                  onDocumentLoadFail={onDocumentLoadFail}
                />
              </div>
            </Worker>
          </div>
        )}

        {viewMode === 'iframe' && (
          <div className="w-full h-full bg-white rounded shadow-lg">
            <iframe
              src="/files/resume.pdf"
              className="w-full h-full border-0 rounded"
              title="Resume PDF"
            />
          </div>
        )}

        {viewMode === 'preview' && (
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
            <FileText className="w-24 h-24 text-blue-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Kushall's Resume</h3>
            <p className="text-gray-600 mb-2">Full Stack Developer</p>
            <p className="text-sm text-gray-500 mb-6">Last updated: December 2025</p>
            
            {pdfError && (
              <div className="mb-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
                <p className="text-sm text-yellow-800">
                  Advanced PDF viewer unavailable. Using fallback options.
                </p>
              </div>
            )}
            
            {/* Resume Highlights */}
            <div className="text-left space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-700">3+ years experience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">React, Node.js, TypeScript</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-700">10+ projects completed</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Computer Science degree</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => setViewMode('iframe')}
                className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-medium transition-colors"
              >
                <Eye size={16} />
                View Full Resume
              </button>
              
              <button
                onClick={openInNewTab}
                className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <ExternalLink size={16} />
                Open in New Tab
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-6 pt-4 border-t border-gray-200 text-sm text-gray-500">
              <p>📧 kushall.jain07@gmail.com</p>
              <p>🌐 github.com/kushallj</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
})

Resume.displayName = 'Resume';

const ResumeWindow = WindowWrapper(Resume, 'resume');

export default ResumeWindow;