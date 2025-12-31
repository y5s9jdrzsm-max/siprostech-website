/**
 * Services Component
 * Design Philosophy: Industrial Futurism
 * - Three main service cards with custom generated images
 * - Layered panels with frosted glass effects
 * - Hover interactions with glow effects
 */

import { ArrowRight, Briefcase, Package, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: Briefcase,
      title: "Foundry Management Consultancy",
      description: "Combining founder experience at global foundries and European design companies, we help European semiconductor enterprises select optimal foundries, evaluate process platforms, plan quality/reliability strategies, assess suppliers, balance cost/lead time/capacity, and connect with IP vendors.",
      image: "/images/services-consultancy.png",
      color: "#00d9ff",
      features: [
        "Foundry selection and strategy",
        "Process platform evaluation and feasibility analysis",
        "Quality and reliability planning",
        "Supplier assessment and risk management",
      ],
    },
    {
      id: 2,
      icon: Package,
      title: "Equipment & Silicon Materials Supply",
      description: "Help European customers access high-quality, customizable, cost-effective semiconductor equipment, parts, and materials from Asia. Particular strength in standard and custom silicon wafers—from specification definition to supplier matching to quality feedback.",
      image: "/images/services-equipment.png",
      color: "#a855f7",
      features: [
        "Semiconductor production and test equipment",
        "Equipment components and consumables",
        "Semiconductor raw materials",
        "Standard and custom silicon wafers (core strength)",
      ],
    },
    {
      id: 3,
      icon: FlaskConical,
      title: "Engineering & Lab Outsourcing Services",
      description: "Flexible, customizable outsourcing support for European semiconductor companies facing high labor costs and limited engineering resources. From simple assembly and testing to advanced failure analysis and reliability characterization.",
      image: "/images/services-laboratory.png",
      color: "#fbbf24",
      features: [
        "Custom testing and verification services",
        "Packaging and assembly support",
        "Reliability testing",
        "Failure analysis (FA) coordination and probe cards",
      ],
    },
  ];

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0a0e14] to-background"></div>
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#00d9ff] font-mono text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
            Three Core <span className="text-gradient-cyan-violet">Service Pillars</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Foundry consultancy, equipment & materials supply, and outsourced engineering services—all designed to help European semiconductor companies access Asia's resources with lower risk and full compliance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Image Side */}
                <div className={`relative ${isEven ? "" : "lg:col-start-2"}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-opacity-50 transition-all duration-500 group"
                    style={{ borderColor: `${service.color}40` }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    
                    {/* Floating Icon Badge */}
                    <div
                      className="absolute top-6 right-6 w-16 h-16 rounded-xl flex items-center justify-center frosted-glass border transition-all duration-500 group-hover:scale-110"
                      style={{
                        borderColor: `${service.color}40`,
                        backgroundColor: `${service.color}10`,
                      }}
                    >
                      <Icon size={32} style={{ color: service.color }} />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}>
                  <div className="frosted-glass p-8 md:p-10 rounded-2xl border border-white/10 hover:border-opacity-30 transition-all duration-500"
                    style={{ borderColor: `${service.color}20` }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${service.color}20` }}
                      >
                        <Icon size={24} style={{ color: service.color }} />
                      </div>
                      <span className="text-sm font-mono" style={{ color: service.color }}>
                        Service {String(service.id).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-3xl font-display font-bold mb-4" style={{ color: service.color }}>
                      {service.title}
                    </h3>

                    <p className="text-foreground/80 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: service.color }}
                          ></div>
                          <span className="text-foreground/70">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="border-2 font-semibold transition-all duration-300 hover:scale-105"
                      style={{
                        borderColor: service.color,
                        color: service.color,
                      }}
                      asChild
                    >
                      <a href="#contact">
                        Learn More
                        <ArrowRight className="ml-2" size={18} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
