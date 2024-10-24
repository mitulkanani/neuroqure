// import Image from 'next/image';

import EmpoweringParents from '@/components/empoweringParents/EmpoweringParents';
import HeroSection from '@/components/herosection/HeroSection';
import LatestUpdate from '@/components/LatestUpdate/LatestUpdate';
import Revolutionary from '@/components/Revolutionary/Revolutionary';
import UnderstandingNeuroQureTesting from '@/components/UnderstandingNeuroQureTesting/UnderstandingNeuroQureTesting';
import MakeOurTeam from '@/components/MakeOurTeam.tsx/MakeOurTeam';
import TransformingAutism from '@/components/transformingAutism/TransformingAutism';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <EmpoweringParents />
      <TransformingAutism />
      <Revolutionary />
      <UnderstandingNeuroQureTesting />
      <MakeOurTeam />
      <LatestUpdate />
    </div>
  );
}
