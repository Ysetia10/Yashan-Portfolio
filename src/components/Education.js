import React from 'react';
import { education } from '../data/education';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 bg-foreground/[0.02]">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Education
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-emerald-500 to-teal-500"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative pl-12"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="absolute left-2 top-0 w-4 h-4 bg-gradient-to-r from-primary to-emerald-500 rounded-full border-2 border-background shadow-lg flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                />

                <motion.div
                  className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-5 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-emerald-500/20 flex items-center justify-center border border-primary/30 flex-shrink-0 mt-0.5">
                        <FaGraduationCap className="text-primary text-xs" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold">{edu.degree}</h3>
                        <p className="text-sm text-primary font-medium mt-0.5">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground mt-1">{edu.grade}</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted/30 px-3 py-1 rounded-full border border-border/50 self-start sm:self-auto whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
