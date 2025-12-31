/*
 * Silicon Wafers Component
 * Design Philosophy: Industrial Futurism
 * - Highlights the core silicon wafer business
 * - Showcases technical capabilities and product categories
 * - Emphasizes manufacturing excellence and quality
 */

import { Cpu, Zap, Shield, Package, Layers, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SiliconWafers() {
  const productCategories = [
    {
      icon: Package,
      title: "Test & Monitor Wafers",
      description: "Process monitoring, equipment setup, and parametric testing",
      features: ["Monitor wafers", "Test wafers", "SSP/DSP options", "Thickness control"],
      color: "#00d9ff",
    },
    {
      icon: Layers,
      title: "Customized Silicon Wafers",
      description: "Ultra-flat, ultra-thin, ultra-thick, and specialty wafers",
      features: ["Ultra-flat wafers", "Ultra-thin/thick options", "High resistivity", "Taiko wafers"],
      color: "#a855f7",
    },
    {
      icon: Zap,
      title: "Film/Coated Wafers",
      description: "Metal and non-metal film wafers for material verification",
      features: ["Metal film wafers", "Non-metal films", "Multi-layer composites", "Process compatibility"],
      color: "#fbbf24",
    },
  ];

  const technicalSpecs = [
    { label: "Wafer Diameter", value: "2\" to 12\"" },
    { label: "Conductivity", value: "N-type / P-type" },
    { label: "Crystal Orientation", value: "⟨100⟩ / ⟨111⟩" },
    { label: "Dopants", value: "B, P, As" },
    { label: "Resistivity Range", value: "0.001 – 100+ Ω·cm" },
    { label: "Surface Finish", value: "SSP / DSP" },
  ];

  const capabilities = [
    {
      icon: TrendingUp,
      title: "Manufacturing Capacity",
      value: "2M+ wafers/year (4\"/6\")",
      subvalue: "1M+ wafers/year (8\")",
      color: "#00d9ff",
    },
    {
      icon: Shield,
      title: "Cleanroom Facility",
      value: "5,000+ m²",
      subvalue: "Advanced polished wafer lines",
      color: "#a855f7",
    },
    {
      icon: Cpu,
      title: "Quality Standard",
      value: "Zero-Defect Objective",
      subvalue: "RoHS & REACH Compliant",
      color: "#fbbf24",
    },
  ];

  return (
    <section id="silicon-wafers" className="relative py-24 bg-[#0a0e14] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full frosted-glass border border-[#00d9ff]/30 mb-6">
            <Cpu size={16} className="text-[#00d9ff]" />
            <span className="text-sm font-mono text-[#00d9ff]">Core Business</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6">
            <span className="text-gradient-cyan-violet">Silicon Wafer</span>
            <br />
            <span className="text-foreground">Solutions</span>
          </h2>

          <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-light">
            Customized and standard silicon wafer solutions for semiconductor manufacturing, testing, equipment qualification, and process development
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {productCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-xl frosted-glass border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#00d9ff]/20"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${category.color}15`,
                  }}
                >
                  <Icon size={24} style={{ color: category.color }} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-bold mb-2" style={{ color: category.color }}>
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/70 mb-4">{category.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {category.features.map((feature, i) => (
                    <li key={i} className="text-xs text-foreground/60 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full mt-1.5" style={{ backgroundColor: category.color }}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Technical Capabilities */}
        <div className="mb-20">
          <h3 className="text-2xl font-display font-bold mb-8 text-center">Technical Specifications</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalSpecs.map((spec, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-white/10 hover:border-[#00d9ff]/30 transition-colors"
              >
                <p className="text-xs text-foreground/60 mb-1">{spec.label}</p>
                <p className="text-sm font-mono text-[#00d9ff] font-semibold">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturing & Quality */}
        <div className="mb-20">
          <h3 className="text-2xl font-display font-bold mb-8 text-center">Manufacturing Excellence</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <div key={index} className="p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: `${cap.color}15`,
                    }}
                  >
                    <Icon size={20} style={{ color: cap.color }} />
                  </div>

                  <h4 className="font-display font-bold mb-2" style={{ color: cap.color }}>
                    {cap.title}
                  </h4>

                  <p className="text-sm font-mono text-foreground/80 mb-1">{cap.value}</p>
                  <p className="text-xs text-foreground/60">{cap.subvalue}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quality & Compliance */}
        <div className="p-8 rounded-xl border border-[#00d9ff]/20 bg-[#00d9ff]/5 mb-12">
          <h3 className="text-xl font-display font-bold mb-4 text-[#00d9ff]">Quality & Compliance</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-foreground/70 mb-3">
                <span className="font-semibold text-foreground">Zero-Defect Quality Objective</span> - Rigorous quality control throughout the manufacturing process
              </p>
            </div>

            <div>
              <p className="text-sm text-foreground/70 mb-3">
                <span className="font-semibold text-foreground">Full Regulatory Compliance</span> - RoHS, REACH, and environmental protection standards
              </p>
            </div>

            <div>
              <p className="text-sm text-foreground/70 mb-3">
                <span className="font-semibold text-foreground">Full Lifecycle Management</span> - Chemical substance management and sustainability practices
              </p>
            </div>

            <div>
              <p className="text-sm text-foreground/70 mb-3">
                <span className="font-semibold text-foreground">European Standards Aligned</span> - Meets European regulatory and sustainability expectations
              </p>
            </div>
          </div>
        </div>

        {/* Typical Applications */}
        <div className="mb-12">
          <h3 className="text-xl font-display font-bold mb-6 text-center">Typical Applications</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Semiconductor device manufacturing",
              "Wafer-level and device-level testing",
              "Advanced packaging & assembly development",
              "Equipment installation & qualification",
              "Chemical & material development",
              "Research & development activities",
            ].map((app, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00d9ff] mt-1.5 flex-shrink-0"></div>
                <p className="text-sm text-foreground/70">{app}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-foreground/70 mb-6">
            Need customized silicon wafer solutions? Our engineering team is ready to support your specific requirements.
          </p>

          <Button
            size="lg"
            className="bg-[#00d9ff] hover:bg-[#00d9ff]/90 text-[#0a0e14] font-semibold"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Request Wafer Specification
          </Button>
        </div>
      </div>
    </section>
  );
}
