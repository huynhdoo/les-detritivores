import React from 'react';
import FadeIn from 'react-fade-in';
import Icons from './Icons';
const Usagers = () => {
  return (
    <div className="container-fluid d-flex center-container">
      <div className="row">
        <div className="col">
          <iframe
            width="853"
            height="510"
            src={`https://www.youtube.com/embed/_X-pd2E-AxA`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title=""
            className="d-flex justify-content-start rounded"
          />
        </div>
        <div className="col ml-mb m-p">
          <FadeIn>
            <h1 className="orange big-font-size-xl">Nos Usagers</h1>
          </FadeIn>
          <div className="rounded-circle bg-orange circle">
            <Icons icon="people" />
          </div>
          <div className="space-usages">
            <p className="sf usages-font">
              LES RESTAURATEURS <span className="line-sm bg-orange" />
            </p>
            <p className="sf usages-font">
              LA RESTAURATION COLLECTIVE
              <span className="line-sm bg-orange" />
            </p>
            <p className="sf usages-font">
              LES COLLECTIVITES <span className="line-sm bg-orange" />
            </p>
            <p className="sf usages-font">
              LES PARTICULIERS <span className="line-sm bg-orange" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usagers;
