"use client";

import { useState } from "react";
import { Briefcase, User, FileText, Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0f0f0f]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
        <a
          href="#"
          className="font-cursive font-bold text-3xl text-white hover:text-[#E2F84E] transition-colors"
        >
          Anamika!
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a
            href="#work"
            className="flex items-center gap-2 hover:text-[#E2F84E] transition-colors"
          >
            <Briefcase size={18} /> Work
          </a>
          <a
            href="#experience"
            className="flex items-center gap-2 hover:text-[#E2F84E] transition-colors"
          >
            <Sparkles size={18} /> Experience
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 hover:text-[#E2F84E] transition-colors"
          >
            <User size={18} /> About
          </a>
          <a
            href="https://drive.google.com/file/d/1KJHNN1H8WVGpShvzjfHnjSK0MySfNzv4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#E2F84E] transition-colors"
          >
            <FileText size={18} /> Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:text-[#E2F84E] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0f0f0f] border-b border-white/10 p-6 space-y-2 shadow-2xl animate-in slide-in-from-top-5 duration-200">
          <a
            href="#work"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-4 text-lg font-medium text-gray-300 hover:text-[#E2F84E] hover:bg-white/5 rounded-xl p-4 transition-all"
          >
            <Briefcase size={20} /> Work
          </a>
          <a
            href="#experience"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-4 text-lg font-medium text-gray-300 hover:text-[#E2F84E] hover:bg-white/5 rounded-xl p-4 transition-all"
          >
            <Sparkles size={20} /> Experience
          </a>
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-4 text-lg font-medium text-gray-300 hover:text-[#E2F84E] hover:bg-white/5 rounded-xl p-4 transition-all"
          >
            <User size={20} /> About
          </a>
          <a
            href="https://drive.google.com/file/d/1KJHNN1H8WVGpShvzjfHnjSK0MySfNzv4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-4 text-lg font-medium text-gray-300 hover:text-[#E2F84E] hover:bg-white/5 rounded-xl p-4 transition-all"
          >
            <FileText size={20} /> Resume
          </a>
        </div>
      )}
    </nav>
  );
}
