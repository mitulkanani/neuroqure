import React from 'react';
import Heading from '../comman/Heading/Heading';
import { understandingNeuroQureTesting } from '@/utils/content';
import Image from 'next/image';
import Button from '../comman/Button/Button';
import Description from '../comman/description/Description';

const UnderstandingNeuroQureTesting = () => {
  const { content, description, title } = understandingNeuroQureTesting;
  return (
    <div className="mx-auto mt-[97px] w-full max-w-[1440px] px-5 xl:px-20">
      <div className="flex flex-col gap-[60px] pl-[81px] pr-5">
        <div className="flex flex-col gap-[17px] text-center">
          <Heading
            label={title}
            style="!text-[42px] !leading-[52.5px] !font-semibold"
          />
          <Description
            description={description}
            style="!text-lg !font-normal !leading-[27.9px]"
          />
        </div>
        <div className="flex flex-col gap-[62px]">
          {content?.map((service, serviceIndex) => (
            <div
              key={serviceIndex}
              className="flex w-full items-center gap-[71px]"
            >
              <Image
                src={service?.img}
                alt={service?.label}
                width={517}
                height={215}
                className="rounded-[10px]"
              />
              <div className="flex flex-col gap-9">
                <div className="flex flex-col gap-[11px]">
                  <div className="flex flex-col gap-1.5">
                    <h6 className="font-Roboto text-sm font-semibold uppercase leading-[21.7px]">
                      {service?.label}
                    </h6>
                    <Heading
                      label={service?.text}
                      style="!text-[35px] !leading-[43.75px] !font-semibold"
                    />
                    <Description
                      description={understandingNeuroQureTesting?.description}
                      style="!text-lg !font-normal !leading-[27.9px]"
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
