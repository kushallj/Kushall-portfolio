import React, { useState } from 'react';
import { Menu, X, User, Briefcase, Mail, FileText } from 'lucide-react';
import { techStack, socials } from '#constants';

const MobileView = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'resume', label: 'Resume', icon: FileText },
  ];

  const renderAbout = () => (
    <div className="space-y-6">
      <div className="text-center">
        <img 
          src="/images/Kushall.jpg"
          alt="Kushall" 
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-2xl font-bold text-white mb-2">Hey! I'm Kushall 👋</h2>
        <p className="text-gray-300 leading-relaxed">
          A web developer who enjoys building sleek, interactive websites that actually work well.
          I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful. On Backend Side: Python (FastAPI, Django), Node.js, REST APIs, microservices architecture, async programming, and PostgreSQL/MongoDB databases.
        </p>
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white text-center mb-6">Tech Stack</h2>
      <div className="space-y-4">
        {techStack.map(({ category, items }) => (
          <div key={category} className="bg-white/10 backdrop-blur-md rounded-lg p-4">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item, i) => (
                <span 
                  key={i} 
                  className="bg-white/20 text-white px-3 py-1 rounded-full text-sm"
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
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white text-center mb-6">Get In Touch</h2>
      <div className="space-y-4">
        {socials.map(({ id, text, icon, bg, link }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white/10 backdrop-blur-md rounded-lg p-4 hover:bg-white/20 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: bg }}
              >
                <img src={icon} alt={text} className="w-6 h-6" />
              </div>
              <span className="text-white font-medium">{text}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );

  const renderResume = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white text-center mb-6">Resume</h2>
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
        <FileText className="w-16 h-16 text-white mx-auto mb-4" />
        <p className="text-gray-300 mb-4">Download my resume to learn more about my experience and skills.</p>
        <a 
          href="/files/resume.pdf" 
          download="Kushall_Resume.pdf"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
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
    <div className="sm:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-50">
      {/* Mobile Header */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/logo.svg" alt="Logo" className="w-8 h-8" />
            <span className="text-white font-bold">Kushall's Portfolio</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="bg-white/10 backdrop-blur-md border-b border-white/20 p-4">
          <div className="grid grid-cols-2 gap-2">
            {sections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => {
                  setActiveSection(id);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center gap-2 p-3 rounded-lg transition-colors ${
                  activeSection === id 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {renderContent()}
      </div>

      {/* Mobile Footer */}
      <div className="bg-white/10 backdrop-blur-md border-t border-white/20 p-4 text-center">
        <p className="text-gray-300 text-sm">
          © 2025 Kushall's Portfolio. Made with ❤️
        </p>
      </div>
    </div>
  );
};

export default MobileView;