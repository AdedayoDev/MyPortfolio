import { staggerContainer, fadeUp } from '@/libs/animation';
import { motion } from 'framer-motion';
import { projectsData } from '@/constants';
import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-30'
      id='projects'
    >
      <motion.div className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4'>
        <SectionHeader
          title='Featured Projects'
          subtitle='Projects'
        />
        <motion.a
          href='#projects'
          variants={fadeUp}
          className='inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors'
          whileHover={{ x: 5 }}
        >
          View All <ArrowRight size={20} />
        </motion.a>
      </motion.div>

      <motion.div
        className='grid md:grid-cols-2 gap-10 mt-12'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.2)}
      >
        {projectsData.slice(0, 6).map((project, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
          >
            <ProjectCard
              imgSrc={project.imgSrc}
              projectLink={project.projectLink}
              tags={project.tags}
              title={project.title}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
