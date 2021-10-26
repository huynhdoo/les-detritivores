import React from 'react';
import FadeIn from 'react-fade-in';
import Icons from '../components/Icons';
import { Helmet } from 'react-helmet';
import { TemplatePages } from '../components/TemplatePages';
import Page from 'react-page-loading';
import DevisForm from '../components/DevisForm';
const Devis = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Demande de devis</title>
        <html lang="fr" />
        <meta name="description" content="" />
      </Helmet>
      <Page loader={'comet-spin'} color={'#263b29'} size={50}>
        <TemplatePages link="/compost">
          <FadeIn>
            <div className="container-fluid p-slide pb-11 c-tests">
              <div className="container">
                <div className="row">
                  <div className="col-xl">
                    <div className="m-submit">
                      <DevisForm />
                    </div>
                  </div>
                  <div className="col rep">
                    <h1 className="orange big-font-size-pm rotate">
                      DEMANDE DE DEVIS
                      <span className="bg-dark line-custom" />
                    </h1>
                    <div className="pt-2">
                      <h1 className="bold">Vous aussi, valorisez vos biodéchets.</h1>
                      <p className="light big-font-size-md text-start">
                        Vous souhaitez produisez une quantité significative de déchets or ganiques
                        et souhaitez obtenir une évaluation du coût de collecte et de traitement des
                        Détritivores ?<br />
                        <br /> N’hésitez pas à renseigner le plus précisément possible ce formulaire
                        et nous reviendrons vers vous dans les meilleurs délais !{' '}
                      </p>
                    </div>
                    <div className="curved-icn">
                      <Icons icon="curved-arrow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </TemplatePages>
      </Page>
    </>
  );
};
export default Devis;
