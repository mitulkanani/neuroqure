import Image from 'next/image';
import React from 'react';
import Heading from '../comman/Heading/Heading';
import { revolutionarySectionData } from '@/utils/content';
import Button from '../comman/Button/Button';
import Description from '../comman/description/Description';

const Revolutionary = () => {
  return (
    <div className="mx-auto mt-[50px] w-full max-w-[1440px] px-5 md:mt-[100px] xl:px-20">
      <div className="flex flex-col items-center justify-center gap-5 bg-lightBlue px-5 py-[55px] md:justify-between lg:flex-row xl:px-[108px]">
        <Image
          src={'/images/baby.png'}
          width={414}
          height={444}
          alt="Revolutionary side img"
          className=""
        />
        <div className="flex w-full flex-col gap-[30px] lg:max-w-[522px]">
          <div className="flex flex-col gap-5">
            <Heading
              label={revolutionarySectionData?.title}
              style="!text-[32px] md:!text-[42px] leading-[45px] !leading-[52.5px] font-semibold"
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
