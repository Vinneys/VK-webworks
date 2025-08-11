import React from 'react';
import { ExternalLink, Github, Globe } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Business Website",
      description: "A modern, responsive website for a local business with e-commerce functionality and contact forms.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "JavaScript", "CSS3", "HTML5"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Coming Soon",
      description: "More amazing projects are in development. Stay tuned for updates!",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      comingSoon: true
    },
    {
      id: 3,
      title: "Coming Soon",
      description: "More amazing projects are in development. Stay tuned for updates!",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      comingSoon: true
    }
  ];

  return (
    <section id="portfolio" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Take a look at some of our recent work and see how we've helped businesses succeed online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${
                project.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {project.comingSoon && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">Coming Soon</span>
                  </div>
                )}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {!project.comingSoon && (
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="flex-1 btn btn-primary justify-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="flex-1 btn btn-secondary justify-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Want to See Your Project Here?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's work together to create something amazing that showcases your business 
              and helps you achieve your goals online.
            </p>
            <a href="#contact" className="btn btn-primary text-lg px-8 py-4">
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 