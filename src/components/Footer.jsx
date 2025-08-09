import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12">
      <div className="relative overflow-hidden rounded-t-2xl shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-95" />
        <div className="relative max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="text-2xl select-none"></span>
            <p className="text-sm md:text-base font-medium">Esta página es para fines educativos y sin fines de lucro.</p>
          </div>
          <div className="text-white/90 text-xs">
          <p className="text-sm md:text-base font-medium">UTSH</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


