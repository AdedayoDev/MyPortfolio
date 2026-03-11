import { motion } from 'framer-motion';
import { fadeUp } from '@/libs/animation';
import type { ProjectType } from '@/types';
import { ExternalLink } from 'lucide-react';

export const ProjectCard = ({
  imgSrc,
  title,
  projectLink,
  tags,
}: ProjectType) => {
  return (
    <motion.div
      variants={fadeUp}
      className='group relative overflow-hidden rounded-2xl'
      whileHover={{ y: -10 }}
    >
      {/* Card Container */}
      <div className='relative overflow-hidden rounded-2xl border border-neutral-700/50 hover:border-primary/50 transition-all duration-300'>
        {/* Image */}
        <figure className='overflow-hidden bg-neutral-900 aspect-video'>
          <motion.img
            src={imgSrc}
            alt={title}
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            loading='lazy'
          />
        </figure>

        {/* Overlay Gradient */}
        <div className='absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

        {/* Overlay Content */}
        <motion.div
          className='absolute inset-0 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0'
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
        >
          {/* Tags */}
          <div className='flex gap-2 flex-wrap'>
            {tags.map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className='bg-primary/20 hover:bg-primary/40 text-primary px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border border-primary/30 transition-all duration-200'
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Bottom Content */}
          <div className='space-y-4'>
            <h3 className='text-xl font-bold text-white leading-tight'>
              {title}
            </h3>

            {/* Action Buttons */}
            <motion.a
              href={projectLink}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 bg-primary/90 hover:bg-primary text-black px-4 py-2 rounded-lg font-semibold transition-all duration-300 group/btn'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Project</span>
              <ExternalLink size={16} />
            </motion.a>
          </div>
        </motion.div>

        {/* Corner Accent */}
        <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/30 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
      </div>

      {/* Card Shadow */}
      <motion.div
        className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10'
        initial={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
      />
    </motion.div>
  );
};
