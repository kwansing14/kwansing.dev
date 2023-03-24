import Image, { StaticImageData } from 'next/image';

interface Prop {
  web: StaticImageData;
  mobile: StaticImageData;
}

const ProjectPic: React.FC<Prop> = ({ web, mobile }) => {
  return (
    <div className='w-6/12 h-144 relative translate-y-16'>
      <Image
        className='absolute top-0 left-0 translate-x-8'
        src={web}
        alt='webSS'
      />
      <Image
        className='absolute top-0 left-0 -translate-x-1/3 scale-75 translate-y-8'
        src={mobile}
        alt='mobileSS'
      />
    </div>
  );
};

export default ProjectPic;
