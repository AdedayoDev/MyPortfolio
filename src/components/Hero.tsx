import { fadeUp, staggerContainer } from '@/libs/animation';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { SparkleIcon } from 'lucide-react';

const RESUME_URL =
  'https://drive.google.com/uc?export=download&id=1C804-7_08jNTFsaB_spLi8xyHh5eaMp_';

const WHATSAPP_URL = 'https://wa.me/2348107006660';

const LINKEDIN_URL =
  'https://www.linkedin.com/in/ilesanmi-adedayo-john-469663140';

const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="pt-20"
      id="hero"
    >
      <motion.p
        variants={fadeUp}
        className="flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32"
      >
        <SparkleIcon size={15} /> <span>Introduction</span>
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className="text-4xl md:text-5xl lg:text-6xl font-semibold capitalize mt-2 max-w-3xl md:leading-16"
      >
        I'm <span className="text-primary">John Adedayo</span> Full Stack Web
        Developer and Graphic Designer
      </motion.h1>

      <motion.div variants={fadeUp} className="mt-5 flex gap-2 flex-wrap">
        <Button asChild>
          <a href="#projects">My Projects</a>
        </Button>

        <Button asChild variant="outline">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </Button>

        <Button asChild variant="secondary">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
        </Button>

        <Button asChild variant="ghost">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
