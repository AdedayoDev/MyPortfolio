import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/libs/animation';
import { SectionHeader } from './SectionHeader';
import { education, experience, tools } from '@/constants';
import { ExpCard } from './ExpCard';
import { ToolsCard } from './ToolsCard';

const Resume = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='grid md:gird-cols-2 gap-10 mt-10'
      id='resume'
    >
      <SectionHeader
        subtitle='Resume'
        title='Education adn Practical Experience'
      />
      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300 '
      >
        I am a graduate of Ladoke Akintola University of Technology (LAUTECH),
        where I earned a degree in Science Laboratory Technology
        (Chemistry/Biochemistry). My academic training developed a strong
        foundation in analytical thinking, problem-solving, research
        methodology, and attention to detail—skills that translate effectively
        into software development and engineering practices. To further pursue
        my passion for technology, I completed intensive training at Cephas ICT
        Hub, where I specialized in web development. During this program, I
        gained hands-on experience building responsive landing pages and
        full-scale web applications using modern front-end technologies. The
        training emphasized practical projects, real-world problem solving, and
        industry best practices.
      </motion.p>

      <div className='grid gap-x-10 my-16 md:grid-cols-2 '>
        <motion.div
          variants={fadeUp}
          className='mb-16 md:mb-0'
        >
          <h2 className='text-3xl font-semibold mb-8'>Education</h2>
           <div className='space-y-8 border-l border-neutral-700 pl-6'>
            {education.map((item, index) => (
              <ExpCard
                item={item}
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
            {experience .map((item, index) => (
              <ExpCard
                item={item}
                key={index}
              />
            ))}
          </div>
        </motion.div>


        <div className='my-16'> 
            <motion.h2 variants={fadeUp} className='text-3xl font-semibold mb-8 capitalize'> My Favourite tools </motion.h2>

            <motion.div initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer(0.5)} className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  gap-5'>
                {tools.map((tool, index) => (
                    <ToolsCard tool={tool} key={index} />
                ))}
            </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;
