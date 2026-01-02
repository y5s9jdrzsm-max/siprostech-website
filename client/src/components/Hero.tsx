/**
 * Hero Component
 * Design Philosophy: Industrial Futurism
 * - Multi-layered panels with z-axis depth
 * - Luminous cyan and violet accents
 * - Dynamic motion with gradient backgrounds
 * - Custom generated hero image as background
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Cpu, FlaskConical } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-main.png"
          alt="Semiconductor technology connecting continents"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 grid-pattern opacity-30"></div>

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full frosted-glass border border-[#00d9ff]/30 mb-8 animate-fade-in-up">
            <div className="w-2 h-2 rounded-full bg-[#00d9ff] animate-pulse glow-cyan"></div>
            <span className="text-sm font-mono text-[#00d9ff]">Est. 2021 • Singapore • Switzerland</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-8 animate-fade-in-up animation-delay-200">
            <span className="text-gradient-cyan-violet">Bringing Semiconductor Excellence</span>
            <br />
            <span className="text-foreground">Across Regions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/60 mb-4 max-w-3xl mx-auto font-light animate-fade-in-up animation-delay-400">
            Connecting European semiconductor ecosystems with Asian manufacturing execution
          </p>

          <p className="text-lg text-[#fbbf24] mb-12 font-mono animate-fade-in-up animation-delay-600">
            Foundry • Silicon Wafers • Reliability & Qualification • Test & Failure Analysis • Equipment & Manufacturing Ecosystems
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-800">
            <Button
              size="lg"
              className="bg-[#00d9ff] hover:bg-[#00d9ff]/90 text-background font-bold text-lg px-8 py-6 transition-all duration-300 hover:glow-cyan hover:scale-105"
              asChild
            >
              <a href="#services">
                Explore Services
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#a855f7] text-[#a855f7] hover:bg-[#a855f7]/10 font-bold text-lg px-8 py-6 transition-all duration-300 hover:glow-violet"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up animation-delay-1000">
            <div className="frosted-glass p-6 rounded-lg border border-[#00d9ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 hover:glow-cyan group">
              <div className="w-12 h-12 bg-[#00d9ff]/10 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-[#00d9ff]/20 transition-all duration-300">
                <Globe className="text-[#00d9ff]" size={24} />
              </div>
              <h3 className="text-lg font-display font-bold mb-2 text-[#00d9ff]">Global Bridge</h3>
              <p className="text-sm text-foreground/60">Connecting Asian manufacturing with European innovation</p>
            </div>

            <div className="frosted-glass p-6 rounded-lg border border-[#a855f7]/20 hover:border-[#a855f7]/50 transition-all duration-500 hover:glow-violet group">
              <div className="w-12 h-12 bg-[#a855f7]/10 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-[#a855f7]/20 transition-all duration-300">
                <Cpu className="text-[#a855f7]" size={24} />
              </div>
              <h3 className="text-lg font-display font-bold mb-2 text-[#a855f7]">Foundry Expertise</h3>
              <p className="text-sm text-foreground/60">Deep experience in manufacturing and process development</p>
            </div>

            <div className="frosted-glass p-6 rounded-lg border border-[#fbbf24]/20 hover:border-[#fbbf24]/50 transition-all duration-500 hover:glow-amber group">
              <div className="w-12 h-12 bg-[#fbbf24]/10 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-[#fbbf24]/20 transition-all duration-300">
                <FlaskConical className="text-[#fbbf24]" size={24} />
              </div>
              <h3 className="text-lg font-display font-bold mb-2 text-[#fbbf24]">Lab Services</h3>
              <p className="text-sm text-foreground/60">Comprehensive testing, analysis, and reliability solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00d9ff] rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
}
