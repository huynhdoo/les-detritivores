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
            <h1 className="orange">Nos Usagers</h1>
          </FadeIn>
          <div className="rounded-circle bg-orange circle">
            <Icons icon="people" />
          </div>
          <p className="sf usages-font">LES RESTAURATEURS</p>
          <p className="sf usages-font">LA RESTAURATION COLLECTIVE</p>
          <p className="sf usages-font">LES COLLECTIVITES</p>
          <p className="sf usages-font">LES PARTICULIERS</p>
        </div>
      </div>
    </div>
  );
};

export default Usagers;
