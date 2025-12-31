/**
 * Home Page
 * Design Philosophy: Industrial Futurism - Cyberpunk aesthetics meets Industrial Design
 * - Dark foundation (#0a0e14) with luminous cyan (#00d9ff) and violet (#a855f7) accents
 * - Layered depth with frosted glass effects and blur
 * - Dynamic motion and responsive interactions
 * - Orbitron for display, Manrope for body, JetBrains Mono for technical specs
 */

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import SiliconWafers from "@/components/SiliconWafers";
import Expertise from "@/components/Expertise";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <SiliconWafers />
      <Expertise />
      <Contact />
      <Footer />
    </div>
  );
}
