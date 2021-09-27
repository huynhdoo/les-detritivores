import React, { useEffect, useState } from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { isMobile } from 'react-device-detect';

const Offer = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      setScreenWidth(innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile ? <Mobile /> : <Desktop />;
};
export default Offer;
