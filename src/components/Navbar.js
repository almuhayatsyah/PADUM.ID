"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../images/logoweb.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portofolio", href: "/portofolio" },
    { name: "Testimoni", href: "/testimoni" },
    { name: "Tentang", href: "/tentang" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 shadow-sm">
      {/* Standard Glassmorphism Background */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-md border-b border-gray-200/50"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="flex items-center justify-between py-3">
          
          {/* Logo - Standard Size */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <Image 
              src={logo} 
              alt="PADUM.COM Logo" 
              width={250}
              height={64}  
              className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Menu - Balanced Right Aligned */}
          <div className="hidden md:flex items-center space-x-12">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative group transition-all duration-300 font-bold text-sm uppercase tracking-widest ${
                      isActive ? "text-blue-800" : "text-gray-900 hover:text-blue-800"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-2 h-0.5 bg-gradient-to-r from-blue-700 to-blue-900 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                );
              })}
            </div>
            
            {/* CTA Button */}
            <Link
              href="https://wa.me/6281234567890?text=Halo%20PADUM.COM,%20saya%20mau%20konsultasi%20website"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Konsultasi Gratis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <Link
                href="https://wa.me/6281234567890?text=Halo%20PADUM.COM,%20saya%20mau%20konsultasi%20website"
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-bold text-xs transition-all shadow-md"
              >
                Konsultasi
              </Link>
            <button
              className="text-gray-700 focus:outline-none hover:text-blue-600 transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50 absolute w-full left-0 top-full shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-1 p-6">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

