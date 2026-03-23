import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-2xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">Things I've built — from idea to deployment.</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 mt-10">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="group relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-semibold">{proj.title}</h3>
                      {proj.badge && (
                        <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/30 px-2 py-0.5 text-[10px] font-medium text-primary">
                          {proj.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground/60">{proj.period}</p>
                  </div>
                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <button
                        className="inline-flex h-8 items-center rounded-md border border-border/50 px-3 text-xs bg-muted/30 hover:bg-muted/50 text-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        aria-label={`View details for ${proj.title}`}
                      >
                        Details
                      </button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
                      <Dialog.Content className="fixed left-1/2 top-1/2 w-[90vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border/50 bg-card/95 backdrop-blur-md p-6 shadow-2xl focus:outline-none">
                        <Dialog.Title className="text-lg font-semibold">{proj.title}</Dialog.Title>
                        {proj.badge && (
                          <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/30 px-2 py-0.5 text-[10px] font-medium text-primary mt-1">
                            {proj.badge}
                          </span>
                        )}
                        <Dialog.Description className="text-sm text-muted-foreground mt-1">{proj.period}</Dialog.Description>
                        <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                          {proj.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                        <div className="mt-6 flex gap-3">
                          {proj.links.code && (
                            <a href={proj.links.code} className="inline-flex items-center gap-2 rounded-md border border-border/50 px-4 py-2 text-sm hover:bg-muted/50 transition-all" target="_blank" rel="noopener noreferrer">
                              <FaGithub /> View Code
                            </a>
                          )}
                          {proj.links.demo && (
                            <a href={proj.links.demo} className="inline-flex items-center gap-2 rounded-md border border-border/50 px-4 py-2 text-sm hover:bg-muted/50 transition-all" target="_blank" rel="noopener noreferrer">
                              <FaExternalLinkAlt /> Live Demo
                            </a>
                          )}
                        </div>
                        <Dialog.Close asChild>
                          <button className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-md border border-border/50 hover:bg-muted/50 focus-visible:outline-none" aria-label="Close">×</button>
                        </Dialog.Close>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                </div>

                <div className="mt-2 space-y-1.5">
                  {proj.bullets.slice(0, 2).map((b, i) => (
                    <p key={i} className="text-sm text-muted-foreground leading-relaxed">{b}</p>
                  ))}
                </div>

                {proj.tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {proj.tags.map((t, i) => (
                      <span key={i} className="inline-flex items-center rounded-md border border-border/50 px-2 py-1 text-[11px] text-muted-foreground bg-muted/30">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-3 mt-4">
                  {proj.links.code ? (
                    <a href={proj.links.code} className="inline-flex items-center gap-2 rounded-md border border-border/50 px-3 py-2 text-sm hover:bg-muted/50 transition-all" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> GitHub
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-md border border-border/30 px-3 py-2 text-sm text-muted-foreground/40 cursor-not-allowed">
                      <FaGithub /> GitHub
                    </span>
                  )}
                  {proj.links.demo ? (
                    <a href={proj.links.demo} className="inline-flex items-center gap-2 rounded-md border border-border/50 px-3 py-2 text-sm hover:bg-muted/50 transition-all" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Live
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-md border border-border/30 px-3 py-2 text-sm text-muted-foreground/40 cursor-not-allowed">
                      <FaExternalLinkAlt /> Live
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
