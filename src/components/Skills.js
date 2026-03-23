import React from 'react';
import { skills } from '../data/skills';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-foreground/[0.02]">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-xl"
          animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">Languages, frameworks, and tools I work with.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              className={`relative rounded-xl border bg-card/50 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-border/50`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* no primary badge */}

              <h3 className="text-lg font-semibold mb-6 relative pb-3">
                <span className="bg-gradient-to-r from-primary via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  {category.title}
                </span>
                <motion.div
                  className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-emerald-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group relative flex flex-col items-center w-16"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="h-16 w-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-card to-muted/50 border border-border/50 group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="max-h-8 max-w-8 transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                    <span className="block text-center text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300 mt-2">
                      {skill.name}
                    </span>
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

export default Skills;
