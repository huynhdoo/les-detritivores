import Icons from './Icons';
import React from 'react';
import { Link } from 'gatsby';
import { isMobile } from 'react-device-detect';
import ImportCSS from './ImportCSS';
const TemplatePages = ({ children, link, classN }) => {
  return (
    <>
      <ImportCSS />
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
      <footer id="footer" className={isMobile ? '' : classN}>
        <div className="d-flex justify-content-end footers">
          <Icons icon="logo" className="logo-footer" />
        </div>
      </footer>
    </>
  );
};
export { TemplatePages };
