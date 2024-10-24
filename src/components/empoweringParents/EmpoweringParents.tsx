import { empoweringParents } from '@/utils/content';
import Image from 'next/image';
import Description from '../comman/description/Description';
import Heading from '../comman/Heading/Heading';

const EmpoweringParents = () => {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 xl:px-20">
      <div className="flex flex-col gap-[66px]">
        <div className="mx-auto w-full max-w-[872px]">
          <Heading
            label="Empowering Parents with Early Autism Detection: A Lifeline for Your Child"
            style="!text-[42px]  !leading-[52.5px] !font-semibold !text-center"
          />
        </div>
        <div className="grid grid-cols-1 gap-[25px] rounded-[10px] bg-lightBlue p-[35px] md:grid-cols-2 xl:grid-cols-3">
          {empoweringParents?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-[10px] bg-white p-[30px]"
            >
              <div className="flex flex-col gap-[19px]">
                <div className="h-full max-h-[70px] w-full max-w-[70px] rounded-full bg-offlightBlue p-4">
                  <Image
                    src={item?.img}
                    alt="icon"
                    width={38}
                    height={38}
                    className="h-full max-h-[38px] w-full max-w-[38px] object-contain"
                  />
                </div>
                <div className="flex flex-col gap-[11px]">
                  <Heading
                    label={item?.title}
                    style="!text-[24px] !font-normal  !leading-[28.8px]"
                  />
                  <Description
                    description={item?.description}
                    style="!text-[16px] !font-normal !leading-[24px]"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="font-Roboto font-semibold leading-[24.8px] tracking-[0.28px] text-darkBlack underline">
                  {item.subtitle}
                </div>
                <Image
                  src={'/svg/rightArrow.svg'}
                  alt="icon"
                  width={24}
                  height={24}
                  className="h-full max-h-[24px] w-full max-w-[24px] cursor-pointer object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmpoweringParents;
