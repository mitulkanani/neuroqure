import { latestUpdateData } from '@/utils/content';
import React from 'react';
import Heading from '../comman/Heading/Heading';
import Description from '../comman/description/Description';
import Button from '../comman/Button/Button';
import Image from 'next/image';

const LatestUpdate = () => {
  const { btnText, contentCards, description, title } = latestUpdateData;
  return (
    <div className="mx-auto mt-20 w-full max-w-[1440px] px-5 md:mt-[103px] xl:px-20">
      <div className="flex flex-col gap-10 md:gap-[63px]">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <Heading
                label={title}
                style="!text-[32px] !leading-[36px] md:!text-[42px] md:!leading-[52.5px] !font-semibold"
              />
              <Image
                src="/svg/heroBlueLine.svg"
                alt="logo"
                width={600}
                height={564}
                className="hidden lg:block"
              />
            </div>
            <Description
              description={description}
              style="!text-lg !font-normal !leading-[27px]"
            />
          </div>
          <Button label={btnText} style="!text-nowrap" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {contentCards?.slice(0, 4)?.map((card, cardIndex) => (
            <div
              key={cardIndex}
              className="flex w-full flex-col gap-6 rounded-[10px] bg-lightBlue p-5"
            >
              <Image
                src={card?.img}
                width={265}
                height={176}
                alt={card?.cardTitle}
                className="w-full rounded-[10px]"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Button
                    label={card?.category}
                    style="!bg-darkBlack !py-[5px] !px-[13px] !rounded-[5px]"
                  />
                  <div className="flex items-center gap-1 font-Roboto text-[11px] leading-[17.05px] text-darkBlack">
                    <span>{card?.date}</span>
                    <span>{card?.readTime}</span>
                  </div>
                </div>
                <Heading
                  label={card?.cardTitle}
                  style="!font-semibold !text-lg !leading-[26.28px] mt-3.5"
                />
                <Description
                  description={card?.cardDescription}
                  style="!text-[17px] !leading-[26.35px] !mt-2.5"
                />
                <div className="mt-7 flex items-center gap-[11px]">
                  <Image
                    src={card?.profilePic}
                    width={33}
                    height={33}
                    alt={card?.username}
                    className="rounded-full"
                  />
                  <p className="font-Roboto leading-[24.8px] text-darkBlack">
                    {card?.username}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestUpdate;
