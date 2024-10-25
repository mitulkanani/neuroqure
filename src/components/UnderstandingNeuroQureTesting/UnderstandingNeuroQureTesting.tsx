import React from 'react';
import Heading from '../comman/Heading/Heading';
import { understandingNeuroQureTesting } from '@/utils/content';
import Image from 'next/image';
import Button from '../comman/Button/Button';
import Description from '../comman/description/Description';

const UnderstandingNeuroQureTesting = () => {
  const { content, description, title } = understandingNeuroQureTesting;
  return (
    <div className="mx-auto mt-20 w-full max-w-[1440px] px-5 md:mt-[97px] xl:px-20">
      <div className="flex flex-col gap-10 md:gap-[60px] xl:pl-[81px] xl:pr-5">
        <div className="flex flex-col gap-[17px] text-center">
          <Heading
            label={title}
            style="!text-[35px] md:!text-[42px] !leading-[45px] md:!leading-[52.5px] !font-semibold"
          />
          <Description
            description={description}
            style="!text-lg !font-normal !leading-[27.9px]"
          />
        </div>
        <div className="flex flex-col gap-10 md:gap-[62px]">
          {content?.map((service, serviceIndex) => (
            <div
              key={serviceIndex}
              className="grid w-full items-center gap-[35px] md:grid-cols-2 lg:gap-[71px]"
            >
              <Image
                src={service?.img}
                alt={service?.label}
                width={517}
                height={215}
                className="w-full rounded-[10px]"
              />
              <div className="flex flex-col gap-5 lg:gap-9">
                <div className="flex flex-col gap-[11px]">
                  <div className="flex flex-col gap-1.5">
                    <h6 className="font-Roboto text-sm font-semibold uppercase leading-[21.7px]">
                      {service?.label}
                    </h6>
                    <Heading
                      label={service?.text}
                      style="!text-[24px] !leading-[30px] lg:!text-[35px] lg:!leading-[43.75px] !font-semibold"
                    />
                    <Description
                      description={understandingNeuroQureTesting?.description}
                      style="text-base lg:!text-lg !font-normal lg:!leading-[27.9px]"
                    />
                  </div>
                </div>
                <Button
                  label={service?.btnText}
                  style="w-fit !px-[50px] !py-[15px] !rounded-[5px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnderstandingNeuroQureTesting;
