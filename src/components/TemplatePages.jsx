import Icons from './Icons';
import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';
import { isMobile } from 'react-device-detect';
import { Overlay } from 'react-bootstrap';
const TemplatePages = ({ children, link, classN }) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <>
      <div id="start">
        <div className="d-flex justify-content-start d-back">
          <Link
            variant="danger"
            ref={target}
            onMouseEnter={() => setShow(!show)}
            className="arrow-color"
            to={link}
          >
            <div className="arrow-position">
              <Icons icon="arrow" />
            </div>
          </Link>
          <div className="logo-espace">
            <Icons icon="logo" className="logos-space" />
          </div>
        </div>
      </div>
      <Overlay target={target.current} show={show} placement="bottom">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              backgroundColor: '#000',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 5,
              marginLeft: '1rem',
              ...props.style,
            }}
          >
            Retour
          </div>
        )}
      </Overlay>
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
