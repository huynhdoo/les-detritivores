import React from 'react';
import FadeIn from 'react-fade-in';
import { TemplatePages } from '../components/TemplatePages';

const Collect = () => {
  return (
    <>
      <TemplatePages link="/">
        <FadeIn className="if-p">
          <div className="container-fluid p-slide">
            <div className="row">
              <div className="col">
                <section className="justify-content-start">
                  <div className="d-table p-responsive">
                    <div className="card-image">
                      <img className="cards rounded" src="../images/image1.jpeg" alt="" srcset="" />
                    </div>
                    <div className="card-image">
                      <img className="cards rounded" src="../images/image2.jpeg" alt="" srcset="" />
                    </div>
                    <div className="card-image">
                      <img className="cards rounded" src="../images/image3.jpeg" alt="" srcset="" />
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-xl-6">
                <div className="">
                  <h1 className="orange big-font-size-xxl rotate only-text">
                    COLLECTE
                    <span className="linesmall-2 bg-black" />
                  </h1>
                  <p className="bold card-intro">
                    Ensemble, organisons la collecte et le recyclage de vos biodéchets !
                  </p>
                  <div className="step-card">
                    <div className="card-num">
                      <span className="card-number orange card-span">1</span>
                      <p className="card-number-text">
                        Contactez-nous afin que nous évaluons les volumes de
                        <br /> biodéchets générés par votre entité et que nous
                        <br /> définissions un rythme de collecte.
                        <br /> Notre mot d’ordre : s’adapter à vos besoins !
                      </p>
                    </div>
                    <div className="card-num">
                      <span className="card-number orange card-span">2</span>
                      <p className="card-number-text">
                        Les collectes peuvent débuter ! A chaque passage,
                        <br /> notre équipe de Collectivores échangera votre bac plein
                        <br /> contre un bac vide désinfecté : simple et efficace !
                      </p>
                    </div>
                    <div className="card-num">
                      <span className="card-number orange card-span">3</span>
                      <p className="card-number-text">
                        Une fois collectées, vos biodéchets sont acheminés
                        <br /> dans nos locaux pour y être pesés : étape essentielle à<br /> la
                        réalisation d’un reporting propre à chacun de nos
                        <br /> usagers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div>
                  <h1 className="big-font-size">Où intervenons-nous ?</h1>
                  <iframe
                    title="Maps"
                    src="https://www.google.com/maps/d/embed?mid=1XOia2gftrOlLKRAYs-Mtca0qugXyahfh&hl=fr&output=embed&iwloc=near"
                    width="500"
                    height="380"
                    className="maps"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </TemplatePages>
    </>
  );
};
export default Collect;
