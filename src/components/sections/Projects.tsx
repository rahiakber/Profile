import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { Github, Zap } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    title: 'Enterprise Data Management System',
    description: 'Comprehensive business management software supporting booking, production, delivery, invoicing, receivables, and operational workflows for large organizations.',
    technologies: ['C#', 'ASP.NET', 'SQL Server', 'Crystal Reports'],
    keyFeatures: ['Full Workflow Automation', 'Invoicing & Receivables', 'Custom Reporting', 'Modular Design'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    title: 'AI Data Assistant',
    description: 'An advanced AI-powered data assistant that converts natural-language questions into validated SQL queries and presents business data through a modern, intuitive interface.',
    technologies: ['Python', 'Flask', 'React', 'SQL Server', 'LLM', 'RAG'],
    keyFeatures: ['Natural Language Querying', 'Data Validation', 'Modern UI/UX', 'RAG Implementation'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    title: 'Support Management System',
    description: 'A production-oriented support and ticket management platform designed for managing users, tickets, detailed workflows, and support operations efficiently.',
    technologies: ['ASP.NET Core 8', 'SQL Server', 'Bootstrap'],
    keyFeatures: ['Ticket Lifecycle Management', 'User Roles & Permissions', 'Workflow Tracking', 'High Availability'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    title: 'Executive Dashboard',
    description: 'A robust business intelligence dashboard providing executives with real-time insights into sales, realization, adjustment, receivable, and overall financial performance.',
    technologies: ['ASP.NET Core', 'SQL Server', 'JavaScript', 'Chart.js'],
    keyFeatures: ['KPI Visualization', 'Financial Reporting', 'Real-time Data Feeds', 'Drill-down Capability'],
    githubUrl: '#',
    demoUrl: '#',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold text-primary-accent uppercase tracking-wider mb-2">
            Featured Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-text-light">
            Selected Projects & Solutions
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="flex flex-col"
            >
              <Card className="p-6 flex-grow">
                <h4 className="text-3xl font-bold text-primary-accent mb-2">{project.title}</h4>
                <p className="text-text-muted mb-4">{project.description}</p>

                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-text-light/80 mb-2">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs bg-primary-accent/20 text-primary-accent px-3 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-text-light/80 mb-2">Key Features:</h5>
                  <ul className="space-y-1 text-text-light/90 list-disc pl-5">
                    {project.keyFeatures.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4 pt-4 border-t border-surface-dark/50">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-text-light/80 hover:text-primary-accent transition">
                    <Github className="w-5 h-5 mr-2" /> GitHub
                  </a>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-text-light/80 hover:text-primary-accent transition">
                    <Zap className="w-5 h-5 mr-2" /> Live Demo
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;