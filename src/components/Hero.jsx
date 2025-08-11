import React from 'react';
import { ArrowRight, Code, Smartphone, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-8 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8 shadow-sm animate-fade-in-up">
              <Zap className="h-4 w-4 mr-2 animate-pulse" />
              Professional Web Development
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight animate-fade-in-up animation-delay-200">
              We Build
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 block animate-fade-in-up animation-delay-400">Amazing Websites</span>
              That Convert
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-lg lg:max-w-none leading-relaxed animate-fade-in-up animation-delay-600">
              Transform your business with custom, responsive websites that look great on every device and drive real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-800">
              <a href="#contact" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-blue-600 hover:border-blue-700 hover:scale-105">
                Start Your Project
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a href="#portfolio" className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-blue-600 hover:bg-blue-600 hover:text-white hover:scale-105">
                View Our Work
                <div className="ml-2 w-2 h-2 bg-current rounded-full animate-pulse"></div>
              </a>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-3 group animate-fade-in-up animation-delay-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Development</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Tailored solutions built specifically for your business needs</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-3 group animate-fade-in-up animation-delay-400 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile First</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Responsive design that works perfectly on all devices</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-3 group animate-fade-in-up animation-delay-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast & Secure</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Optimized performance and security best practices</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-3 group animate-fade-in-up animation-delay-600 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Tech</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Built with the latest technologies and frameworks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 