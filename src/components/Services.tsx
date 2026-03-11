import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/libs/animation';
import { SectionHeader } from './SectionHeader';
import { services } from '@/constants';
import { ServiceCard } from './ServiceCard';

const Services = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0.2)}
      className='grid md:grid-cols-2 gap-8 mt-16'
      id='services'
    >
      <motion.div variants={fadeUp}>
        <SectionHeader
          subtitle='Services'
          title='What I Offer'
        />
        <motion.p
          variants={fadeUp}
          className='text-neutral-300 mt-4 text-lg leading-relaxed'
        >
          I provide comprehensive web development and design solutions tailored
          to your business needs, combining creativity with cutting-edge
          technology.
        </motion.p>
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.1)}
        className='col-span-full grid md:grid-cols-2 gap-8 mt-8'
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={fadeUp}
          >
            <ServiceCard
              service={service}
              index={index}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;
