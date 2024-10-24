import Image from 'next/image';
import React from 'react';
import Heading from '../comman/Heading/Heading';
import Description from '../comman/description/Description';
import Button from '../comman/Button/Button';

const HeroSection = () => {
  return (
    <div className="relative mx-auto w-full max-w-[1440px] px-5 xl:px-20">
      <div className="flex w-full">
        <div className="mb-[251px] mt-[183px] flex flex-col gap-[19px]">
          <div className="flex flex-col gap-[7px]">
            <div className="w-full max-w-[605px]">
              <Heading label="Early Detection, Brighter Futures" />
            </div>
            <div className="flex w-full flex-col gap-[16.93px] md:max-w-[531px]">
              <div>
                <Image
                  src="/svg/heroBlueLine.svg"
                  alt="logo"
                  width={998}
                  height={564}
                />
              </div>
              <Description description="At NeuroQure™, we believe that early detection is key to unlocking the potential of every child. Our innovative technology empowers families with the insights they need to support their loved ones from day two." />
            </div>
          </div>
          <div className="flex gap-5">
            <Button label="Discover" style="!font-normal !leading-[24px]" />
            <Button
              label="Learn More"
              style="!border !bg-white  !text-darkBlue !font-normal !leading-[24px]"
            />
          </div>
        </div>
        <div className="absolute right-0 z-[-1] mt-[83px]">
          <Image
            src="/images/heroSection.png"
            alt="logo"
            width={998}
            height={564}
            className="h-full max-h-[564px] w-full max-w-[998px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
