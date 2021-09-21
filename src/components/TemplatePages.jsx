import Icons from './Icons';
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
const TemplatePages = ({ children, link, isFixed }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  return (
    <>
      <div id="start">
        <div className="d-flex justify-content-start d-back">
          <Link className="arrow-color" to={link}>
            <div className="arrow-position">
              <Icons icon="arrow" />
            </div>
          </Link>
        </div>
      </div>
      {children}
      <footer id="footer" className={isDesktop ? `fixed-bottom` : ``}>
        <div className="d-flex justify-content-end">
          <Icons icon="logo" className="logo-footer" />
        </div>
      </footer>
    </>
  );
};
export { TemplatePages };
