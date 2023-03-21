'use client';

import { ReactNode, useState } from 'react';
import { clsx } from 'clsx';
// import DarkenBar from '@/ui/DarkenBar';
interface Props {
  children: ReactNode;
  fullW?: boolean;
  variant?: number;
  v2State?: boolean;
}

interface DarkenBarProps {
  isMouseEnter: boolean;
}

export const DarkenBar: React.FC<DarkenBarProps> = ({ isMouseEnter }) => {
  return (
    <div className='relative w-full h-1 overflow-hidden'>
      <div className='h-0.5 bg-slate-300 absolute top-0 left-0 w-full' />
      <div
        className={clsx(
          'h-0.5 bg-black absolute top-0 left-0 w-full transition-all',
          {
            'translate-x-0': isMouseEnter,
            '-translate-x-full': !isMouseEnter,
          }
        )}
      />
    </div>
  );
};

const LinkBar: React.FC<Props> = ({
  children,
  fullW,
  variant = 1,
  v2State = false,
}) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  return (
    <div className={clsx('flex h-full', { 'w-full': fullW })}>
      <div
        className={clsx('flex h-full flex-col justify-end', {
          'w-full': fullW,
        })}
      >
        {variant === 1 && <DarkenBar isMouseEnter={isMouseEnter} />}
        {variant === 2 && <DarkenBar isMouseEnter={v2State} />}
        {variant === 1 && (
          <div
            className={
              'mt-2 flex items-center gap-8 text-slate-400 hover:cursor-pointer hover:text-black transition-all duration-300'
            }
            onMouseEnter={() => setIsMouseEnter(true)}
            onMouseLeave={() => setIsMouseEnter(false)}
          >
            {children}
          </div>
        )}
        {variant === 2 && (
          <div
            className={
              'mt-2 flex items-center gap-8 text-slate-400 transition-all duration-300'
            }
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkBar;
