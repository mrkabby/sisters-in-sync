"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons for menu toggle

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-pink-500 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h2 className="text-2xl font-bold">Sisters in Sync</h2>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Navigation Links - Desktop */}
        <ul className="hidden md:flex gap-6">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About Us</Link></li>
          <li><Link href="/join" className="hover:underline">Join</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          <li><Link href="/forum" className="hover:underline">Forum</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 mt-4">
          <li><Link href="/" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/about" className="hover:underline" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link href="/join" className="hover:underline" onClick={() => setIsOpen(false)}>Join</Link></li>
          <li><Link href="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link href="/forum" className="hover:underline" onClick={() => setIsOpen(false)}>Forum</Link></li>
        </ul>
      )}
    </nav>
  );
}
