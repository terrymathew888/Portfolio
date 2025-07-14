import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex"
            >
              <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20 w-full flex flex-col">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>
                <div className="space-y-2 flex-grow">
                  <h4 className="text-xl font-semibold text-purple-300">University of Texas at Dallas</h4>
                  <p className="text-gray-300">B.S. in Computer Science</p>
                  <p className="text-gray-400">Expected May 2026</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-purple-500/20">
                  <h5 className="font-semibold text-purple-300 mb-3">Relevant Coursework</h5>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="bg-purple-900/30 text-purple-200 px-2 py-1 rounded text-sm text-center">Data Structures & Algorithms</span>
                    <span className="bg-purple-900/30 text-purple-200 px-2 py-1 rounded text-sm text-center">Software Engineering</span>
                    <span className="bg-purple-900/30 text-purple-200 px-2 py-1 rounded text-sm text-center">Computer Networks</span>
                    <span className="bg-purple-900/30 text-purple-200 px-2 py-1 rounded text-sm text-center">System Programming</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex"
            >
              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/20 w-full flex flex-col">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">Passion</h3>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-300 leading-relaxed">
                    Passionate about building innovative web applications that solve real-world problems. 
                    From developing blockchain-powered real estate platforms with automated escrow systems 
                    to creating full-featured SaaS invoice management solutions, I enjoy working across the 
                    entire technology stack. My focus is on creating scalable, user-friendly applications 
                    using modern frameworks and emerging technologies like smart contracts.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Currently pursuing my Computer Science degree at UT Dallas while building practical applications 
              that showcase my technical skills. Through projects like PropChain, a blockchain real estate platform 
              with gas-optimized smart contracts, and InvoiceFlow, a comprehensive SaaS invoice management system, 
              I've gained experience in both traditional web development and emerging blockchain technologies.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}