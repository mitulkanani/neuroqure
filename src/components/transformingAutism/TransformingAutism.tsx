import React from 'react';
import Heading from '../comman/Heading/Heading';
import Description from '../comman/description/Description';
import Button from '../comman/Button/Button';
import Image from 'next/image';

const TransformingAutism = () => {
  return (
    <div className="mx-auto max-w-[1440px] px-5 pt-[50px] md:pt-[100px] xl:px-[150px]">
      <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:justify-between md:gap-0">
        <div className="flex flex-col gap-[33.67px] md:gap-[43.67px]">
          <div className="flex flex-col gap-[20.33px]">
            <div className="w-full md:max-w-[507px]">
              <Heading
                label="Transforming Autism Diagnosis with Technology"
                style="leading-[45px] md:!leading-[52.5px] !text-[32px] md:!text-[42px] !font-semibold"
              />
            </div>
            <div className="w-full md:max-w-[531px]">
              <Description
                description="At NeuroQure, we are dedicated to transforming the landscape of autism diagnosis through our innovative early detection technology. Our approach utilizes advanced calcium signaling patterns in skin cells, offering a groundbreaking method for early identification."
                style="!font-normal  !text-[18px] !leading-[27px]"
              />
            </div>
          </div>
          <Button label="Read More" style="!font-normal !leading-[24px]" />
        </div>
        <div className="relative mr-[15px] md:mr-[30px]">
          <Image
            src="/svg/transformingAutism.svg"
            alt="logo"
            width={413}
            height={362}
          />
          <Image
            src="/svg/blueLayer.svg"
            alt="logo"
            width={413}
            height={362}
            className="absolute -top-[15px] left-[15px] z-[-1] mr-[15px] md:-top-[30px] md:left-[30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TransformingAutism;
