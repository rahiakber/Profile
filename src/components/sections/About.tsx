import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold text-primary-accent uppercase tracking-wider mb-2">
            About Me
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-text-light">
            Building Enterprise Solutions with <span className="text-primary-accent">15+ Years</span> of Experience.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column: Detailed Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <Card className="p-8">
              <h4 className="text-2xl font-bold text-primary-accent mb-4">
                My Professional Focus
              </h4>
              <p className="text-lg text-text-muted leading-relaxed">
                I am a seasoned Full-Stack .NET Developer with over 15 years of experience specializing in the architecture and development of complex, business-critical enterprise applications. My expertise spans the entire software development lifecycle, from initial database design and schema optimization to modern API development and deployment on IIS.
              </p>
              <p className="text-lg text-text-muted leading-relaxed mt-4">
                My passion lies in transforming legacy systems and complex business requirements into robust, scalable, and maintainable software solutions. I am proficient in leveraging the entire .NET ecosystem, coupled with deep expertise in SQL Server and advanced reporting mechanisms (Crystal Reports, Stimulsoft).
              </p>
            </Card>

            <Card className="p-8">
              <h4 className="text-2xl font-bold text-primary-accent mb-4">
                Key Areas of Expertise
              </h4>
              <ul className="space-y-3 text-text-light/90">
                <li className="flex items-center"><span className="text-primary-accent mr-3">✓</span> Enterprise Application Development</li>
                <li className="flex items-center"><span className="text-primary-accent mr-3">✓</span> .NET Core & C# Backend Architecture</li>
                <li className="flex items-center"><span className="text-primary-accent mr-3">✓</span> Advanced SQL Server & Database Engineering</li>
                <li className="flex items-center"><span className="text-primary-accent mr-3">✓</span> RESTful API Design and Implementation</li>
                <li className="flex items-center"><span className="text-primary-accent mr-3">✓</span> AI/LLM Integration for Business Automation</li>
                <li className="flex items-center"><span className="text-primary-accent mr-3">✓</span> System Modernization & Production Deployment (IIS)</li>
              </ul>
            </Card>
          </motion.div>

          {/* Right Column: Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="p-8 text-center">
              <div className="space-y-4">
                <div className="p-4 bg-surface-dark/50 rounded-lg border-l-4 border-primary-accent">
                  <p className="text-5xl font-extrabold text-primary-accent">15+</p>
                  <p className="text-text-muted uppercase tracking-widest mt-1">Years Experience</p>
                </div>
                <div className="p-4 bg-surface-dark/50 rounded-lg border-l-4 border-primary-accent">
                  <p className="text-5xl font-extrabold text-primary-accent">100+</p>
                  <p className="text-text-muted uppercase tracking-widest mt-1">Business Features Delivered</p>
                </div>
                <div className="p-4 bg-surface-dark/50 rounded-lg border-l-4 border-primary-accent">
                  <p className="text-5xl font-extrabold text-primary-accent">Enterprise</p>
                  <p className="text-text-muted uppercase tracking-widest mt-1">Application Focus</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
