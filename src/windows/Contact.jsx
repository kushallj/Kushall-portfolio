import { WindowControls } from '#components';
import { socials } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import React, { memo } from 'react';
import { Mail } from 'lucide-react';

const Contact = memo(() => {
  return (
    <>
      {/* Header */}
      <div className="window-header flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-300 cursor-grab active:cursor-grabbing select-none shrink-0">
        <WindowControls target="contact" />
        <h2 className="text-gray-700 text-sm font-medium">Contact</h2>
        <div className="w-16" />
      </div>

      {/* Content */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-white">
        <div className="p-6 space-y-6">
          {/* Profile */}
          <div className="flex items-center gap-4">
            <img
              src="/images/Kushall.jpg"
              alt="Kushall"
              className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-200"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Let's Connect</h3>
              <p className="text-gray-600">Anytime and anything related to my tech stack — I'm in for you, mate.</p>
            </div>
          </div>

          {/* Email */}
          <a
            href="mailto:kushall.jain07@gmail.com"
            className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
          >
            <Mail size={16} />
            <span className="text-sm font-medium">kushall.jain07@gmail.com</span>
          </a>

          {/* Socials */}
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {socials.map(({ id, bg, link, icon, text }) => (
              <li key={id}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={text}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-white shadow-sm transition-transform hover:-translate-y-0.5"
                  style={{ background: bg }}
                >
                  <img src={icon} alt={text} className="w-5 h-5" />
                  <span className="text-sm font-medium">{text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
});

Contact.displayName = 'Contact';

const ContactWindow = WindowWrapper(Contact, 'contact')

export default ContactWindow