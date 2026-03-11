import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { SectionHeader } from './SectionHeader';
import { fadeUp, staggerContainer } from '@/libs/animation';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

const Contact = () => {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    console.log(values);
    // Add your submission logic here
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your@example.com',
      href: 'mailto:your@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (234) 567-8900',
      href: 'tel:+12345678900',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Your City, Country',
      href: '#',
    },
  ];

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-30'
      id='contact'
    >
      {/* Section Header */}
      <SectionHeader
        subtitle='Contact'
        title="Let's Create Something Amazing Together"
      />

      <div className='grid md:grid-cols-2 gap-12 mt-16'>
        {/* Left side - Contact info */}
        <motion.div
          variants={staggerContainer(0.1)}
          className='space-y-8'
        >
          <motion.p
            variants={fadeUp}
            className='text-neutral-300 text-lg leading-relaxed'
          >
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Get in touch and let's discuss how I can help bring your vision
            to life.
          </motion.p>

          {/* Contact Methods */}
          <div className='space-y-6'>
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  variants={fadeUp}
                  className='group flex items-center gap-4 p-4 rounded-xl border border-neutral-700/50 hover:border-primary/50 bg-neutral-900/50 hover:bg-neutral-900/80 transition-all duration-300'
                  whileHover={{ x: 8 }}
                >
                  <div className='p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/20 group-hover:border-primary/60 transition-all duration-300'>
                    <Icon className='w-5 h-5 text-primary' />
                  </div>
                  <div>
                    <p className='text-sm text-neutral-400 group-hover:text-neutral-300 transition'>
                      {method.label}
                    </p>
                    <p className='text-white font-semibold'>{method.value}</p>
                  </div>
                  <span className='ml-auto text-neutral-600 group-hover:text-primary transition'>
                    →
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            className='pt-8 border-t border-neutral-700/50'
          >
            <p className='text-sm text-neutral-400 mb-4'>
              Follow me on social media
            </p>
            <div className='flex gap-4'>
              {['twitter', 'linkedin', 'github', 'instagram'].map(
                (social, i) => (
                  <motion.a
                    key={i}
                    href='#'
                    className='w-10 h-10 rounded-lg bg-neutral-800 hover:bg-primary/20 border border-neutral-700 hover:border-primary/50 flex items-center justify-center transition-all duration-300'
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className='text-xs font-bold text-neutral-400 group-hover:text-primary capitalize'>
                      {social[0]}
                    </span>
                  </motion.a>
                ),
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Contact Form */}
        <motion.div
          variants={staggerContainer(0.1)}
          className='p-8 rounded-2xl border border-neutral-700/50 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-sm'
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-6'
            >
              {/* Name & Company Row */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <motion.div variants={fadeUp}>
                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder='Your Name'
                            className='bg-neutral-800/50 border-neutral-700/50 hover:border-primary/30 focus:border-primary/60 transition-colors'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <FormField
                    control={form.control}
                    name='company'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder='Company Name'
                            className='bg-neutral-800/50 border-neutral-700/50 hover:border-primary/30 focus:border-primary/60 transition-colors'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              </div>

              {/* Email & Phone Row */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <motion.div variants={fadeUp}>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type='email'
                            placeholder='your@example.com'
                            className='bg-neutral-800/50 border-neutral-700/50 hover:border-primary/30 focus:border-primary/60 transition-colors'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <FormField
                    control={form.control}
                    name='phone'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type='tel'
                            placeholder='+1234567890'
                            className='bg-neutral-800/50 border-neutral-700/50 hover:border-primary/30 focus:border-primary/60 transition-colors'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              </div>

              {/* Message */}
              <motion.div variants={fadeUp}>
                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder='Tell me about your project...'
                          className='h-32 bg-neutral-800/50 border-neutral-700/50 hover:border-primary/30 focus:border-primary/60 transition-colors resize-none'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={fadeUp}>
                <Button
                  type='submit'
                  size='lg'
                  className='w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary hover:to-blue-600 text-white font-semibold py-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group'
                >
                  <Send size={18} />
                  Send Message
                </Button>
              </motion.div>

              {/* Form note */}
              <motion.p
                variants={fadeUp}
                className='text-xs text-neutral-400 text-center'
              >
                I'll get back to you within 24 hours
              </motion.p>
            </form>
          </Form>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        variants={fadeUp}
        className='mt-16 p-8 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 to-blue-500/10 text-center'
      >
        <h3 className='text-2xl font-bold text-white mb-2'>
          Ready to collaborate?
        </h3>
        <p className='text-neutral-300 mb-6'>
          Whether you have a project in mind or just want to say hello, I'm here
          to help.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className='bg-gradient-to-r from-primary to-blue-500 hover:from-primary hover:to-blue-600 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/50'>
            Start a Project
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
