import React from 'react';
import FadeIn from 'react-fade-in';
import Icons from './Icons';
const Usagers = ({ usagesTitle, restaurant, restaurantCollective, collectivites, particular }) => {
  return (
    <div className="container-fluid d-flex center-container">
      <div className="row">
        <div className="col m-pse">
          <iframe
            width="853"
            height="510"
            src={`https://www.youtube.com/embed/_X-pd2E-AxA`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube"
            className="d-flex justify-content-start rounded-custom video"
          />
        </div>
        <div className="col ml-mb m-p">
          <FadeIn>
            <h1 className="orange big-font-size-xl">{usagesTitle}</h1>
          </FadeIn>
          <div className="rounded-circle bg-orange circle">
            <Icons icon="people" />
          </div>
          <div className="space-usages">
            <p className="sf usages-font">
              {restaurant} <span className="line-sm bg-orange" />
            </p>
            <p className="sf usages-font">
              {restaurantCollective}
              <span className="line-sm bg-orange" />
            </p>
            <p className="sf usages-font">
              {collectivites} <span className="line-sm bg-orange" />
            </p>
            <p className="sf usages-font">
              {particular} <span className="line-sm bg-orange" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usagers;
