/**
 * Navigation Component
 * Design Philosophy: Industrial Futurism
 * - Frosted glass effect with backdrop blur
 * - Luminous cyan accents on hover
 * - Fixed positioning with smooth transitions
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#silicon-wafers", label: "Silicon Wafers" },
    { href: "#expertise", label: "Expertise" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "frosted-glass shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 group cursor-pointer">
              <img
                src="/images/logo-official.png"
                alt="SIPROSTECH Logo"
                className="h-12 w-auto transition-all duration-300 group-hover:glow-cyan"
              />
              <span className="text-2xl font-display font-bold text-gradient-cyan-violet hidden sm:inline">
                SIPROSTECH
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-[#00d9ff] transition-all duration-300 font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00d9ff] transition-all duration-300 group-hover:w-full glow-cyan"></span>
              </a>
            ))}
            <Button
              className="bg-[#00d9ff] hover:bg-[#00d9ff]/90 text-background font-semibold transition-all duration-300 hover:glow-cyan"
              asChild
            >
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden frosted-glass border-t border-white/10 py-4 mb-4 rounded-b-lg">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-[#00d9ff] transition-all duration-300 font-medium px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4">
                <Button
                  className="w-full bg-[#00d9ff] hover:bg-[#00d9ff]/90 text-background font-semibold"
                  asChild
                >
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
