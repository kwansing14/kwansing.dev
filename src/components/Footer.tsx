import AText from '@/ui/AText';

const Footer = () => {
  return (
    <div className='py-24 px-14 mt-16 bg-black text-white flex justify-between'>
      <div className='flex flex-col'>
        <div className='text-7xl'>
          <AText>Contact Me</AText>
        </div>
        <div className='mt-16 text-slate-400 underline'>
          kwansing@hotmail.sg
        </div>
        <div className='text-slate-400 flex gap-8 mt-8'>
          <div>LinkedIn</div> <div>Github</div> <div>SoureCode</div>
        </div>
      </div>
      <div className='text-slate-400 flex items-end'>
        Built with Next13, Tailwind, ThreeJS, with React Server Component.
      </div>
    </div>
  );
};

export default Footer;
