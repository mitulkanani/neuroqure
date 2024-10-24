// import Image from 'next/image';

import EmpoweringParents from '@/components/empoweringParents/EmpoweringParents';
import HeroSection from '@/components/herosection/HeroSection';
import MakeOurTeam from '@/components/MakeOurTeam.tsx/MakeOurTeam';
import TransformingAutism from '@/components/transformingAutism/TransformingAutism';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <EmpoweringParents />
      <TransformingAutism />
      <MakeOurTeam />
    </div>
  );
}
