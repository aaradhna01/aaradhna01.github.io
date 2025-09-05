import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  My Journey
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                I am a BCA graduate from CSJM University, Kanpur. My expertise includes frontend 
                (React.js, HTML, CSS), backend (Node.js, Express.js), and databases (PostgreSQL, 
                Sequelize ORM). I'm also learning GenAI tools like LangChain and LangGraph.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl text-center">
                <h4 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Years Learning</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl text-center">
                <h4 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Technologies</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-400 to-purple-600 p-8 rounded-2xl shadow-2xl">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  What I'm Passionate About
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Building scalable web applications
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Exploring Generative AI technologies
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Full-stack development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Problem-solving through code
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};