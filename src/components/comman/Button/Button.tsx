import { ButtonProps } from '@/utils/types';
import React from 'react';

const Button = ({ label, style }: ButtonProps) => {
  return (
    <button
      className={`${style} rounded-[10px] bg-darkBlue px-[30px] py-[15px] font-Roboto font-semibold leading-[24.8px] tracking-[0.28px] text-white`}
    >
      {label}
    </button>
  );
};

export default Button;
