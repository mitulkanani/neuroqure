import { Navlinks } from '@/utils/content';
import Image from 'next/image';
import React from 'react';
import Button from '../Button/Button';

const Navbar = () => {
  return (
    <div className="mx-auto w-full max-w-[1440px]">
      <div className="mx-5 mt-10 flex items-center justify-between rounded-[10px] bg-lightBlue py-[18px] xl:mx-20">
        <div>
          <Image
            src="/svg/logo.svg"
            alt="logo"
            width={168}
            height={53}
            className="ml-[31px] h-full max-h-[53px] w-full max-w-[168px]"
          />
        </div>
        <div className="flex items-center justify-between gap-[60px]">
          <div className="flex gap-[38px]">
            {Navlinks?.map((item, index) => (
              <div key={index} className="flex">
                <div className="font-Roboto leading-[24.8px] tracking-[0.28px] text-darkBlack">
                  {item?.title}
                </div>
              </div>
            ))}
          </div>
          <div className="pr-[21px]">
            <Button label="Order Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
