'use client';
import { Lenis } from '@studio-freight/react-lenis';

const LenisWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Lenis root>{children}</Lenis>;
};

export default LenisWrapper;
