import React from 'react';
import { Helmet } from 'react-helmet';
import FadeIn from 'react-fade-in';
import { TemplatePages } from '../components/TemplatePages';
import Icons from '../components/Icons';
import Image from '../components/Image';
const Sensibilisation = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sensibilisation</title>
        <html lang="fr" />
        <meta name="description" content="" />
      </Helmet>
      <TemplatePages link="/">
        <FadeIn>
          <div className="container-fluid p-slide pb-11">
            <div className="row">
              <div className="col align-self-center">
                <Image className="image-sensibilisation" picture="../images/sensibilisation.jpeg" />
              </div>
              <div className="col c-resp">
                <h1 className="orange big-font-size-xxl font-size-smm rotate pb-2 text-start">
                  SENSIBILISATION
                  <span className="linesmall-c bg-black" />
                </h1>
                <div className="sensibilisation">
                  <p className="bold big-font-size-md choice-text">
                    Choisissez nos actions de sensibilisation pour mobiliser l’ensemble
                    <br />
                    de vos collaborateurs, convives et équipes autour de la notion de <br />
                    biodéchets et de recyclage !
                  </p>
                  <Icons icon="curved-arrow" />
                </div>
                <div className="sens">
                  <p className="light text-assign">
                    Réalisée sur le temps du midi <br /> Présentation de l’écosystème de la SCIC SA
                    LES <br />
                    DETRITIVORES
                    <br /> Présentation des étapes d’élaboration de notre compost <br />
                    Présentation de notre plateforme de compostage 100% <br />
                    bordelaise
                  </p>
                </div>
                <div className="atelier">
                  <p className="bold big-font-size-md choice-text">
                    Jeux, animations, ateliers autour du tri et du recyclage : notre <br />{' '}
                    sensibilisation se veut conviviale et riche en partages !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </TemplatePages>
    </>
  );
};
export default Sensibilisation;
