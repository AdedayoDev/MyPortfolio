import { Button } from './ui/button';
import { socialLinks } from '@/constants';

const Profile = () => {
  return (
    <aside className='max-w-3xl border m-6 border-neutral-600 bg-neutral-900 text-white p-6 rounded-lg lg:sticky lg:left-0 lg:top-6 lg:w-96'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between gap-x-10'>
          <h1 className='text-3xl font-bold'>John</h1>
          <p className='text-sm'>Frontend Designer & Developer</p>
        </div>

        <img
          src='/avatarjpg.png'
          alt='John '
          className='lg:w-96 rounded-2xl object-cover'
        />

        <div className='mt-6'>
          <p className='text-sm text-neutral-300 '>Specialization:</p>

          <p className='text-lg capitalize'>
            Frontend Developer and Graphic designer
          </p>
        </div>
        <div className='mt-6'>
          <p className='text-sm text-neutral-300 '>Based in:</p>

          <p className='text-lg capitalize'>
            Based in Lagos, NG
          </p>
        </div>

        <div className='flex gap-3 pt-2 text-neutral-500'>
            {socialLinks.map((social, i) => {
                const Icon = social.icon;

                return (
                    <a key={i} href={social.link} className='hover:text-primary border-2 border-neutral-500 p-2 rounded-full hover:border-primary transition duration-200 '>
                        <Icon className="size-6"/>
                    </a>
                )
            })}
        </div>

        <Button className='mt-2 bg-white text-black' size="lg">Let's Work</Button>
      </div>
    </aside>
  );
};

export default Profile;
