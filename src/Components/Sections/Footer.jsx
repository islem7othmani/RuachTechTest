import React from 'react';
import Logo from '../CommonComponents/Logo';

export default function Footer() {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Integrations', href: '#integrations' },
        { name: 'Changelog', href: '#changelog' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Blog', href: '#blog' },
        { name: 'Careers', href: '#careers' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '#privacy' },
        { name: 'Terms', href: '#terms' },
        { name: 'Security', href: '#security' }
      ]
    }
  ];

  return (
    <footer className="bg-[#101828] text-slate-300 py-12 px-6">
      <div className="max-w-10xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-3">
             <Logo textColor="white" />  
            </div>
            <p className="text-xl text-slate-400 leading-relaxed w-11/12">
              Building the future of precise, detail-oriented development.
            </p>
          </div>
          {footerSections.map((section, index) => (
            <div key={index} className="col-span-1">
              <h4 className="text-white font-medium mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-lg text-slate-400 hover:text-white transition-colors duration-200 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 text-center">
          <p className="text-lg text-slate-500">
             © 2025 Detailify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>   
  );
}