import Seperator from '@/components/Blogs/Seperator';
import { Roboto_Mono } from 'next/font/google';
import AText from '@/ui/AText';

const RobotoMono = Roboto_Mono({ subsets: ['latin'] });

const Blogs = () => {
  const blogsList = [
    {
      index: '01',
      name: 'blog1',
      content: 'lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      index: '02',
      name: 'blog2',
      content:
        'lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum m lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      index: '03',
      name: 'blog3',
      content: 'lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
  ];
  return (
    <div className='mt-16 px-14'>
      <div className='text-7xl font-bold mb-8'>
        <AText>Blogs</AText>
      </div>
      {blogsList.map((blog, index) => (
        <div key={index} className='flex h-32'>
          <div
            className={
              'w-1/12 flex justify-start items-center text-sm' +
              ` ${RobotoMono.className}`
            }
          >
            {blog.index}
          </div>
          <div className='w-11/12'>
            <Seperator>
              <div className='flex justify-start items-center h-full w-full'>
                <div
                  className={'text-3xl w-3/12 text-slate-700 cursor-pointer'}
                >
                  {blog.name}
                </div>
                <div className='w-9/12'>
                  <div className='w-128 text-slate-500 cursor-pointer'>
                    {blog.content}
                  </div>
                </div>
              </div>
            </Seperator>
          </div>
        </div>
      ))}
      <div className='bg-black h-1.5 mt-16 w-full' />
    </div>
  );
};

export default Blogs;
