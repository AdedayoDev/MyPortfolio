import type { ServiceType } from '@/types';
export const ServiceCard = ({ title, desc, projects, icon }: ServiceType) => {
  return (
    <div className=' flex items-start justify-between rounded-2xl border border-neutral-700 p-8 hover:bg-zinc-800 transition-all duration-300 hover:border-primary relative'>
      <div>
        <h3 className='text-lg font-medium text-white mb-1'>{title}</h3>
        <p className='text-neutral-300 mb-3'>{desc}</p>
        <span className='text-sm lining-nums text-nuetral-400 font-medium uppercase tracking-wide'>{projects}</span>
      </div>
      <div className='shrink-0'>{icon}</div>
    </div>
  );
};
