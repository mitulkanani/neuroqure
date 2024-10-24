import Image from 'next/image';
import React from 'react';
import Heading from '../comman/Heading/Heading';

const HeroSection = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <Heading label="Early Detection, Brighter Futures" />
        </div>
        <div>
          <Image
            src="/images/heroSection.png"
            alt="logo"
            width={998}
            height={564}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
