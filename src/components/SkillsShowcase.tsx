
import React from 'react';
import { motion } from 'framer-motion';

const SkillsShowcase = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 98, color: 'from-blue-500 to-blue-600' },
        { name: 'TypeScript', level: 80, color: 'from-yellow-500 to-orange-700' },
        { name: 'Vite', level: 85, color: 'from-red-500 to-red-700' },
        { name: 'Angular', level: 70, color: 'from-gray-700 to-gray-800' },
        { name: 'Tailwind CSS', level: 95, color: 'from-cyan-500 to-teal-500' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 50, color: 'from-green-500 to-green-600' },
        { name: 'Python', level: 70, color: 'from-yellow-500 to-orange-500' },
        { name: 'PHP', level:  98, color: 'from-gray-500 to-gray-600' },
        { name: 'PostgreSQL', level: 80, color: 'from-blue-700 to-blue-800' },
        { name: 'MySQL', level: 95, color: 'from-red-500 to-red-600' },
      ]
    },
    {
      title: 'DevOps & Outils',
      skills: [
        { name: 'Docker', level: 85, color: 'from-blue-500 to-blue-700' },
        { name: 'AWS', level: 78, color: 'from-orange-500 to-orange-600' },
        { name: 'Git', level: 93, color: 'from-red-500 to-red-600' },
        { name: 'Kali Linux', level: 80, color: 'from-gray-600 to-gray-700' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black mb-4">
            Expertise Technique
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Maîtrise complète des technologies modernes pour créer des solutions innovantes
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white opacity-30 rounded-full"
                          animate={{
                            x: ['-100%', '100%']
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
