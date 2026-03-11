import { motion } from 'framer-motion';
import { Sparkles, Zap, Rocket } from 'lucide-react';
import { useEffect, useState } from 'react';

const RESUME_URL =
  'https://drive.google.com/uc?export=download&id=1C804-7_08jNTFsaB_spLi8xyHh5eaMp_';

interface FloatingShapeProps {
  delay: number;
  duration: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({
  delay,
  duration,
  x,
  y,
  size,
  opacity,
  color,
}) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} blur-2xl`}
      style={{
        width: size,
        height: size,
        opacity,
        filter: `blur(${size / 4}px)`,
      }}
      animate={{
        x: [0, x, -x / 2, x],
        y: [0, y, -y / 2, y],
        scale: [1, 1.2, 0.8, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
};

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.section
      id='hero'
      className='relative w-screen  overflow-hidden flex items-center justify-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        minHeight: '100vh',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
      }}
    >
      {/* Dynamic Background with animated linears */}
      <div className='absolute inset-0 -z-20 overflow-hidden'>
        <motion.div
          className='absolute inset-0 bg-linear-to-br from-neutral-900 via-blue-900/20 to-neutral-900'
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundSize: '200% 200%',
          }}
        />

        <FloatingShape
          delay={0}
          duration={12}
          x={100}
          y={150}
          size={400}
          opacity={0.1}
          color='bg-blue-500'
        />
        <FloatingShape
          delay={1}
          duration={14}
          x={-120}
          y={100}
          size={300}
          opacity={0.08}
          color='bg-cyan-500'
        />
        <FloatingShape
          delay={2}
          duration={16}
          x={80}
          y={-130}
          size={350}
          opacity={0.07}
          color='bg-purple-500'
        />

        {/* Grid overlay */}
        <div className='absolute inset-0 opacity-5'>
          <div
            className='h-full w-full'
            style={{
              backgroundImage:
                'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </div>

      {/* Content - Two column layout on desktop */}
      <motion.div
        className='relative z-10 w-full h-full px-4 sm:px-6 lg:px-8'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <div className='max-w-6xl mx-auto  gap-16 items-center h-full'>
          {/* Left side - Text content */}
          <motion.div className='space-y-10'>
            {/* Top floating badge */}
            <motion.div
              variants={itemVariants}
              className='flex justify-center'
            >
              <motion.button
                type='button'
                aria-label='Available for freelance'
                className='inline-flex items-center gap-2 px-3 py-2 md:px-5 md:py-3 rounded-full border border-blue-500/50 bg-blue-500/10 backdrop-blur-md hover:bg-blue-500/20 transition-all duration-300 group'
                whileHover={{ scale: 1.08, borderColor: '#3b82f6' }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className='w-5 h-5 text-blue-400' />
                </motion.div>
                <span className='text-base font-semibold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                  Available for freelance
                </span>
              </motion.button>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              variants={itemVariants}
              className='space-y-6'
            >
              <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl lg:text-8xl flex flex-col items-center justify-center font-black tracking-tighter leading-[1.1]'>
                <motion.span
                  className='block text-white mb-4'
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  Crafting Digital
                </motion.span>
                <motion.span
                  className='block bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent'
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                  style={{
                    backgroundSize: '200% auto',
                  }}
                >
                  Experiences
                </motion.span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className='text-base sm:text-lg lg:text-2xl text-neutral-200 leading-relaxed font-medium text-center '
            >
              I transform ideas into stunning web experiences through code and
              design. Specializing in{' '}
              <span className='text-blue-400 font-bold'>
                modern development
              </span>{' '}
              and{' '}
              <span className='text-cyan-400 font-bold'>user-first design</span>
              .
            </motion.p>

            {/* Features */}
            <motion.div
              variants={itemVariants}
              className='flex flex-wrap px-4 md:px-0 items-center justify-center gap-4 pt-4'
            >
              {[
                { icon: Rocket, text: '20+ Projects Delivered' },
                { icon: Zap, text: 'Performance First' },
                { icon: Sparkles, text: 'Latest Tech Stack' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className='flex items-center gap-3 group'
                    whileHover={{ x: 8 }}
                  >
                    <div className='p-3 rounded-lg bg-linear-to-br from-blue-500/30 to-cyan-500/30 border border-blue-500/40 group-hover:border-blue-400 transition-colors'>
                      <Icon className='w-6 h-6 text-blue-300' />
                    </div>
                    <span className='text-base font-bold text-neutral-100 group-hover:text-white transition-colors'>
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className='flex flex-col items-center justify-center sm:flex-row gap-4 pt-6'
            >
              {[
                {
                  label: 'View My Work',
                  href: '#projects',
                  variant: 'primary',
                  icon: Rocket,
                },
                {
                  label: 'Download Resume',
                  href: RESUME_URL,
                  variant: 'secondary',
                  icon: null,
                },
              ].map((btn, index) => {
                const Icon = btn.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -4 }}
                  >
                    <a
                      href={btn.href}
                      target={
                        btn.variant === 'secondary' ? '_blank' : undefined
                      }
                      rel={
                        btn.variant === 'secondary'
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className={`inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                        btn.variant === 'primary'
                          ? 'bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/40 hover:shadow-xl hover:shadow-blue-500/60'
                          : 'border-2 border-blue-500/50 hover:border-blue-400 text-blue-400 hover:text-blue-300 bg-blue-500/5 hover:bg-blue-500/10'
                      }`}
                    >
                      {Icon && <Icon className='w-4 h-4' />}
                      <span>{btn.label}</span>
                    </a>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className='grid grid-cols-3 sm:grid-cols-3 gap-4 pt-10 border-t border-neutral-700/50'
            >
              {[
                { value: '20+', label: 'Projects' },
                { value: '7+', label: 'Clients' },
                { value: '3+', label: 'Years' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className='text-center'
                  whileHover={{ scale: 1.15 }}
                >
                  <p className='text-3xl lg:text-4xl font-black bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                    {stat.value}
                  </p>
                  <p className='text-sm text-neutral-400 mt-2 font-semibold'>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Parallax element */}
      <motion.div
        className='hidden md:block absolute -bottom-40 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none z-0'
        style={{
          y: scrollY * 0.3,
        }}
      />
    </motion.section>
  );
};

export default Hero;
