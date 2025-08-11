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
    <section id="services" className="section bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-in-up">Our Services</h2>
          <p className="section-subtitle animate-fade-in-up animation-delay-200">
            We offer comprehensive web development services to help your business succeed online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-3 group animate-fade-in-up card-hover"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in-up animation-delay-600">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover-lift">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together. 
              We'll work closely with you to understand your needs and deliver a solution that exceeds expectations.
            </p>
            <a href="#contact" className="btn-animated inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
              Let's Talk About Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 