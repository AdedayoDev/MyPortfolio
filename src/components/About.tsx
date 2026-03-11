import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/libs/animation';
import { SectionHeader } from './SectionHeader';
import { Button } from './ui/button';
import { CheckCircle2, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Target, text: 'User-Centered Design' },
    { icon: Lightbulb, text: 'Creative Problem Solving' },
    { icon: CheckCircle2, text: 'Quality & Excellence' },
  ];

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
        title='Building Digital Excellence'
      />

      {/* Main content grid */}
      <div className='grid md:grid-cols-2 gap-12 mt-12 items-start'>
        {/* Left side - About text */}
        <motion.div variants={staggerContainer(0.1)}>
          <motion.p
            variants={fadeUp}
            className='text-neutral-300 text-lg leading-relaxed mb-6'
          >
            I'm a passionate full-stack developer and graphic designer who
            specializes in creating beautiful, functional digital experiences.
            With a strong background in visual design and modern web
            technologies, I approach every project with a blend of creativity
            and technical expertise.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className='text-neutral-300 text-lg leading-relaxed mb-8'
          >
            My journey began in graphic design, where I developed a keen eye for
            visual communication and user experience. This foundation has shaped
            how I approach web development, ensuring that every project I build
            is not only functionally sound but also visually compelling and
            intuitive.
          </motion.p>

          {/* Highlights */}
          <motion.div
            variants={fadeUp}
            className='space-y-4 mb-10'
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className='flex items-center gap-3'
                  whileHover={{ x: 8 }}
                >
                  <div className='p-2 bg-primary/10 border border-primary/30 rounded-lg'>
                    <Icon className='w-5 h-5 text-primary' />
                  </div>
                  <span className='text-white font-medium'>{item.text}</span>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div variants={fadeUp}>
            <Button className='bg-linear-to-r from-primary to-blue-500 hover:from-primary hover:to-blue-600 text-white px-8 py-6 text-lg rounded-lg font-semibold transition-all duration-300'>
              Let's Work Together
            </Button>
          </motion.div>
        </motion.div>

        {/* Right side - Stats and info boxes */}
        <motion.div
          variants={staggerContainer(0.2)}
          className='space-y-6'
        >
          {/* Info card 1 */}
          <motion.div
            variants={fadeUp}
            className='p-8 rounded-2xl border border-neutral-700/50 bg-linear-to-br from-primary/10 to-transparent hover:border-primary/50 transition-all duration-300'
            whileHover={{ y: -8 }}
          >
            <h3 className='text-2xl font-bold text-primary mb-2'>3+</h3>
            <p className='text-neutral-300'>Years of Professional Experience</p>
          </motion.div>

          {/* Info card 2 */}
          <motion.div
            variants={fadeUp}
            className='p-8 rounded-2xl border border-neutral-700/50 bg-linear-to-br from-blue-500/10 to-transparent hover:border-blue-400/50 transition-all duration-300'
            whileHover={{ y: -8 }}
          >
            <h3 className='text-2xl font-bold text-blue-400 mb-2'>20+</h3>
            <p className='text-neutral-300'>Projects Completed Successfully</p>
          </motion.div>

          {/* Info card 3 */}
          <motion.div
            variants={fadeUp}
            className='p-8 rounded-2xl border border-neutral-700/50 bg-linear-to-br from-purple-500/10 to-transparent hover:border-purple-400/50 transition-all duration-300'
            whileHover={{ y: -8 }}
          >
            <h3 className='text-2xl font-bold text-purple-400 mb-2'>07+</h3>
            <p className='text-neutral-300'>Satisfied Clients Worldwide</p>
          </motion.div>

          {/* Info card 4 */}
          <motion.div
            variants={fadeUp}
            className='p-8 rounded-2xl border border-neutral-700/50 bg-linear-to-br from-pink-500/10 to-transparent hover:border-pink-400/50 transition-all duration-300'
            whileHover={{ y: -8 }}
          >
            <p className='text-neutral-300 italic'>
              "I believe in delivering not just code, but experiences that users
              love. Every pixel matters, every interaction counts."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
