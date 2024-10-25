import { DescriptionProps } from '@/utils/types';
import React from 'react';

const Description = ({ description, style }: DescriptionProps) => {
  return (
    <p
      className={`${style} font-Roboto text-base leading-[27px] text-lightBlack md:text-lg`}
    >
      {description}
    </p>
  );
};
export default Description;
