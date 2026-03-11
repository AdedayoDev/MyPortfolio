import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/libs/animation';
import { SectionHeader } from './SectionHeader';
import { education, experience, tools } from '@/constants';
import { ExpCard } from './ExpCard';
import { ToolsCarousel } from './ToolsCarousel';

const Resume = () => {
  return (
    <motion.section
      initial='visible'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer(0)}
      className='flex flex-col gap-10 mt-10'
      id='resume'
    >
      <motion.div variants={fadeUp}>
        <SectionHeader
          subtitle='Resume'
          title='Education and Practical Experience'
        />
      </motion.div>
      <motion.div variants={fadeUp}>
        <p className='mt-4 text-neutral-300 '>
          I am a graduate of Ladoke Akintola University of Technology (LAUTECH),
          where I earned a degree in Science Laboratory Technology
          (Chemistry/Biochemistry). My academic training developed a strong
          foundation in analytical thinking, problem-solving, research
          methodology, and attention to detail skills that translate effectively
          into software development and engineering practices. To further pursue
          my passion for technology, I completed intensive training at Cephas
          ICT Hub, where I specialized in web development. During this program,
          I gained hands-on experience building responsive landing pages and
          full-scale web applications using modern front-end technologies. The
          training emphasized practical projects, real-world problem solving,
          and industry best practices.
        </p>
      </motion.div>

      <motion.div variants={fadeUp}>
        <motion.div className='grid grid-cols-1 gap-x-10 my-16 md:grid-cols-2 '>
          <motion.div
            variants={fadeUp}
            className='mb-16 md:mb-0'
          >
            <h2 className='text-3xl font-semibold mb-8'>Education</h2>
            <div className='space-y-8 border-l border-neutral-700 pl-6'>
              {education.map((item, index) => (
                <ExpCard
                  item={item}
                  index={index}
                  key={index}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className='mb-16 md:mb-0'
          >
            <h2 className='text-3xl font-semibold mb-8'>Work Experience</h2>
            <div className='space-y-8 border-l  pl-6'>
              {experience.map((item, index) => (
                <ExpCard
                  item={item}
                  index={index}
                  key={index}
                />
              ))}
            </div>
          </motion.div>

          <div className='my-16 col-span-full'>
            <ToolsCarousel
              tools={tools}
              title='My Favorite Tools'
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Resume;
