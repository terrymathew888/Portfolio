import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          {/* Center the contact card in the grid for desktop layouts */}
          <div className="grid md:grid-cols-2 gap-12 justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-2 flex justify-center"
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm w-full max-w-md">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Let's Connect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Email contact row */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <a
                        href="mailto:tsm210004@utdallas.edu"
                        className="text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        tsm210004@utdallas.edu
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn contact row */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">LinkedIn</h3>
                      <a
                        href="https://linkedin.com/in/terry-mathew-285115327"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        terry-mathew-285115327
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}