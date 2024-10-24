import { HeadingProps } from '@/utils/types';
import React from 'react';

const Heading = ({ label, style }: HeadingProps) => {
  return (
    <div
      className={`${style} font-Sora text-[56px] font-bold leading-[67.2px] text-darkBlack`}
    >
      {label}
    </div>
  );
};

export default Heading;
