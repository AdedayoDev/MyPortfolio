import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/libs/animation';
import type { ToolsType } from '@/types';

interface ToolsCarouselProps {
  tools: ToolsType[];
  title?: string;
}

export const ToolsCarousel = ({
  tools,
  title = 'My Favorite Tools',
}: ToolsCarouselProps) => {
  // Duplicate the tools array for seamless infinite loop
  const duplicatedTools = [...tools, ...tools, ...tools];

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='my-0 md:my-16 col-span-full'
    >
      <motion.h2
        variants={fadeUp}
        className='text-3xl font-semibold mb-10 capitalize'
      >
        {title}
      </motion.h2>

      {/* Carousel Container */}
      <div className='relative overflow-hidden rounded-xl bg-gradient-to-r from-neutral-900/50 via-neutral-800/20 to-neutral-900/50 p-8 backdrop-blur-sm'>
        {/* Gradient overlays for fade effect at edges */}
        <div className='absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral-900 to-transparent z-10 pointer-events-none rounded-l-xl'></div>
        <div className='absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral-900 to-transparent z-10 pointer-events-none rounded-r-xl'></div>

        {/* Scrolling container */}
        <motion.div
          className='flex gap-6'
          animate={{ x: '-33.33%' }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
        >
          {duplicatedTools.map((tool, index) => (
            <motion.div
              key={index}
              className='flex-shrink-0 w-32'
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className='h-40 border border-neutral-700 hover:border-primary/50 rounded-xl py-4 px-3 flex flex-col items-center justify-center hover:bg-gradient-to-br hover:from-neutral-800/50 hover:to-primary/10 transition-all duration-300 cursor-pointer group backdrop-blur-sm'>
                {/* Image container */}
                <div className='relative mb-3 flex items-center justify-center h-16'>
                  <img
                    src={tool.imgSrc}
                    alt={tool.label}
                    loading='lazy'
                    className='h-12 w-12 object-contain group-hover:filter group-hover:brightness-125 transition-all duration-300'
                  />
                  {/* Glow effect on hover */}
                  <div className='absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                </div>

                {/* Label */}
                <p className='font-semibold text-center text-sm text-neutral-300 group-hover:text-primary transition-colors duration-300'>
                  {tool.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Info text */}
      <motion.p
        variants={fadeUp}
        className='text-neutral-400 text-sm mt-6 text-center'
      >
        Technologies I work with daily for building scalable applications
      </motion.p>
    </motion.div>
  );
};
