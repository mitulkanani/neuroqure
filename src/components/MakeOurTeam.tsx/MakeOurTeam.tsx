'use client';
import React from 'react';
import Heading from '../comman/Heading/Heading';
import Description from '../comman/description/Description';
import { Meetourteam, socialicons } from '@/utils/content';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const MakeOurTeam = () => {
  return (
    <div className="mt-[72px] w-full">
      <div className="flex flex-col gap-[61px] overflow-hidden bg-lightBlue pb-[70px] pt-[60px]">
        <div className="flex flex-col items-center gap-[19.93px]">
          <div className="flex flex-col items-end">
            <Heading
              label="Meet our Team"
              style="!text-[42px] !leading-[52.5px] !font-semibold !text-center"
            />
            <div>
              <Image
                src="/svg/heroBlueLine.svg"
                alt="logo"
                width={216}
                height={10}
                className=""
              />
            </div>
          </div>
          <div>
            <Description
              description="Dedicated experts committed to early autism detection."
              style="!font-normal !text-center !leading-[27.9px]"
            />
          </div>
        </div>

        <div className="mx-auto max-w-[1440px]">
          <Swiper
            id="homeSwiper"
            className="makeourteamswiper mx-5"
            slidesPerView={'auto'}
            loop
            draggable={true}
            freeMode={true}
            speed={700}
            spaceBetween={20}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[EffectFade, Navigation, Pagination]}
            onInit={(swiper) => {
              swiper?.navigation?.init();
              swiper?.navigation?.update();
            }}
          >
            {Meetourteam?.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto !w-fit">
                <div className="flex h-full w-full max-w-[413px] flex-col justify-between gap-[15.85px] rounded-[10px] bg-white p-[30px]">
                  <div className="flex flex-col gap-[31.93px]">
                    <div className="flex items-center gap-[10px]">
                      <div>
                        <Image
                          src={item?.image}
                          alt="logo"
                          width={70}
                          height={70}
                          className="h-full max-h-[70px] w-full max-w-[70px] rounded-full"
                        />
                      </div>
                      <div>
                        <Heading
                          label={item?.name}
                          style="!text-[19px] !leading-[30px] !font-semibold"
                        />
                        <Heading
                          label={item?.designation}
                          style="!text-base !leading-[24px] !font-normal text-lightGray"
                        />
                      </div>
                    </div>
                    <Description description={item?.desc} />
                  </div>
                  <div className="flex gap-3">
                    {socialicons?.map((item, index) => (
                      <div key={index} className="h-[22px] w-[22px]">
                        <Image
                          src={item?.icon}
                          alt="logo"
                          width={22}
                          height={22}
                          className="h-full max-h-[22px] w-full max-w-[22px] object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center justify-center gap-2.5">
          <div className="swiper-button-prev cursor-pointer bg-darkBlack px-7">
            <Image src="/svg/leftArrow.svg" alt="logo" width={40} height={40} />
          </div>
          <div className="swiper-button-next cursor-pointer bg-darkBlack px-7">
            <Image
              src="/svg/leftArrow.svg"
              alt="logo"
              width={40}
              height={40}
              className="rotate-180"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeOurTeam;
