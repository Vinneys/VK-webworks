import React from 'react';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "1+",
      label: "Happy Clients",
      description: "Satisfied customers who trust us with their projects"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "1",
      label: "Completed Projects",
      description: "Successfully delivered websites and applications"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: "100%",
      label: "On-Time Delivery",
      description: "We always meet our deadlines and commitments"
    }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on quality. Every line of code, every design element, and every feature is crafted with attention to detail."
    },
    {
      title: "Client Focused",
      description: "Your success is our success. We work closely with you to understand your needs and deliver solutions that exceed expectations."
    },
    {
      title: "Innovation Driven",
      description: "We stay up-to-date with the latest technologies and best practices to ensure your project is built with modern, efficient solutions."
    },
    {
      title: "Transparent Communication",
      description: "Clear, honest communication throughout the entire process. You'll always know what's happening and when to expect updates."
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About VK WebWorks
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are passionate web developers dedicated to creating exceptional digital experiences 
              that help businesses thrive in the online world. Our mission is to transform your 
              vision into reality through innovative web solutions.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With expertise in modern web technologies and a keen eye for design, we build 
              websites that not only look great but also drive results. Every project we take on 
              is an opportunity to create something amazing.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Custom Solutions</h4>
                  <p className="text-gray-600">Every project is unique, and we tailor our approach to your specific needs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Modern Technology</h4>
                  <p className="text-gray-600">We use the latest technologies and frameworks to ensure your website is future-proof.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                  <p className="text-gray-600">We're here for you even after your project is complete, providing maintenance and support.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="font-semibold text-gray-900">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            These core values guide everything we do and ensure we deliver the best possible 
            experience for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help bring your vision to life. 
              We're excited to learn about your business and create something amazing together.
            </p>
            <a href="#contact" className="btn btn-primary text-lg px-8 py-4">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 