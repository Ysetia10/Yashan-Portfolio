import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import { profile } from '../data/profile';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="container py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 0.8, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Text side */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-primary font-medium mb-2 tracking-wide uppercase">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">{profile.name}</h1>
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ReactTyped
              strings={profile.titles}
              typeSpeed={50}
              backSpeed={40}
              backDelay={2000}
              loop
              className="bg-gradient-to-r from-primary via-emerald-500 to-teal-500 bg-clip-text text-transparent"
            />
          </motion.h2>

          {profile.bio.map((p, i) => (
            <motion.p
              key={i}
              className="mt-3 text-muted-foreground text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              {p}
            </motion.p>
          ))}

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Contact
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-4 mt-6 text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.a
              href={`mailto:${profile.social.email}`}
              aria-label="Email"
              className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-emerald-500/10 hover:from-primary/20 hover:to-emerald-500/20 transition-all duration-300 border border-border/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
            </motion.a>
            <motion.a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-emerald-500/10 hover:from-primary/20 hover:to-emerald-500/20 transition-all duration-300 border border-border/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-emerald-500/10 hover:from-primary/20 hover:to-emerald-500/20 transition-all duration-300 border border-border/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right side — avatar placeholder */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 rounded-2xl blur-lg opacity-20"
              animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative w-64 h-64 rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 to-emerald-500/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl font-bold text-primary-foreground">YS</span>
                </div>
                <p className="text-sm text-muted-foreground">Backend Engineer</p>
                <p className="text-xs text-primary font-medium mt-1">@ Bessegen Infotech</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
