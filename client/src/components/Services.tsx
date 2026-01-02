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
      title: "Foundry & Manufacturing Support",
      description: "We support European semiconductor companies in selecting, qualifying, and managing foundry and manufacturing partners across Asia.",
      image: "/images/services-consultancy.png",
      color: "#00d9ff",
      features: [
        "Foundry benchmarking and qualification support",
        "Specialty and mature node strategy",
        "Process option evaluation and risk assessment",
        "Foundry and OSAT technical interface coordination",
      ],
    },
    {
      id: 2,
      icon: Package,
      title: "Reliability, Qualification, Test & Failure Analysis",
      description: "We provide reliability, qualification, test, and failure analysis services equivalent to those offered by established European test houses. All activities are executed through experienced Asian laboratories with engineering-driven project management aligned with European automotive and industrial quality expectations.",
      image: "/images/services-equipment.png",
      color: "#a855f7",
      features: [
        "Reliability and qualification plan definition (AEC-Q / industrial / custom)",
        "Stress test strategy and execution (HTOL, HAST, TC, Burn-in, etc.)",
        "Wafer-level and package-level test services",
        "Failure analysis coordination and result interpretation",
      ],
    },
    {
      id: 3,
      icon: FlaskConical,
      title: "Engineering Sample, NPI & Ramp-Up Support",
      description: "We support customers throughout early project phases, from MPW and pilot runs to production ramp-up, with engineering sample management, traceability, and coordination across foundry, OSAT, test, and customer teams.",
      image: "/images/services-laboratory.png",
      color: "#fbbf24",
      features: [
        "Engineering sample management and traceability",
        "Re-test, re-spin, and qualification decision support",
        "Coordination across foundry, OSAT, test, and customer teams",
        "Production ramp-up support",
      ],
    },
    {
      id: 4,
      icon: Package,
      title: "Semiconductor Equipment, Components & Manufacturing Ecosystem",
      description: "We support sourcing and ecosystem integration of semiconductor equipment, components, and manufacturing resources, with a strong focus on China-origin supply chains. Our services address the increasing demand for compatible and cost-effective alternatives in semiconductor manufacturing, assembly, and test environments.",
      image: "/images/services-equipment.png",
      color: "#00d9ff",
      features: [
        "Semiconductor production and backend equipment",
        "Fully compatible spare parts and critical components",
        "Assembly and test manufacturing resources",
        "Local technical interface and ecosystem coordination in Europe",
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
          <span className="text-[#00d9ff] font-mono text-sm uppercase tracking-wider">Services</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
            Our <span className="text-gradient-cyan-violet">Service Portfolio</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            We support customers from early technology decisions through manufacturing, qualification, ramp-up, and long-term supply chain operation—focusing on practical execution rather than theoretical consulting.
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
