import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { socialLinks } from '@/constants';
import { Mail, MapPin, Briefcase, ArrowRight } from 'lucide-react';

const Profile = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      className='w-full py-24'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='grid md:grid-cols-2 gap-12 items-center'>
        {/* Left - Profile Card */}
        <motion.div
          variants={itemVariants}
          className='relative'
        >
          {/* Background glow effect */}
          <div className='absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

          <motion.div
            className='relative rounded-3xl overflow-hidden border border-neutral-700/50 bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 backdrop-blur-xl shadow-2xl group'
            whileHover={{
              borderColor: 'rgba(59, 130, 246, 0.5)',
              boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.15)',
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated header background */}
            <div className='relative h-40 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 overflow-hidden'>
              <motion.div
                className='absolute inset-0 opacity-30'
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                style={{
                  backgroundImage:
                    'linear-gradient(45deg, rgba(59,130,246,0.2) 0%, rgba(34,211,238,0.2) 100%)',
                  backgroundSize: '200% 200%',
                }}
              />

              <motion.div
                className='absolute top-4 right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl'
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.div
                className='absolute -bottom-8 -left-8 w-40 h-40 bg-cyan-500/15 rounded-full blur-3xl'
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>

            {/* Content */}
            <div className='relative px-8 pb-8 pt-2'>
              {/* Avatar */}
              <motion.div
                variants={itemVariants}
                className='flex justify-center mb-8 -mt-20 relative z-10'
              >
                <motion.div
                  className='relative'
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity' />
                  <img
                    src='/avatarjpg.png'
                    alt='John Adedayo'
                    className='relative w-40 h-40 rounded-2xl object-cover border-4 border-neutral-900 shadow-2xl'
                  />
                </motion.div>
              </motion.div>

              {/* Name and Title */}
              <motion.div
                variants={itemVariants}
                className='text-center mb-8'
              >
                <h2 className='text-4xl font-black text-white mb-3'>
                  John Adedayo
                </h2>
                <p className='text-base font-semibold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                  Fullstack Engineer & Designer
                </p>
                <p className='text-sm text-neutral-400 mt-2'>
                  Creating stunning digital experiences
                </p>
              </motion.div>

              {/* Info Cards */}
              <motion.div
                variants={itemVariants}
                className='space-y-3 mb-8'
              >
                {/* Role */}
                <motion.div
                  className='flex items-center gap-4 p-4 rounded-xl border border-neutral-700/50 bg-neutral-900/50 hover:bg-neutral-800 hover:border-blue-500/30 transition-all duration-300 group/card'
                  whileHover={{ x: 6 }}
                >
                  <div className='p-3 rounded-lg bg-blue-500/15 border border-blue-500/30 group-hover/card:bg-blue-500/25 transition-colors'>
                    <Briefcase className='w-5 h-5 text-blue-400' />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-xs text-neutral-400 uppercase tracking-wider font-bold'>
                      Specialization
                    </p>
                    <p className='text-sm text-white font-semibold mt-1'>
                      Full Stack Development
                    </p>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  className='flex items-center gap-4 p-4 rounded-xl border border-neutral-700/50 bg-neutral-900/50 hover:bg-neutral-800 hover:border-cyan-500/30 transition-all duration-300 group/card'
                  whileHover={{ x: 6 }}
                >
                  <div className='p-3 rounded-lg bg-cyan-500/15 border border-cyan-500/30 group-hover/card:bg-cyan-500/25 transition-colors'>
                    <MapPin className='w-5 h-5 text-cyan-400' />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-xs text-neutral-400 uppercase tracking-wider font-bold'>
                      Based In
                    </p>
                    <p className='text-sm text-white font-semibold mt-1'>
                      Ibadan, Nigeria
                    </p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  className='flex items-center gap-4 p-4 rounded-xl border border-neutral-700/50 bg-neutral-900/50 hover:bg-neutral-800 hover:border-purple-500/30 transition-all duration-300 group/card'
                  whileHover={{ x: 6 }}
                >
                  <div className='p-3 rounded-lg bg-purple-500/15 border border-purple-500/30 group-hover/card:bg-purple-500/25 transition-colors'>
                    <Mail className='w-5 h-5 text-purple-400' />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-xs text-neutral-400 uppercase tracking-wider font-bold'>
                      Contact
                    </p>
                    <p className='text-sm text-white font-semibold mt-1 truncate'>
                      johnadedayodev@gmail.com
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Bio */}
              <motion.div
                variants={itemVariants}
                className='p-5 rounded-xl border border-neutral-700/30 bg-neutral-900/30 backdrop-blur-sm mb-8'
              >
                <p className='text-sm text-neutral-300 leading-relaxed'>
                  Transforming ideas into beautiful digital experiences through
                  modern web technologies and creative design solutions.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <p className='text-xs text-neutral-400 uppercase tracking-wider font-bold mb-4'>
                  Connect With Me
                </p>
                <div className='flex gap-3 flex-wrap'>
                  {socialLinks.map((social, i) => {
                    const Icon = social.icon;
                    const colors = [
                      'from-blue-500 to-blue-600',
                      'from-purple-500 to-purple-600',
                      'from-cyan-500 to-cyan-600',
                      'from-pink-500 to-pink-600',
                    ];

                    return (
                      <motion.a
                        key={i}
                        href={social.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={`flex items-center justify-center w-11 h-11 rounded-lg bg-gradient-to-br ${colors[i % colors.length]} text-white transition-all duration-300 shadow-lg hover:shadow-xl`}
                        whileHover={{ scale: 1.2, y: -6 }}
                        whileTap={{ scale: 0.85 }}
                        title={social.label}
                      >
                        <Icon className='w-5 h-5' />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Accent line at bottom */}
            <motion.div
              className='h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent'
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ transformOrigin: 'center' }}
            />
          </motion.div>
        </motion.div>

        {/* Right - Features */}
        <motion.div
          variants={itemVariants}
          className='space-y-6'
        >
          <div>
            <motion.h3
              variants={itemVariants}
              className='text-3xl md:text-4xl font-black text-white mb-4'
            >
              About{' '}
              <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                Me
              </span>
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className='text-lg text-neutral-300 leading-relaxed'
            >
              I'm a passionate fullstack engineer with a keen eye for design. I
              specialize in building scalable, high-performance web applications
              that users love to interact with.
            </motion.p>
          </div>

          {/* Features list */}
          <motion.div
            variants={containerVariants}
            className='space-y-4'
          >
            {[
              {
                icon: '⚡',
                title: 'Performance First',
                desc: 'Optimized for speed and efficiency',
              },
              {
                icon: '🎨',
                title: 'Beautiful Design',
                desc: 'UI/UX that stands out',
              },
              {
                icon: '🔧',
                title: 'Modern Stack',
                desc: 'React, TypeScript, Node.js & more',
              },
              {
                icon: '🚀',
                title: 'Ready to Ship',
                desc: 'Production-ready solutions',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className='flex items-start gap-4 p-4 rounded-xl border border-neutral-700/30 bg-neutral-900/30 hover:bg-neutral-800/50 hover:border-blue-500/30 transition-all duration-300'
                whileHover={{ x: 8 }}
              >
                <span className='text-2xl flex-shrink-0'>{feature.icon}</span>
                <div>
                  <h4 className='font-semibold text-white mb-1'>
                    {feature.title}
                  </h4>
                  <p className='text-sm text-neutral-400'>{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className='pt-6 flex flex-col sm:flex-row gap-4'
          >
            <motion.a
              href='#contact'
              className='flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 group'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get In Touch</span>
              <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </motion.a>

            <motion.a
              href='#projects'
              className='flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-blue-400 bg-blue-500/10 border-2 border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/20 transition-all duration-300'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Profile;
