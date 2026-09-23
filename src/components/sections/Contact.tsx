import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-surface-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold text-primary-accent uppercase tracking-wider mb-2">
            Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-text-light">
            Let&apos;s Work Together
          </h3>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-8 text-center h-full">
              <Mail className="w-10 h-10 text-primary-accent mx-auto mb-4" />
              <h4 className="text-xl font-bold text-text-light mb-2">Email</h4>
              <a href="mailto:rahiakber@gmail.com" className="text-text-muted hover:text-primary-accent transition">
                rahiakber@gmail.com
              </a>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8 text-center h-full">
              <Github className="w-10 h-10 text-primary-accent mx-auto mb-4" />
              <h4 className="text-xl font-bold text-text-light mb-2">GitHub</h4>
              <a href="https://github.com/rahiakber" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary-accent transition">
                github.com/rahiakber
              </a>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-8 text-center h-full">
              <Linkedin className="w-10 h-10 text-primary-accent mx-auto mb-4" />
              <h4 className="text-xl font-bold text-text-light mb-2">LinkedIn</h4>
              <a href="https://www.linkedin.com/in/akber-hossin-3b531041/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary-accent transition">
                https://www.linkedin.com/in/akber-hossin-3b531041/
              </a>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
