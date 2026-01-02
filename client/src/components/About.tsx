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
          <span className="text-[#00d9ff] font-mono text-sm uppercase tracking-wider">About Siprostech</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
            <span className="text-gradient-cyan-violet">Who We Are</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Siprostech is a semiconductor consulting and sourcing company focused on enabling reliable, scalable, and cost-effective semiconductor operations across regions. We bridge European technology companies with Asian manufacturing and supply chain ecosystems, providing execution-driven, engineering-led support across the full semiconductor lifecycle.
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
              <h3 className="text-2xl font-display font-bold text-[#00d9ff] mb-4">Founder Background</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The founder has over 10 years of hands-on experience working with leading global semiconductor foundries and more than 10 European IC design companies.
              </p>
              <p className="text-foreground/70 text-sm leading-relaxed">
                This experience spans technology development, foundry management, IP sourcing, qualification, test strategy, and global supply chain operations—covering the full semiconductor lifecycle from design to mass production.
              </p>
            </div>

            <div className="frosted-glass p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-display font-bold text-[#a855f7] mb-4">Our Positioning</h3>
              <ul className="text-foreground/70 text-sm leading-relaxed space-y-2">
                <li><strong className="text-[#a855f7]">Switzerland</strong> – technical trust, quality mindset, neutrality</li>
                <li><strong className="text-[#a855f7]">Singapore</strong> – global coordination and international trade hub</li>
                <li><strong className="text-[#a855f7]">China & Asia</strong> – manufacturing execution, engineering depth, and supply chain flexibility</li>
              </ul>
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
