import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Github, Linkedin, Mail } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="py-20 md:py-32 border-b border-surface-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-6xl md:text-7xl font-extrabold leading-tight text-text-light"
              variants={childVariants}
            >
              Akber Hossin
            </motion.h1>
            <motion.h2
              className="text-3xl md:text-4xl font-light text-primary-accent"
              variants={childVariants}
            >
              Senior Software Developer | .NET & SQL Server Specialist
            </motion.h2>
            <motion.p
              className="text-xl text-text-muted max-w-xl"
              variants={childVariants}
            >
              Building reliable enterprise software, business applications, APIs, databases, and AI-powered solutions with 15+ years of development experience.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={childVariants} className="flex space-x-4 pt-4">
              <Button variant="primary" className="text-lg px-8 py-3">
                View My Work
              </Button>
              <Button variant="secondary" className="text-lg px-8 py-3">
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={childVariants} className="flex space-x-6 pt-6 text-text-muted">
              <a href="#" className="flex items-center hover:text-primary-accent transition duration-200">
                <Github className="w-6 h-6 mr-2" /> GitHub
              </a>
              <a href="#" className="flex items-center hover:text-primary-accent transition duration-200">
                <Linkedin className="w-6 h-6 mr-2" /> LinkedIn
              </a>
              <a href="mailto:placeholder@example.com" className="flex items-center hover:text-primary-accent transition duration-200">
                <Mail className="w-6 h-6 mr-2" /> Email
              </a>
            </motion.div>

            {/* Status Indicator */}
            <motion.div variants={childVariants} className="pt-4 text-sm text-text-muted flex items-center space-x-2">
              <span className="text-green-400">●</span>
              <span>Open to interesting software engineering opportunities</span>
            </motion.div>
          </motion.div>

          {/* Right Side: Code Visual */}
          <motion.div
            className="relative p-8 bg-surface-dark rounded-xl shadow-2xl border border-primary-accent/20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h3 className="text-xl font-mono text-primary-accent mb-4">C# Code Snippet</h3>
            <pre className="bg-black p-4 rounded-lg text-sm overflow-x-auto font-mono text-green-300 border border-green-700/50">
              <code className="language-csharp">{`public class SoftwareEngineer
{
    public string Name => "Akber Hossin";
    public int Experience => 15;

    public string[] Skills =>
    [
        ".NET",
        "C#",
        "SQL Server",
        "ASP.NET Core",
        "AI"
    ];
}`}</code>
            </pre>
            <p className="mt-4 text-sm text-text-muted">
              *Simulating a live, technical feel.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
