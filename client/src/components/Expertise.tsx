/**
 * Expertise Component
 * Design Philosophy: Industrial Futurism
 * - Grid layout showcasing technical expertise areas
 * - Interactive cards with hover effects
 * - Real semiconductor industry imagery
 */

import { Cpu, Factory, Shield, Globe2, Microscope, Boxes, Wrench, LineChart } from "lucide-react";

export default function Expertise() {
  const expertiseAreas = [
    {
      icon: Factory,
      title: "Foundry Manufacturing",
      description: "Wafer fabrication, cleanroom operations, and production optimization at world-leading foundries",
      color: "#00d9ff",
    },
    {
      icon: Cpu,
      title: "Wafer Process Development",
      description: "Advanced & mature technology node development, process integration, and yield enhancement",
      color: "#a855f7",
    },
    {
      icon: Shield,
      title: "Quality & Reliability",
      description: "Quality management systems, reliability testing, failure analysis, and compliance frameworks",
      color: "#fbbf24",
    },
    {
      icon: Globe2,
      title: "Supply Chain Management",
      description: "Global semiconductor supply chain optimization, vendor management, and IP/third-party coordination",
      color: "#00d9ff",
    },
    {
      icon: Microscope,
      title: "Laboratory Testing",
      description: "Failure analysis, reliability characterization, testing coordination, and probe card expertise",
      color: "#a855f7",
    },
    {
      icon: Boxes,
      title: "Equipment & Materials",
      description: "Semiconductor equipment, silicon materials, precision components, and sourcing strategies",
      color: "#fbbf24",
    },
    {
      icon: Wrench,
      title: "Asia Semiconductor Manufacturing Eco-System",
      description: "Deep understanding of Asian semiconductor manufacturing, especially China's resources",
      color: "#00d9ff",
    },
    {
      icon: LineChart,
      title: "European Standards",
      description: "European quality culture, compliance requirements, and customer communication practices",
      color: "#a855f7",
    },
  ];

  return (
    <section id="expertise" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00d9ff]/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#00d9ff] font-mono text-sm uppercase tracking-wider">Our Expertise</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
            <span className="text-gradient-cyan-violet">Technical Excellence</span> Across Domains
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Decades of combined experience in semiconductor manufacturing, technology development, 
            and global operations
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            
            return (
              <div
                key={index}
                className="frosted-glass p-6 rounded-xl border border-white/10 hover:border-opacity-50 transition-all duration-500 group cursor-pointer"
                style={{
                  borderColor: `${area.color}20`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${area.color}15`,
                  }}
                >
                  <Icon size={28} style={{ color: area.color }} />
                </div>
                
                <h3 className="text-lg font-display font-bold mb-3 transition-colors duration-300" style={{ color: area.color }}>
                  {area.title}
                </h3>
                
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Industry Images Showcase */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative rounded-xl overflow-hidden border border-[#00d9ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 group hover:glow-cyan">
            <img
              src="/images/semiconductor-wafer-1.jpg"
              alt="Semiconductor wafer inspection"
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <h4 className="text-lg font-display font-bold text-[#00d9ff]">Wafer Fabrication</h4>
              <p className="text-xs text-foreground/60">Advanced cleanroom operations</p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-[#a855f7]/20 hover:border-[#a855f7]/50 transition-all duration-500 group hover:glow-violet">
            <img
              src="/images/semiconductor-fabrication.jpg"
              alt="Semiconductor fabrication facility"
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <h4 className="text-lg font-display font-bold text-[#a855f7]">Manufacturing Process</h4>
              <p className="text-xs text-foreground/60">Precision semiconductor production</p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-[#fbbf24]/20 hover:border-[#fbbf24]/50 transition-all duration-500 group hover:glow-amber">
            <img
              src="/images/semiconductor-equipment.jpg"
              alt="Semiconductor equipment"
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <h4 className="text-lg font-display font-bold text-[#fbbf24]">Advanced Equipment</h4>
              <p className="text-xs text-foreground/60">State-of-the-art technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
