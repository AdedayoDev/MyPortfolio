import { motion } from 'framer-motion';
import type { ExperienceType } from '@/types';

export const ExpCard = ({
  item,
  index = 0,
}: {
  item: ExperienceType;
  index?: number;
}) => {
  return (
    <motion.div
      className='relative group'
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ x: 8 }}
    >
      {/* Timeline dot with animation */}
      <motion.div
        className='absolute -left-7.5 top-2 size-3 bg-neutral-600 group-hover:bg-primary rounded-full transition duration-300 ring-4 ring-neutral-900 group-hover:scale-150'
        whileHover={{ scale: 1.5 }}
      />

      {/* Connection line on hover */}
      <div className='absolute -left-6 top-5 w-0.5 h-20 bg-gradient-to-b from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

      {/* Card content */}
      <div className='backdrop-blur-sm'>
        {/* Year badge */}
        <motion.span
          className='inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary mb-3 group-hover:bg-primary/20 transition duration-300'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.1 }}
        >
          {item.year}
        </motion.span>

        {/* Title */}
        <motion.h3
          className='text-lg font-bold text-white mt-2 leading-tight'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          {item.title}
        </motion.h3>

        {/* Institute */}
        <motion.p
          className='text-sm text-neutral-400 mt-2'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <span className='font-semibold text-blue-400'>{item.institute}</span>
        </motion.p>

        {/* Description */}
        <motion.p
          className='text-sm text-neutral-300 mt-3 leading-relaxed'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          {item.desc}
        </motion.p>
      </div>
    </motion.div>
  );
};
