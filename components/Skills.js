import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Solidity", "SQL"],
      gradient: "from-gray-700 to-gray-600"
    },
    {
      title: "Frameworks",
      icon: Layers,
      skills: ["React", "Vue.js", "Next.js", "Node.js", "Web3.js"],
      gradient: "from-gray-600 to-gray-700"
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Firebase", "Git", "Docker", "AWS EC2", "Firestore", "Hardhat", "MetaMask"],
      gradient: "from-gray-700 to-gray-800"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
                  
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 hover:border-gray-500 transition-all duration-500 h-full shadow-lg shadow-black/25">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-full flex items-center justify-center shadow-md`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-200">{category.title}</h3>
                  </div>
                                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: (index * 0.2) + (idx * 0.1) }}
                        viewport={{ once: true }}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-700 hover:text-gray-200 transition-colors cursor-default border border-gray-600"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}