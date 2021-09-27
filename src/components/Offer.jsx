import React, { useEffect, useState } from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { isMobile } from 'react-device-detect';

const Offer = () => {
  return isMobile ? <Mobile /> : <Desktop />;
};
export default Offer;
