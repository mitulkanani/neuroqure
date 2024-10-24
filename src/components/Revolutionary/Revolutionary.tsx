import Image from 'next/image';
import React from 'react';
import Heading from '../comman/Heading/Heading';
import { revolutionarySectionData } from '@/utils/content';
import Button from '../comman/Button/Button';
import Description from '../comman/description/Description';

const Revolutionary = () => {
  return (
    <div className="mx-auto mt-[100px] w-full max-w-[1440px] px-5 xl:px-20">
      <div className="flex justify-between gap-5 bg-lightBlue px-[108px] py-[55px]">
        <Image
          src={'/images/baby.png'}
          width={414}
          height={444}
          alt="Revolutionary side img"
          className="rounded-[10px]"
        />
        <div className="flex w-full flex-col gap-[30px] md:max-w-[522px]">
          <div className="flex flex-col gap-5">
            <Heading
              label={revolutionarySectionData?.title}
              style="!text-[42px] !leading-[52.5px] font-semibold"
            />
            <Description description={revolutionarySectionData?.description} />
            <div className="flex flex-col gap-[15px]">
              {revolutionarySectionData?.labels?.map((label, labelIndex) => (
                <div key={labelIndex} className="flex items-center gap-[10px]">
                  <Image
                    src={'/svg/shield.svg'}
                    width={20}
                    height={20}
                    alt="Revolutionary shield"
                    className="rounded-[10px]"
                  />
                  <p className="font-Roboto text-lg font-semibold leading-[27.9px] text-lightBlack">
                    {label?.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Button label={revolutionarySectionData?.btnText} style="w-fit" />
        </div>
      </div>
    </div>
  );
};

export default Revolutionary;
