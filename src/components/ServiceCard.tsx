import { motion } from 'framer-motion';
import type { ServiceType } from '@/types';

interface ServiceCardProps {
  service: ServiceType;
  index?: number;
}

export const ServiceCard = ({ service, index = 0 }: ServiceCardProps) => {
  const colors = [
    'from-blue-500/20 to-blue-600/10 border-blue-500/30 hover:border-blue-400/60',
    'from-purple-500/20 to-purple-600/10 border-purple-500/30 hover:border-purple-400/60',
    'from-pink-500/20 to-pink-600/10 border-pink-500/30 hover:border-pink-400/60',
    'from-green-500/20 to-green-600/10 border-green-500/30 hover:border-green-400/60',
  ];

  const colorClass = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br ${colorClass} p-8 backdrop-blur-sm transition-all duration-300 cursor-pointer`}
    >
      {/* Background animated gradient */}
      <div className='absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10'></div>

      {/* Top border accent on hover */}
      <div className='absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-current group-hover:w-full transition-all duration-300'></div>

      {/* Content wrapper */}
      <div className='relative z-10'>
        {/* Icon and title row */}
        <div className='flex items-start justify-between mb-6'>
          <div className='flex-1'>
            <motion.h3
              className='text-xl font-bold text-white mb-3 leading-tight'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.1 }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className='text-neutral-300 text-sm leading-relaxed mb-4'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {service.desc}
            </motion.p>
          </div>

          {/* Icon with background */}
          <motion.div
            className='shrink-0 ml-4 p-3 rounded-lg bg-white/10 border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300'
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: 'spring' }}
          >
            <div className='w-6 h-6'>{service.icon}</div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className='pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <div className='flex items-center justify-between'>
            <span className='text-xs uppercase tracking-widest text-neutral-400 font-semibold'>
              {service.projects}
            </span>
            <motion.div
              className='flex items-center gap-2 text-xs text-neutral-400 group-hover:text-white transition-colors'
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              <span>Learn more</span>
              <span>→</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Corner accent */}
      <div className='absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-3xl'></div>
    </motion.div>
  );
};
