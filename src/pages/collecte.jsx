import React from 'react';
import FadeIn from 'react-fade-in';
import { TemplatePages } from '../components/TemplatePages';
import Image from '../components/Image';
import Page from 'react-page-loading';
const Collect = () => {
  return (
    <>
      <Page loader={'comet-spin'} color={'#263b29'} size={50}>
        <TemplatePages link="/" classN="fixed-bottom">
          <FadeIn className="if-p">
            <div className="container-fluid p-slide">
              <div className="row">
                <div className="col-sm-3">
                  <section className="justify-content-start">
                    <div className="d-table p-responsive">
                      <div className="card-image">
                        <Image className="cards rounded" picture={'../../image1.jpeg'} />
                      </div>
                      <div className="card-image">
                        <Image className="cards rounded" picture="../../image2.jpeg" />
                      </div>
                      <div className="card-image">
                        <Image className="cards rounded" picture="../../image3.jpeg" />
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col-md-18">
                  <div>
                    <h1 className="orange big-font-size-xxl rotate only-text s">
                      COLLECTE
                      <span className="linesmall-4 bg-black" />
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
                      src="https://www.google.com/maps/d/embed?mid=1XOia2gftrOlLKRAYs-Mtca0qugXyahfh&hl=fr&output=embed&iwloc=near&type=roadmap"
                      width="500"
                      height="380"
                      className="maps"
                      loading="lazy"
                      style={{ border: 0 }}
                      allowFullScreen
                    />
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
export default Collect;
