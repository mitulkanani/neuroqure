import { HeadingProps } from '@/utils/types';
import React from 'react';

const Heading = ({ label, style }: HeadingProps) => {
  return (
    <h1
      className={`${style} font-Sora text-[36px] font-bold text-darkBlack md:text-[56px] md:leading-[67.2px]`}
    >
      {label}
    </h1>
  );
};

export default Heading;
