import AText from '@/ui/AText';

const Footer = () => {
  return (
    <div className='h-96 px-14 mt-16 border bg-black text-white flex flex-col justify-center'>
      <div className='text-7xl'>
        <AText>Contact Me</AText>
      </div>
      <div className='mt-16 text-slate-400'>kwansing@hotmail.sg</div>
      <div className='mt-4 text-slate-400'>LinkedIn Github SoureCode</div>
      <div className='mt-4 text-slate-400'>
        Page is built with NextJS 13, Tailwind, ThreeJS, using React Server
        Component.
      </div>
    </div>
  );
};

export default Footer;
