import React from 'react';
import {
  UpsideDownDoctorSvg,
  HappyDoctorThumbsUpSvg,
  TeaShopUncleSvg,
  FamilyCelebrationSvg,
  DoctorRemovingGlassesSvg,
  DramaticRainSvg,
  TeaWarningSirenSvg,
  ShoppingCartChaosSvg,
  DoctorPointingReportSvg,
  ShockedAuntieSvg,
  ChasingBusSvg,
  FoodTableChaosSvg,
  VillainDoctorSvg,
  AnalyzingLoadingSvg,
  DoctorFaintingSvg,
  DancingSkeletonSvg
} from './illustrations/Illustrations';

export const IllustrationRenderer = ({ name, className = "w-48 h-48 sm:w-60 sm:h-60 mx-auto" }) => {
  switch (name) {
    case 'upsideDownDoctor':
      return <UpsideDownDoctorSvg className={className} />;
    case 'happyDoctor':
      return <HappyDoctorThumbsUpSvg className={className} />;
    case 'teaUncle':
      return <TeaShopUncleSvg className={className} />;
    case 'familyCelebrate':
      return <FamilyCelebrationSvg className={className} />;
    case 'doctorRemovingGlasses':
      return <DoctorRemovingGlassesSvg className={className} />;
    case 'dramaticRain':
      return <DramaticRainSvg className={className} />;
    case 'teaWarning':
      return <TeaWarningSirenSvg className={className} />;
    case 'shoppingCartChaos':
      return <ShoppingCartChaosSvg className={className} />;
    case 'doctorPointingReport':
      return <DoctorPointingReportSvg className={className} />;
    case 'shockedAuntie':
      return <ShockedAuntieSvg className={className} />;
    case 'chasingBus':
      return <ChasingBusSvg className={className} />;
    case 'foodTableChaos':
      return <FoodTableChaosSvg className={className} />;
    case 'villainDoctor':
      return <VillainDoctorSvg className={className} />;
    case 'analyzingLoading':
      return <AnalyzingLoadingSvg className={className} />;
    case 'doctorFainting':
      return <DoctorFaintingSvg className={className} />;
    case 'dancingSkeleton':
      return <DancingSkeletonSvg className={className} />;
    default:
      return <UpsideDownDoctorSvg className={className} />;
  }
};
