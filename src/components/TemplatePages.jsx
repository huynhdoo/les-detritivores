import Icons from './Icons';
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
const TemplatePages = ({ children, link, isFixed }) => {
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
      <footer id="footer" className={isFixed ? `fixed-bottom` : ``}>
        <div className="d-flex justify-content-end">
          <Icons icon="logo" className="logo-footer" />
        </div>
      </footer>
    </>
  );
};
export { TemplatePages };
