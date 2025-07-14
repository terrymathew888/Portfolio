import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Zap, Shield, Users, Database } from 'lucide-react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "PropChain",
      subtitle: "Blockchain Real Estate Platform",
      description: "Full-stack dApp for property escrow automation with gas-optimized smart contracts and MetaMask integration.",
      technologies: ["React.js", "Solidity", "Web3.js", "Hardhat", "Ethereum"],
      highlights: [
        { icon: Shield, text: "Handles $50K+ simulated transactions" },
        { icon: Users, text: "Supports 15+ concurrent users" },
        { icon: Zap, text: "25% gas cost reduction" }
      ],
      gradient: "from-purple-600 to-blue-600"
    },
    {
      id: 2,
      title: "InvoiceFlow",
      subtitle: "SaaS Invoice Management",
      description: "Role-based SaaS platform with real-time synchronization, PWA capabilities, and comprehensive PDF export features.",
      technologies: ["Vue.js 3", "Firebase", "Firestore", "PWA"],
      highlights: [
        { icon: Database, text: "100+ invoice records managed" },
        { icon: Users, text: "25+ active users" },
        { icon: Zap, text: "2-second load times" }
      ],
      gradient: "from-blue-600 to-purple-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Card className="h-full bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm">
                  <CardHeader className="relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-10 transition-opacity duration-500 ${hoveredProject === project.id ? 'opacity-20' : ''}`}></div>
                    <CardTitle className="text-2xl font-bold text-white relative z-10">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-lg relative z-10">
                      {project.subtitle}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-3">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                            <highlight.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-300">{highlight.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge 
                          key={idx}
                          variant="secondary"
                          className="bg-slate-700 text-gray-300 hover:bg-slate-600"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4 pt-4">
                      <a 
                        href={project.id === 2 ? "https://github.com/terrymathew888/InvoiceFlow" : "#"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                      <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}