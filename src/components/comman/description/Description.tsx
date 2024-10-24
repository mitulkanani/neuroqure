import { DescriptionProps } from '@/utils/types';
import React from 'react';

const Description = ({ description, style }: DescriptionProps) => {
  return (
    <p
      className={`${style} text-lightBlack font-Roboto text-lg leading-[27px]`}
    >
      {description}
    </p>
  );
};
export default Description;
