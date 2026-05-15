"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-indigo-600">EduVerse</h1>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#testimonials">Testimonials</a>

          <button className="gradient-bg text-white px-5 py-2 rounded-full">
            Apply Now
          </button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white px-6 pb-6 flex flex-col gap-4">
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#testimonials">Testimonials</a>

          <button className="gradient-bg text-white px-5 py-3 rounded-full">
            Apply Now
          </button>
        </div>
      )}
    </nav>
  );
}
