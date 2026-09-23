import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: 'Senior Software Developer',
    company: 'Enterprise Solutions',
    period: '2015 - Present',
    description: 'Leading development of enterprise-grade .NET applications, designing scalable architectures, and mentoring junior developers. Built mission-critical business systems serving hundreds of concurrent users.',
  },
  {
    title: 'Full-Stack .NET Developer',
    company: 'Software Development Firm',
    period: '2010 - 2015',
    description: 'Developed and maintained complex business applications using ASP.NET MVC, SQL Server, and Crystal Reports. Implemented RESTful APIs and optimized database performance.',
  },
  {
    title: 'Junior Developer',
    company: 'Tech Startup',
    period: '2008 - 2010',
    description: 'Started career building web applications with C# and ASP.NET. Gained deep expertise in SQL Server database design and T-SQL stored procedures.',
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold text-primary-accent uppercase tracking-wider mb-2">
            Career Journey
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-text-light">
            Professional Experience
          </h3>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary-accent/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <Card className="p-6">
                    <h4 className="text-xl font-bold text-primary-accent">{exp.title}</h4>
                    <p className="text-text-muted mt-1">{exp.company}</p>
                    <p className="text-sm text-text-muted/70 mt-1">{exp.period}</p>
                    <p className="text-text-light/90 mt-4 leading-relaxed">{exp.description}</p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
