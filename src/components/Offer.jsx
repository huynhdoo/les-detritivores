import React from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { isMobile } from 'react-device-detect';
import FadeIn from 'react-fade-in';
const Offer = () => {
  return isMobile ? (
    <FadeIn>
      <Mobile />
    </FadeIn>
  ) : (
    <FadeIn>
      <Desktop />
    </FadeIn>
  );
};
export default Offer;
