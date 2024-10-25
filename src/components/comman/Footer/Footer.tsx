import { footerData } from '@/utils/content';
import Image from 'next/image';
import Link from 'next/link';
import Description from '../description/Description';

const Footer = () => {
  const { bottomLinks, logo, logoLink, pages, rights, subscribe } = footerData;
  return (
    <div className="mt-20 bg-lightBlue py-20 md:mt-[172px] md:py-[100px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 xl:px-20">
        <div className="flex flex-col gap-10 md:gap-[58px] lg:px-[102px]">
          <div className="flex flex-col gap-20 lg:flex-row lg:items-start xl:gap-[97px]">
            <div className="order-2 flex w-full flex-wrap items-start justify-start gap-20 lg:order-1 lg:flex-nowrap lg:justify-between lg:gap-5 lg:pt-8">
              {pages?.map((page, pageIndex) => (
                <div key={pageIndex} className="flex flex-col gap-[15px]">
                  <h3 className="font-Sora font-semibold leading-[28px] text-darkBlack">
                    {page?.label}
                  </h3>
                  <div className="flex flex-col gap-[13px]">
                    {page?.links?.map((link, linkIndex) => (
                      <div key={linkIndex}>
                        {link?.icon ? (
                          <Image
                            src={link?.icon}
                            alt="icon"
                            width={95}
                            height={19}
                            className="mb-2"
                          />
                        ) : (
                          <Link
                            key={linkIndex}
                            href={link?.link}
                            className="font-Roboto leading-[18.75px] text-darkBlack opacity-50"
                          >
                            {link?.text}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* subscribe */}
            <div className="order-1 flex max-w-fit flex-col gap-[19px] rounded-[10px] bg-steelBlue px-5 pb-[27px] pt-8 md:px-[42px] lg:order-2">
              <div className="flex flex-col gap-2">
                <h3 className="font-Sora font-semibold leading-[28px] text-white">
                  {subscribe?.title}
                </h3>
                <Description
                  description={subscribe?.description}
                  style="!text-white !text-sm !leading-[20.4px] opacity-60"
                />
                {/* email */}
                <div className="flex w-fit rounded-[10px] bg-white">
                  <input
                    type="email"
                    placeholder={subscribe?.emailPlaceHolder}
                    className="w-full max-w-[200px] rounded-l-[10px] border-t-[1.5px] border-lavenderGray bg-transparent p-4 font-Sora text-sm leading-[17.64px] text-darkBlack text-opacity-60 outline-none"
                  />
                  <button className="h-[51px] w-[50px] rounded-lg bg-azureBlue p-[18px]">
                    <Image
                      src={subscribe?.submitIcon}
                      width={13}
                      height={15.28}
                      alt="submitIcon"
                    />
                  </button>
                </div>
              </div>
              <Description
                description={subscribe?.descriptionSecond}
                style="!text-white !text-xs !leading-[16.4px] opacity-60"
              />
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <hr className="border border-darkBlack opacity-[0.06]" />
            <div className="flex flex-col items-center justify-between gap-5 sm:flex-row sm:flex-wrap">
              <Link href={logoLink}>
                {' '}
                <Image src={logo} alt="logo" width={168} height={53} />
              </Link>
              <Description
                description={rights}
                style="!text-sm !leading-[21px] !text-darkBlack opacity-50"
              />
              <div className="flex items-center gap-5 md:gap-9">
                {bottomLinks?.map((bottomLink, bottomLinkIndex) => (
                  <Link
                    key={bottomLinkIndex}
                    href={bottomLink?.link}
                    className="font-Roboto text-sm font-semibold leading-[16.41px] text-darkBlack"
                  >
                    {bottomLink?.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
