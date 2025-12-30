import { staggerContainer } from '@/libs/animation';
import { motion } from 'framer-motion';
import { projectsData } from '@/constants';
import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';

const Projects = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.8 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-30'
      id='projects'
    >
      <SectionHeader
        title='My feartured Projects'
        subtitle='Projects'
      />

      <motion.div
        className='grid md:grid-cols-2 gap-10 mt-10'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.5)}
      >
        {projectsData.map((project, i) => (
          <ProjectCard
            key={i}
            imgSrc={project.imgSrc}
            projectLink={project.projectLink}
            tags={project.tags}
            title={project.title}
          />
        ))}
      </motion.div>
      
    </motion.section>
  );
};

export default Projects;
