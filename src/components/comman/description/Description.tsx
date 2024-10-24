import { DescriptionProps } from '@/utils/types';
import React from 'react';

const Description = ({ description, style }: DescriptionProps) => {
  return (
    <p
      className={`${style} font-Roboto text-lg leading-[27px] text-lightBlack`}
    >
      {description}
    </p>
  );
};

export default Description;
