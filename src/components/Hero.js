import React from 'react';
import { ArrowRight, Code, Smartphone, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <Zap className="h-4 w-4 mr-2" />
              Professional Web Development
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              We Build
              <span className="text-blue-600 block">Amazing Websites</span>
              That Convert
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg lg:max-w-none">
              Transform your business with custom, responsive websites that look great on every device and drive real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="btn btn-primary text-lg px-8 py-4">
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#portfolio" className="btn btn-secondary text-lg px-8 py-4">
                View Our Work
              </a>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Custom Development</h3>
              <p className="text-gray-600 text-sm">Tailored solutions built specifically for your business needs</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mobile First</h3>
              <p className="text-gray-600 text-sm">Responsive design that works perfectly on all devices</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast & Secure</h3>
              <p className="text-gray-600 text-sm">Optimized performance and security best practices</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Modern Tech</h3>
              <p className="text-gray-600 text-sm">Built with the latest technologies and frameworks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 