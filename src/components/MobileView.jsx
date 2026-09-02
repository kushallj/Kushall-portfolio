import React, { useState, memo, useEffect } from 'react';
import { Menu, X, User, Briefcase, Mail, FileText } from 'lucide-react';
import { techStack, socials } from '#constants';

const MobileView = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [transitioning, setTransitioning] = useState(false);

  const sections = [
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'resume', label: 'Resume', icon: FileText },
  ];

  const handleSectionChange = (sectionId) => {
    setTransitioning(true);
    setTimeout(() => {
      setActiveSection(sectionId);
      setTransitioning(false);
    }, 150);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const renderAbout = () => (
    <div className="space-y-5 sm:space-y-6 px-2">
      <div className="text-center">
        <img 
          src="/images/Kushall.jpg"
          alt="Kushall" 
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover shadow-lg ring-2 ring-blue-400/50"
          loading="lazy"
        />
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Hey! I'm Kushall 👋</h2>
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          Full-Stack & Mobile Software Engineer with 4+ years of experience across mobile (Flutter), web (React/TypeScript), backend (Python/Django/FastAPI, Node.js), and distributed IoT/FinTech systems (GameChange Energy, Progfin). Passionate about high-reliability architectures, performant APIs, and clean software design.
        </p>
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-5 sm:space-y-6 px-2">
      <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-5 sm:mb-6">Tech Stack</h2>
      <div className="space-y-3 sm:space-y-4">
        {techStack.map(({ category, items }) => (
          <div 
            key={category} 
            className="bg-linear-to-br from-white/15 to-white/5 backdrop-blur-md rounded-xl sm:rounded-lg p-4 sm:p-5 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-base sm:text-lg font-semibold text-yellow-400 mb-3">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item, i) => (
                <span 
                  key={i} 
                  className="bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="space-y-5 sm:space-y-6 px-2">
      <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-5 sm:mb-6">Get In Touch</h2>
      <div className="space-y-3 sm:space-y-4">
        {socials.map(({ id, text, icon, bg, link }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex bg-linear-to-br from-white/15 to-white/5 backdrop-blur-md rounded-xl sm:rounded-lg p-4 sm:p-5 border border-white/10 hover:border-white/30 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl min-h-[60px] items-center justify-start"
          >
            <div className="flex items-center gap-4">
              <div 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center shrink-0 shadow-md"
                style={{ backgroundColor: bg }}
              >
                <img src={icon} alt={text} className="w-6 h-6 sm:w-7 sm:h-7" loading="lazy" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-white font-semibold text-sm sm:text-base block truncate">{text}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );

  const renderResume = () => (
    <div className="space-y-5 sm:space-y-6 px-2">
      <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-5 sm:mb-6">Resume</h2>
      <div className="bg-linear-to-br from-white/15 to-white/5 backdrop-blur-md rounded-xl sm:rounded-lg p-6 sm:p-8 text-center border border-white/10 shadow-lg">
        <FileText className="w-16 h-16 sm:w-20 sm:h-20 text-blue-400 mx-auto mb-4" />
        <p className="text-sm sm:text-base text-gray-200 mb-5">Download my resume to learn more about my experience and skills.</p>
        <a 
          href="/files/resume.pdf" 
          download="Kushall_Resume.pdf"
          className="flex bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 min-h-11 items-center justify-center"
        >
          Download Resume
        </a>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'about': return renderAbout();
      case 'skills': return renderSkills();
      case 'contact': return renderContact();
      case 'resume': return renderResume();
      default: return renderAbout();
    }
  };

  return (
    <div className="sm:hidden fixed inset-0 bg-linear-to-b from-black/30 via-black/40 to-black/50 backdrop-blur-md z-50 flex flex-col">
      {/* Mobile Header */}
      <div className="bg-linear-to-b from-white/15 to-white/5 backdrop-blur-md border-b border-white/20 px-4 py-3 sm:px-5 sm:py-4 shadow-md">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3 min-w-0">
            <img src="/images/logo.svg" alt="Logo" className="w-8 h-8 shrink-0" loading="lazy" />
            <span className="text-white font-bold text-base sm:text-lg truncate">Kushall's Portfolio</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 hover:bg-white/10 active:bg-white/20 rounded-lg transition-colors duration-200 shrink-0 min-h-11 min-w-11 flex items-center justify-center"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="bg-white/10 backdrop-blur-md border-b border-white/20 px-4 py-4 sm:px-5 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto">
            {sections.map(({ id, label, icon: IconCmp }) => (
              <button
                key={id}
                onClick={() => handleSectionChange(id)}
                className={`flex items-center justify-center gap-2 p-3 sm:p-4 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 min-h-11 ${
                  activeSection === id 
                    ? 'bg-blue-500 text-white shadow-lg' 
                    : 'bg-white/10 text-gray-200 hover:bg-white/20 active:scale-95'
                }`}
              >
                {React.createElement(IconCmp, { size: 20 })}
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Content */}
      <div className={`flex-1 overflow-y-auto pb-20 pt-4 sm:pt-5 px-2 sm:px-3 transition-opacity duration-150 ${
        transitioning ? 'opacity-50' : 'opacity-100'
      }`} style={{ scrollBehavior: 'smooth' }}>
        <div className="max-w-md mx-auto">
          {renderContent()}
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="bg-linear-to-t from-white/15 to-white/5 backdrop-blur-md border-t border-white/20 px-4 py-3 text-center shadow-md">
        <p className="text-gray-300 text-xs sm:text-sm">
          © 2025 Kushall's Portfolio. Made with ❤️
        </p>
      </div>
    </div>
  );
});

MobileView.displayName = 'MobileView';

export default MobileView;