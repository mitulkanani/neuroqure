import { HeadingProps } from '@/utils/types';
import React from 'react';

const Heading = ({ label, style }: HeadingProps) => {
  return (
    <h1
      className={`${style} font-Sora text-[56px] font-bold leading-[67.2px] text-darkBlack`}
    >
      {label}
    </h1>
  );
};

export default Heading;
