/**
 * Footer Component
 * Design Philosophy: Industrial Futurism
 * - Dark background with subtle grid pattern
 * - Organized information architecture
 * - Luminous accent colors for links
 */

import { Mail, MapPin, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Foundry Management", href: "#services" },
      { label: "Equipment & Materials", href: "#services" },
      { label: "Laboratory Testing", href: "#services" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Expertise", href: "#expertise" },
      { label: "Contact", href: "#contact" },
    ],
    expertise: [
      { label: "Asia Foundry Manufacturing Networking", href: "#expertise" },
      { label: "European Semiconductor Eco-System Compliance", href: "#expertise" },
      { label: "Semiconductor Supply Chain Management", href: "#expertise" },
    ],
  };

  return (
    <footer className="relative bg-[#0a0e14] border-t border-white/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      <div className="container relative z-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo-official.png"
                alt="SIPROSTECH Logo"
                className="h-14 w-auto"
              />
              <span className="text-2xl font-display font-bold text-gradient-cyan-violet hidden sm:inline">
                SIPROSTECH
              </span>
            </div>
            <p className="text-foreground/60 leading-relaxed mb-6 max-w-sm">
              Singapore-based semiconductor services bridging Europe and Asia. Founded 2021 by silicon industry professionals with deep foundry, quality, and supply chain expertise.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-foreground/70">
                <MapPin size={18} className="text-[#00d9ff]" />
                <span className="text-sm">160 Robinson Road, #14-04, Singapore 068914</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/70">
                <Mail size={18} className="text-[#a855f7]" />
                <a href="mailto:zzwang@siprostech.com" className="text-sm hover:text-[#a855f7] transition-colors">
                  zzwang@siprostech.com
                </a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display font-bold text-[#00d9ff] mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-[#00d9ff] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display font-bold text-[#a855f7] mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-[#a855f7] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise Column */}
          <div>
            <h4 className="font-display font-bold text-[#fbbf24] mb-4">Expertise</h4>
            <ul className="space-y-3">
              {footerLinks.expertise.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-[#fbbf24] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/50 text-sm">
              © {currentYear} SIPRO Technology Pte. Ltd. (Reg. No: 202126313R). All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#00d9ff]/10 hover:bg-[#00d9ff]/20 flex items-center justify-center transition-all duration-300 hover:glow-cyan group"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-[#00d9ff] group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#a855f7]/10 hover:bg-[#a855f7]/20 flex items-center justify-center transition-all duration-300 hover:glow-violet group"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-[#a855f7] group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent opacity-30"></div>
    </footer>
  );
}
