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
      variants={staggerContainer(0.5)}
      className='grid md:gird-cols-2 gap-10 mt-10'
      id='services'
    >
      <SectionHeader
        subtitle='Services'
        title='Building with Purpose & Precision'
      />

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.5)}
        className='grid md:grid-cols-2 gap-10 mt-10'
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={fadeUp}
          >
            <ServiceCard
              service={service}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;
