import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent mb-3">
                Terry Mathew
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Computer Science student passionate about full-stack development and blockchain technology.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-200 mb-3">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-gray-200 transition-colors text-sm">About</a>
                <a href="#projects" className="block text-gray-400 hover:text-gray-200 transition-colors text-sm">Projects</a>
                <a href="#skills" className="block text-gray-400 hover:text-gray-200 transition-colors text-sm">Skills</a>
                <a href="#contact" className="block text-gray-400 hover:text-gray-200 transition-colors text-sm">Contact</a>
              </div>
            </div>
            
            {/* Connect Section */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-gray-200 mb-3">Let's Connect</h4>
              <div className="flex justify-center md:justify-end space-x-4 mb-3">
                <a 
                  href="mailto:tsm210004@utdallas.edu" 
                  className="w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                >
                  <Mail className="w-4 h-4 text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/terry-mathew1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a 
                  href="https://github.com/terrymathew888" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                >
                  <Github className="w-4 h-4 text-white" />
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-end text-gray-400 text-sm">
                <MapPin className="w-3 h-3 mr-1" />
                <span>Dallas, TX</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 Terry Mathew. Built with React & Next.js
              </div>
              <div className="flex items-center space-x-4 text-gray-400 text-sm">
                <span>Available for opportunities</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}