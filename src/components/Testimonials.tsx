import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp } from '@/libs/animation';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SparkleIcon,
  StarIcon,
} from 'lucide-react';
import { testimonials } from '@/constants';

export const Testimonials = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className='mt-20 scrol-mt-10 '
      id='testimonials   '
    >
      <p
        variants={fadeUp}
        className='flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32'
      >
        <SparkleIcon size={15} /> {subtitle}
      </p>

      <h2
        variants={fadeUp}
        className='text-4xl font-bold capitalize mt-2 md:max-w-3xl'
      >
        {title}
      </h2>
    </motion.section>
  );
};
