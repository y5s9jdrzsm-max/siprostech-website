/**
 * Contact Component
 * Design Philosophy: Industrial Futurism
 * - Frosted glass contact form
 * - Company information cards
 * - Interactive form with validation styling
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    toast.success("Message sent! We'll get back to you soon.", {
      description: "Thank you for contacting Siprostech",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Registered Office",
      content: "160 Robinson Road, #14-04",
      description: "Singapore Business Federation Centre, Singapore (068914)",
      color: "#00d9ff",
    },
    {
      icon: Mail,
      title: "Email",
      content: "zzwang@siprostech.com",
      description: "We respond within 1-2 business days",
      color: "#a855f7",
    },
    {
      icon: Phone,
      title: "Company Details",
      content: "Registration No: 202126313R",
      description: "Established: 29 July 2021",
      color: "#fbbf24",
    },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#00d9ff]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#a855f7]/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#00d9ff] font-mono text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
            Let's <span className="text-gradient-cyan-violet">Connect</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Whether you need foundry consultancy, equipment sourcing, or lab services, our team is ready to discuss how SIPROSTECH can support your semiconductor strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="frosted-glass p-8 md:p-10 rounded-2xl border border-[#00d9ff]/20">
            <h3 className="text-2xl font-display font-bold text-[#00d9ff] mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background/50 border-white/10 focus:border-[#00d9ff] transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background/50 border-white/10 focus:border-[#00d9ff] transition-all duration-300"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground/80 mb-2">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-background/50 border-white/10 focus:border-[#00d9ff] transition-all duration-300"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-background/50 border-white/10 focus:border-[#00d9ff] transition-all duration-300 resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#00d9ff] hover:bg-[#00d9ff]/90 text-background font-bold text-lg py-6 transition-all duration-300 hover:glow-cyan hover:scale-105"
              >
                Send Message
                <Send className="ml-2" size={20} />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="frosted-glass p-8 rounded-2xl border border-[#a855f7]/20">
              <h3 className="text-2xl font-display font-bold text-[#a855f7] mb-6">Contact Information</h3>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Whether you need consultancy services, equipment supply, or laboratory testing, 
                our team is ready to assist you with expert semiconductor solutions.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  
                  return (
                    <div key={index} className="flex gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${info.color}20` }}
                      >
                        <Icon size={24} style={{ color: info.color }} />
                      </div>
                      <div>
                        <h4 className="font-display font-bold mb-1" style={{ color: info.color }}>
                          {info.title}
                        </h4>
                        <p className="text-foreground font-medium">{info.content}</p>
                        <p className="text-sm text-foreground/60">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="frosted-glass p-8 rounded-2xl border border-[#a855f7]/20">
              <h4 className="font-display font-bold text-[#a855f7] mb-4">Why Choose SIPROSTECH?</h4>
              <ul className="space-y-3">
                {[
                  "10+ years European semiconductor ecosystem experience",
                  "20+ years Deep foundry and semiconductor supply chain network",
                  "Engineer-led approach with foundry expertise",
                  "Comprehensive service portfolio: consulting, materials, lab services",
                  "Execution-focused with traceability and compliance mindset",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
