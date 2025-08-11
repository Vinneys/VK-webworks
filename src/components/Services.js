import React from 'react';
import { Globe, Smartphone, ShoppingCart, Database, Search, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Custom Website Development",
      description: "Professional websites built from scratch tailored to your brand and business requirements.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Design",
      description: "Websites that look and work perfectly on all devices, with mobile users in mind first.",
      features: ["Mobile Responsive", "Touch Friendly", "Fast Performance", "Cross-Platform"]
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce Solutions",
      description: "Complete online stores with secure payment processing and inventory management.",
      features: ["Payment Integration", "Product Management", "Order Tracking", "Security"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Web Applications",
      description: "Custom web applications that streamline your business processes and improve efficiency.",
      features: ["Custom Features", "User Management", "Data Analytics", "API Integration"]
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO & Performance",
      description: "Optimize your website for search engines and ensure lightning-fast loading times.",
      features: ["SEO Optimization", "Speed Optimization", "Analytics Setup", "Performance Monitoring"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and maintenance to keep your website running smoothly.",
      features: ["Regular Updates", "Security Patches", "Backup Services", "24/7 Support"]
    }
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer comprehensive web development services to help your business succeed online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together. 
              We'll work closely with you to understand your needs and deliver a solution that exceeds expectations.
            </p>
            <a href="#contact" className="btn btn-primary text-lg px-8 py-4">
              Let's Talk About Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 