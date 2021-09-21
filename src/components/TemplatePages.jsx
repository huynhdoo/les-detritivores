import Icons from './Icons';
import React from 'react';
import { Link } from 'gatsby';
const TemplatePages = ({ children, link }) => {
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
      <footer id="footer" className="fixed-bottom">
        <div className="d-flex justify-content-end">
          <Icons icon="logo" className="logo-footer" />
        </div>
      </footer>
    </>
  );
};
export { TemplatePages };
