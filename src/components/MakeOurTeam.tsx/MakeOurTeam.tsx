'use client';
import React from 'react';
import Heading from '../comman/Heading/Heading';
import Description from '../comman/description/Description';
import { Meetourteam, socialicons } from '@/utils/content';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const MakeOurTeam = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-[61px] overflow-hidden bg-lightBlue pb-[70px] pt-[60px]">
        <div className="flex flex-col gap-[19.93px]">
          <div>
            <Heading
              label="Meet our Team"
              style="!text-[42px] !leading-[52.5px] !font-semibold !text-center"
            />
          </div>
          <div>
            <Description
              description="Dedicated experts committed to early autism detection."
              style="!font-normal !text-center !leading-[27.9px]"
            />
          </div>
        </div>
        <div className="mx-auto flex max-w-[1440px] gap-[29px]">
          <Swiper
            slidesPerView={1}
            pagination={{
              el: '.custom-swiper-pagination',
              clickable: true,
            }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            modules={[Pagination, Autoplay, Navigation]}
            draggable
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {Meetourteam?.map((item, index) => (
              <SwiperSlide
                key={index}
                className="!h-auto !w-full max-w-[413px]"
              >
                <div
                  key={index}
                  className="flex h-full w-full flex-col justify-between gap-[15.85px] rounded-[10px] bg-white p-[30px]"
                >
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
