import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import Icons from './Icons';

const Offer = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
      setIsDesktop(false);
    } else {
      setIsMobile(false);
      setIsDesktop(true);
    }
  };
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
      window.addEventListener('resize', handleResize);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
      window.addEventListener('resize', handleResize);
    }
  }, []);
  return (
    <>
      {isDesktop ? (
        <>
          <div className="pb-6 d-grid gap-2 justify-content-center mt-6 sizes container-fluid">
            <div>
              <p classname="light" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="bg-green c-boxs">
                  <Icons icon="camion" />
                </div>
                <h1 className="orange d-flex justify-content-center px-12 d-low offers-text">
                  COLLECTE
                </h1>
                <p className="d-low-2">
                  {' '}
                  En camions ou à vélos, nos
                  <br /> équipes passent régulièrement
                  <br /> collecter vos bacs de biodéchets
                  <br />
                  <Link style={{ fontWeight: 'bold' }} to="/collecte">
                    Lire Plus...
                  </Link>
                </p>
              </p>
            </div>
            <div>
              <p classname="light" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="bg-green c-boxs">
                  <Icons icon="happystar" />
                </div>
                <h1 className="orange d-flex justify-content-center px-12 d-low offers-text ">
                  SENSIBILISATION
                </h1>
                <p className="d-low-2">
                  Vous accompagner dans votre
                  <br /> démarche environnementale et
                  <br /> vous sensibiliser est notre priorité !
                  <br />
                  <Link style={{ fontWeight: 'bold' }} to="/sensibilisation">
                    Lire Plus...
                  </Link>
                </p>
              </p>
            </div>
            <div>
              <p classname="light" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="bg-green c-boxs">
                  <Icons icon="flowers" />
                </div>
                <h1 className="orange d-flex justify-content-center px-12 d-low offers-text ">
                  COMPOST
                </h1>
                <p className="d-low-2 d-ajust">
                  100% local, coopératif et
                  <br /> solidaire: le compost que nous
                  <br /> vous proposons a décidément
                  <br /> tout pour plaire !
                  <br />
                  <Link style={{ fontWeight: 'bold' }} to="/compost">
                    Lire Plus...
                  </Link>
                </p>
              </p>
            </div>
          </div>
        </>
      ) : (
        ''
      )}

      {isMobile ? (
        <>
          <div className="container b-res">
            <div className="row">
              <div className="col">
                <h1 className="orange">COLLECTE</h1>
                <div className="bg-green rounded-circle boom-offer">
                  <Icons icon="camion" />
                </div>
                <p className="semi">
                  {' '}
                  En camions ou à vélos, nos
                  <br /> équipes passent régulièrement
                  <br /> collecter vos bacs de biodéchets
                  <br />
                  <Link style={{ fontWeight: 'bold' }} to="/collecte">
                    Lire Plus...
                  </Link>
                </p>
                <img src="" />
              </div>
              <div className="col">
                <h1 className="orange">SENSIBILISATION</h1>
                <div className="bg-green rounded-circle boom-offer">
                  <Icons icon="happystar" />
                </div>
                <p className="semi">
                  Vous accompagner dans votre
                  <br /> démarche environnementale et
                  <br /> vous sensibiliser est notre priorité !
                  <br />
                  <Link style={{ fontWeight: 'bold' }} to="/sensibilisation">
                    Lire Plus...
                  </Link>
                </p>
              </div>
              <div className="col">
                <h1 className="orange">COMPOST</h1>
                <div className="bg-green rounded-circle boom-offer">
                  <Icons icon="flowers" />
                </div>
                <p className="semi">
                  100% local, coopératif et
                  <br /> solidaire: le compost que nous
                  <br /> vous proposons a décidément
                  <br /> tout pour plaire !
                  <br />
                  <Link style={{ fontWeight: 'bold' }} to="/compost">
                    Lire Plus...
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  );
};
export default Offer;
