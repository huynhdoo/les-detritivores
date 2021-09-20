import React from 'react';
import Icons from '../components/Icons';
import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image4.jpeg';
import { Link } from 'gatsby';
import FadeIn from 'react-fade-in';

const Collect = () => {
  return (
    <>
      <div id="start">
        <div className="d-flex justify-content-start d-back">
          <Link className="arrow-color" to="/new">
            <div className="arrow-position">
              <Icons icon="arrow" />
            </div>
          </Link>
        </div>
      </div>

      <FadeIn>
        <div class="container-fluid p-slide">
          <div class="row">
            <div class="col">
              <section className="justify-content-start">
                <div className="d-table p-responsive">
                  <div className="card-image">
                    <img className="cards rounded" src={image1} alt="" srcset="" />
                  </div>
                  <div className="card-image">
                    <img className="cards rounded" src={image2} alt="" srcset="" />
                  </div>
                  <div className="card-image">
                    <img className="cards rounded" src={image3} alt="" srcset="" />
                  </div>
                </div>
              </section>
            </div>
            <div class="col-xl">
              <div className="">
                <h1 className="orange big-font-size-xxl rotate">COLLECTE</h1>
                <p className="bold card-intro">
                  Ensemble, organisons la collecte et le recyclage de vos biodéchets !
                </p>
                <div className="step-card">
                  <div className="card-num">
                    <span className="card-number orange">1</span>
                    <p className="card-number-text">
                      Contactez-nous afin que nous évaluons les volumes de biodéchets générés par
                      votre entité et que nous définissions un rythme de collecte.Notre mot d’ordre
                      : s’adapter à vos besoins !
                    </p>
                  </div>
                  <div className="card-num">
                    <span className="card-number orange">2</span>
                    <p className="card-number-text">
                      Les collectes peuvent débuter ! A chaque passage, notre équipe de
                      Collectivores échangera votre bac plein contre un bac vide désinfecté : simple
                      et efficace !
                    </p>
                  </div>
                  <div className="card-num">
                    <span className="card-number orange">3</span>
                    <p className="card-number-text">
                      Une fois collectées, vos biodéchets sont acheminés dans nos locaux pour y être
                      pesés : étape essentielle à la réalisation d’un reporting propre à chacun de
                      nos usagers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div>
                <h1 className="big-font-size">Où intervenons-nous ?</h1>
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1XOia2gftrOlLKRAYs-Mtca0qugXyahfh&hl=fr"
                  width="500"
                  height="380"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
      <footer id="footer" className="fixed-bottom">
        <div className="d-flex justify-content-end">
          <Icons icon="logo" className="logo-footer" />
        </div>
      </footer>
    </>
  );
};
export default Collect;
