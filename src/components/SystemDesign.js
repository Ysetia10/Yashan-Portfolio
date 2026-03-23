import React from 'react';
import { systemDesigns } from '../data/systemDesigns';
import { motion } from 'framer-motion';
import { FaServer } from 'react-icons/fa';

const SystemDesign = () => {
  return (
    <section id="system-design" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-10 left-1/3 w-56 h-56 bg-gradient-to-r from-teal-500/8 to-emerald-500/8 rounded-full blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
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
          <div className="flex items-center justify-center gap-2 mb-3">
            <FaServer className="text-primary text-xl" />
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              System Design & Engineering Thinking
            </h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            Exploring scalable system architectures — from design decisions to trade-offs.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {systemDesigns.map((design, idx) => (
            <motion.div
              key={idx}
              className="group relative rounded-xl border border-primary/20 bg-card/50 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-emerald-500/20 flex items-center justify-center border border-primary/30">
                    <FaServer className="text-primary text-xs" />
                  </div>
                  <h3 className="text-lg font-semibold">{design.title}</h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{design.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {design.tags.map((tag, i) => (
                    <span key={i} className="inline-flex items-center rounded-md border border-primary/20 px-2 py-1 text-[11px] text-primary bg-primary/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  disabled
                  className="inline-flex items-center rounded-md border border-border/30 px-4 py-2 text-sm text-muted-foreground/50 cursor-not-allowed"
                  title="Coming soon"
                >
                  View Design
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemDesign;
