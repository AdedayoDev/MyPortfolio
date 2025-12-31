/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  TestimonialsType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  Facebook,
  FileText,
  Globe,
  Home,
  Instagram,
  Layers,
  Mail,
  MessageCircle,
  Palette,
  Rocket,
  Settings,
  Smartphone,
  Twitter,
  User,
  Youtube,
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
  {
    label: 'Reviews',
    link: '#testimonials',
    icon: MessageCircle,
  },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Facebook,
    label: 'Facebook',
    link: '/#',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    link: '/#',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    link: '/#',
  },
  {
    icon: Youtube,
    label: 'Youtube',
    link: '/#',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/grocery.PNG',
    title: 'Fruit Grocery Store Web App',
    tags: ['LANDING PAGE', 'Development'],
    projectLink: 'https://fruit-grocery-store-web-app.vercel.app/',
  },
  {
    imgSrc: '/vectron.PNG',
    title: 'Vechtron Tech Landing Page',
    tags: ['SOFTWARE', 'Development'],
    projectLink: 'https://dev.vechtron.tech/',
  },
  {
    imgSrc: '/elmection.PNG',
    title: 'This is the corporate website for the Elmection Technologies',
    tags: ['SOFTWARE', 'Development'],
    projectLink: 'https://dev.elmection.com/',
  },
  {
    imgSrc: '/apaay.PNG',
    title: 'Banking for African Businesses',
    tags: ['LANDING PAGE', 'Development'],
    projectLink: 'https://easybank-ten-gray.vercel.app/',
  },
  {
    imgSrc: '/lcg.PNG',
    title: 'Real Estate',
    tags: ['LANDING PAGE', 'Development'],
    projectLink: 'https://lcg-real-estate.vercel.app/',
  },
];

const education: ExperienceType[] = [
  {
    year: '2014 – 2021',
    title: 'Bachelor of Technology in Science Laboratory Technology',
    institute: 'Ladoke Akintola University of Technology (LAUTECH)',
    desc: 'Trained in analytical thinking, problem-solving, research methodology, and attention to detail.',
  },
  {
    year: '2022 – 2023',
    title: 'Frontend Development Bootcamp',
    institute: 'Techy Juant',
    desc: 'Learned the basics of HTML, CSS, JavaScript, and modern front-end frameworks like React.js.',
  },
  {
    year: '2023',
    title: 'Advanced UI/UX Design Course',
    institute: 'Cephas ICT HUB',
    desc: 'Explored advanced design systems, motion design, and accessibility best practices.',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2023 – 2024',
    title: 'Independent Frontend Developer',
    institute: 'Cephas ICT Hub',
    desc: 'Designed and developed web interfaces for SaaS startups using React, Tailwind, and Figma.',
  },
  {
    year: '2024 – Present',
    title: 'Frontend Developer Graduate Associate at LampnetS ',
    institute: 'Lampnets Solutions Technology',
    desc: 'Built and optimized responsive websites, collaborating closely with designers and backend teams.',
  },
];

const tools: ToolsType[] = [
  {
    label: 'Adobe Photoshop',
    imgSrc: '/photoshop.png',
  },
  {
    label: 'Adobe Illustrator',
    imgSrc: '/illustrator.png',
  },
  {
    label: 'CSS',
    imgSrc: '/images/tools/css3.svg',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: '/images/tools/tailwindcss.svg',
  },
  {
    label: 'React',
    imgSrc: '/images/tools/react.svg',
  },
  {
    label: 'JavaScript',
    imgSrc: '/images/tools/javascript.svg',
  },
  {
    label: 'Node.js',
    imgSrc: '/images/tools/nodejs.svg',
  },
  {
    label: 'Express.js',
    imgSrc: '/images/tools/expressjs.svg',
  },
  {
    label: 'Mongodb',
    imgSrc: '/images/tools/mongodb.svg',
  },
];

const services: ServiceType[] = [
  {
    title: 'Brand Identity',
    desc: 'I craft modern visual identities that help brands stand out through strong typography, colors, and minimal design.',
    projects: '10 Projects',
    icon: <Palette className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Graphic and Design',
    desc: 'Designing clean, intuitive, eye-catchy piece of graphics, in Flyers, Banners, Posters and Social Media posts.',
    projects: '50 Projects',
    icon: <Layers className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Web Development',
    desc: 'Building high-performance, SEO-friendly websites using Next.js, Tailwind, and modern web technologies.',
    projects: '10 Projects',
    icon: <Globe className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Mobile App Design',
    desc: 'Creating pixel-perfect app interfaces optimized for both iOS and Android devices with smooth usability.',
    projects: '3 Projects',
    icon: <Smartphone className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Product Launch Strategy',
    desc: 'Helping startups prepare their digital products for launch with design systems, marketing pages, and assets.',
    projects: '1 Projects',
    icon: <Rocket className='h-6 w-6 text-green-400' />,
  },
];

const statsData: StatsType[] = [
  {
    number: '15+',
    label: 'Happy Clients',
  },
  {
    number: '03+',
    label: 'Years Of Experience',
  },
  {
    number: '20+',
    label: 'Projects Done',
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: 'Alex Tomato',
    role: 'Brand Manager at Instant Design',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Working with David was an absolute pleasure. His attention to detail, creative insights, and ability to translate complex ideas into stunning visuals truly set him apart. He consistently went above and beyond to ensure the project exceeded expectations.',
    link: '#',
  },
  {
    name: 'Sara Bloom',
    role: 'Founder at Bloom Agency',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'David brought my brand vision to life better than I could have imagined. He is not only professional and highly skilled but also incredibly responsive and collaborative. Every aspect of the project was handled with precision and creativity.',
    link: '#',
  },
  {
    name: 'John Park',
    role: 'CEO at PixelFlow',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'From UI/UX design to front-end implementation, David handled every detail flawlessly. His problem-solving skills, innovative approach, and dedication made the entire process smooth and enjoyable. I would highly recommend him for any design-driven project.',
    link: '#',
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
  testimonials,
};
