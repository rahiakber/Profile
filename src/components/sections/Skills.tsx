import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="10" cy="7" r="4"></circle><path d="M22 21v-2"></path></svg>,
    skills: ['C#', 'ASP.NET Core', 'ASP.NET MVC', '.NET', 'REST API', 'Entity Framework'],
  },
  {
    title: 'Database',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-4 3s-4-1.34-4-3"></path><path d="M2 12s3-5 10-5 10 5 10 5"></path></svg>,
    skills: ['Microsoft SQL Server', 'T-SQL', 'Stored Procedures', 'Query Optimization', 'Database Design', 'Performance Tuning'],
  },
  {
    title: 'Frontend',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M12 20v-9"></path><path d="M3 12h18"></path></svg>,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive UI'],
  },
  {
    title: 'Reporting',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"></path><path d="M14 2v6h6"></path><path d="M10 12h4"></path></svg>,
    skills: ['Crystal Reports', 'Stimulsoft Reports', 'PDF/Excel Reporting'],
  },
  {
    title: 'DevOps / Infra',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4-8-4-8 4-8 4"></path><path d="M12 12s-4-4-4-10"></path></svg>,
    skills: ['IIS', 'Windows Server', 'Git', 'GitHub', 'SQL Server Administration'],
  },
  {
    title: 'AI / LLM',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M4.93 4.93l1.41 1.41"></path><path d="M17.66 17.66l1.41 1.41"></path></svg>,
    skills: ['LLM Integration', 'RAG', 'Local AI', 'Ollama', 'AI-powered SQL generation', 'AI developer tools'],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold text-primary-accent uppercase tracking-wider mb-2">
            Technical Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-text-light">
            Core Technical Skills
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
              className="flex flex-col"
            >
              <Card className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h4 className="ml-3 text-2xl font-bold text-primary-accent">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge bg-primary-accent/20 text-primary-accent text-sm px-4 py-1 rounded-full cursor-default transition duration-200 hover:bg-primary-accent/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
