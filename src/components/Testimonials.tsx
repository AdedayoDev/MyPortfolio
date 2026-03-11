import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/libs/animation';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SparkleIcon,
  Star,
  Quote,
} from 'lucide-react';
import { testimonials } from '@/constants';

export const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='my-0 md:my-16 scroll-mt-30'
      id='testimonials'
    >
      {/* Section header */}
      <motion.div
        variants={fadeUp}
        className='text-center mb-12'
      >
        <div className='inline-flex items-center justify-center py-2 gap-2 border border-primary/30 rounded-full px-4 bg-primary/5 mb-4'>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <SparkleIcon
              size={16}
              className='text-primary'
            />
          </motion.div>
          <span className='text-sm font-medium'>Client Testimonials</span>
        </div>

        <h2 className='text-4xl md:text-5xl font-bold capitalize mx-auto'>
          What clients{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400'>
            say about me
          </span>
        </h2>
      </motion.div>

      {/* Carousel Container */}
      <div className='mt-12 relative max-w-4xl mx-auto px-4 sm:px-0'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='relative'
          >
            {/* Card with gradient border */}
            <div className='group relative rounded-2xl border border-neutral-700/50 hover:border-primary/50 transition-all duration-300 overflow-hidden'>
              {/* Gradient background */}
              <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

              {/* Content */}
              <div className='relative z-10 p-8 md:p-12 bg-gradient-to-br from-neutral-900/95 to-neutral-900/80 backdrop-blur-sm'>
                {/* Quote icon */}
                <motion.div
                  className='text-primary/20 mb-6'
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Quote size={40} />
                </motion.div>

                {/* Testimonial text */}
                <motion.p
                  className='text-lg md:text-xl text-neutral-200 leading-relaxed mb-8 italic'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  "{testimonials[currentSlide].text}"
                </motion.p>

                {/* Author section */}
                <div className='flex items-center justify-between pt-8 border-t border-neutral-700/50'>
                  <div className='flex items-center gap-4'>
                    {/* Avatar */}
                    <motion.img
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className='w-16 h-16 rounded-full object-cover border-2 border-primary/30 group-hover:border-primary/60 transition-colors'
                      loading='lazy'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 }}
                    />

                    {/* Name and role */}
                    <div>
                      <h3 className='text-white font-semibold text-lg'>
                        {testimonials[currentSlide].name}
                      </h3>
                      <p className='text-sm text-neutral-400'>
                        {testimonials[currentSlide].role}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className='flex gap-1'>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <Star
                          size={18}
                          className='fill-yellow-400 text-yellow-400'
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation controls */}
        <motion.div
          className='flex items-center justify-between mt-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.1, x: -4 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 group'
          >
            <ChevronLeftIcon
              size={20}
              className='text-primary group-hover:text-primary transition'
            />
          </motion.button>

          {/* Slide indicators */}
          <div className='flex gap-2'>
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary w-8'
                    : 'bg-neutral-700 hover:bg-neutral-600 w-2'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>

          <motion.button
            onClick={next}
            whileHover={{ scale: 1.1, x: 4 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 group'
          >
            <ChevronRightIcon
              size={20}
              className='text-primary group-hover:text-primary transition'
            />
          </motion.button>
        </motion.div>

        {/* Project link */}
        <motion.div
          className='text-center mt-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href={testimonials[currentSlide].link}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group'
          >
            View Project
            <span className='group-hover:translate-x-1 transition-transform'>
              →
            </span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};
