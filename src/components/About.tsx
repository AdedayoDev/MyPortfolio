import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/libs/animation';
import { SectionHeader } from './SectionHeader';
import { Button } from './ui/button';

const About = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-30'
      id='about'
    >
      <SectionHeader
        subtitle='About'
        title='Transforming complexity into effortless design'
      />

      <motion.p
        variants={fadeUp}
        className='text-neutral-300 mt-4'
      >
        I’m a graphic designer and MERN stack web developer who combines strong
        visual design with modern web technologies to build clean, functional,
        and engaging digital experiences.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className='text-neutral-300 mt-2'
      >
        Over the past few years, I have developed my skill set by working across
        both graphic design and MERN stack web development. I began my journey
        as a graphic designer, where I built a strong foundation in visual
        communication, layout, typography, and branding. This background
        continues to influence the way I think about structure, clarity, and
        user experience in digital products. As my interest in how things work
        behind the scenes grew, I moved into full stack web development,
        focusing on building applications that are not only visually polished
        but also well structured, scalable, and maintainable. I pay close
        attention to how design systems, component architecture, performance,
        and usability come together to form a complete web application. Today, I
        approach each project with a balanced mindset, combining design thinking
        with modern development standards to create web applications that feel
        unique, consistent, and reliable from both a visual and technical
        perspective.
      </motion.p>

      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <Button className='mt-5'>Contact Me</Button>
      </motion.div>
    </motion.section>
  );
};

export default About;
