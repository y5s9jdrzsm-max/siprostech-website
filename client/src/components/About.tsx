/**
 * About Component
 * Design Philosophy: Industrial Futurism
 * - Asymmetric layout with image and content split
 * - Frosted glass cards with layered depth
 * - Timeline visualization of company milestones
 */

import { Building2, Users, Award, TrendingUp } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Building2, value: "2021", label: "Founded in Singapore" },
    { icon: Users, value: "10+", label: "Years EU Experience" },
    { icon: Award, value: "Expert", label: "Foundry Professionals" },
    { icon: TrendingUp, value: "Global", label: "Supply Chain Network" },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#00d9ff]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#a855f7]/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#00d9ff] font-mono text-sm uppercase tracking-wider">About SIPROSTECH</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
            <span className="text-gradient-cyan-violet">Bridging</span> Europe & Asia
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A Singapore-based semiconductor professional services company founded in 2021 by industry veterans with 20+ years of global experience. We connect European semiconductor enterprises with Asia's mature, efficient, and compliant semiconductor ecosystem.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#00d9ff]/20 hover:border-[#00d9ff]/50 transition-all duration-500 hover:glow-cyan">
              <img
                src="/images/about-bridge.png"
                alt="Bridging China and Europe semiconductor industries"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 frosted-glass p-6 rounded-xl border border-[#fbbf24]/30 glow-amber">
              <div className="text-3xl font-display font-bold text-[#fbbf24]">Singapore</div>
              <div className="text-sm text-foreground/60 font-mono">Strategic Hub</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="frosted-glass p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-display font-bold text-[#00d9ff] mb-4">Our Founder & Team</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                SIPRO Technology Pte. Ltd. was established in Singapore on 29 July 2021 by semiconductor industry veterans with 20+ years of combined global experience.
              </p>
              <p className="text-foreground/70 text-sm leading-relaxed mb-3">
                Our founders have worked ~20 years at world-leading semiconductor foundries and European chip design companies, gaining deep understanding of the complete chip lifecycle: R&D, process development, wafer fabrication, packaging, testing, reliability verification, and mass production.
              </p>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Expertise spans semiconductor manufacturing, advanced & mature process development, quality & reliability management, global supply chain optimization, and IP/third-party vendor management. We understand both European quality standards and Asian manufacturing efficiency—making us the ideal bridge between two semiconductor ecosystems.
              </p>
            </div>

            <div className="frosted-glass p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-display font-bold text-[#a855f7] mb-4">Our Mission</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Help European semiconductor enterprises access global best-in-class manufacturing, materials, equipment, and engineering services with lower risk, higher efficiency, full traceability and compatibility.
              </p>
              <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                We are not simple traders or brokers. We operate as engineers and industry managers, delivering semiconductor solutions that are implementable, traceable, and built for long-term partnership.
              </p>
              <div className="flex flex-wrap gap-2">
                {["End-to-End Process Understanding", "Europe + Asia Dual Expertise", "Engineering-Driven Solutions", "SME-Friendly Support", "Full Compliance & Traceability"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono bg-[#a855f7]/10 text-[#a855f7] rounded-full border border-[#a855f7]/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colors = ["#00d9ff", "#a855f7", "#fbbf24", "#00d9ff"];
            const color = colors[index % colors.length];
            
            return (
              <div
                key={index}
                className="frosted-glass p-6 rounded-xl border border-white/10 text-center hover:border-[#00d9ff]/50 transition-all duration-500 group hover:glow-cyan"
              >
                <div
                  className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <Icon size={24} style={{ color }} />
                </div>
                <div className="text-3xl font-display font-bold mb-2" style={{ color }}>
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
