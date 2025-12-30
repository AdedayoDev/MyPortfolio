import { motion } from 'framer-motion';
import { fadeUp} from '@/libs/animation';
import type { ToolsType } from '@/types';

export const ToolsCard = ({ tool }: { tool: ToolsType }) => {
  return (
    <motion.div
      variants={fadeUp}

      className='border border-neutral-700 rounded-md py-4 flex flex-col items-center justify-center hover:bg-neutral-800 transition duration-300'
    >
      <img
        src={tool.imgSrc}
        alt={tool.label}
      />


      <p className='font-bold mt-2'>{tool.label}</p>
    </motion.div>
  );
};
