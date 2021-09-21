import Icons from './Icons';
import React from 'react';
const Template = ({ children }) => {
  return (
    <>
      <div id="start">
        <Icons icon="logo" className="logos" />
      </div>
      {children}
      <footer id="footer">
        <div className="d-flex justify-content-end">
          <Icons icon="logo" className="logo-footer" />
        </div>
      </footer>
    </>
  );
};
export { Template };
