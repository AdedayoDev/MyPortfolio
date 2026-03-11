import { fadeUp, staggerContainer } from '@/libs/animation';
import { motion } from 'framer-motion';
import { statsData } from '@/constants';
import { TrendingUp, Lightbulb, Users } from 'lucide-react';

const iconMap = [TrendingUp, Lightbulb, Users];

const Stats = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.8 }}
      variants={staggerContainer(0.2)}
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-20'
      id='stats'
    >
      {statsData.map((stats, i) => {
        const Icon = iconMap[i % iconMap.length];
        const colors = [
          'from-blue-500/20 to-blue-600/10',
          'from-purple-500/20 to-purple-600/10',
          'from-pink-500/20 to-pink-600/10',
        ];
        const borderColors = [
          'border-blue-500/30 hover:border-blue-400/60',
          'border-purple-500/30 hover:border-purple-400/60',
          'border-pink-500/30 hover:border-pink-400/60',
        ];
        const textColors = [
          'text-blue-400',
          'text-purple-400',
          'text-pink-400',
        ];

        return (
          <motion.div
            key={i}
            className={`border ${borderColors[i % 3]} rounded-2xl flex justify-between items-center flex-col py-10 px-8 bg-gradient-to-br ${colors[i % 3]} backdrop-blur-sm overflow-hidden relative group transition-all duration-300 hover:shadow-lg hover:shadow-${textColors[i % 3]}/20`}
            variants={fadeUp}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Background animated gradient */}
            <div className='absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10'></div>

            {/* Icon with glow */}
            <motion.div
              className={`p-4 rounded-xl bg-gradient-to-br ${colors[i % 3]} border ${borderColors[i % 3].split(' ')[0]} mb-6 relative`}
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: 'spring' }}
            >
              <Icon className={`${textColors[i % 3]} w-8 h-8`} />
              {/* Glow ring */}
              <div
                className={`absolute inset-0 rounded-xl bg-${textColors[i % 3]}/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
            </motion.div>

            {/* Number with counter animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p
                className={`text-5xl md:text-6xl font-bold lining-nums ${textColors[i % 3]} font-mono`}
              >
                {stats.number}
              </p>
            </motion.div>

            {/* Label */}
            <motion.p
              className='text-neutral-300 mt-3 text-center font-medium text-sm uppercase tracking-wide'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.15 }}
            >
              {stats.label}
            </motion.p>

            {/* Bottom accent line */}
            <div
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${colors[i % 3]} w-0 group-hover:w-full transition-all duration-300`}
            ></div>
          </motion.div>
        );
      })}
    </motion.section>
  );
};

export default Stats;
