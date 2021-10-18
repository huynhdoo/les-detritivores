import React from 'react';
import Icons from './Icons';
import { Link } from 'gatsby';
import FadeIn from 'react-fade-in';
const Offer = ({
  collectTitle,
  collectText,
  collectLink,
  sensibilisationTitle,
  sensibilisationText,
  sensibilisationLink,
  compostTitle,
  compostText,
  compostLink,
}) => {
  return (
    <FadeIn>
      <div className="container b-res pb-6 pt-5">
        <div className="row">
          <div className="col-sm">
            <h1 className="orange m-text">{collectTitle}</h1>
            <div className="bg-green rounded-circle boom-offer">
              <Icons icon="camion" />
            </div>
            <p className="semi">
              {collectText}
              <Link className="watch-link" style={{ fontWeight: 'bold' }} to={collectLink}>
                <Icons icon="plus" />
                <span className="more">En savoir plus</span>
              </Link>
            </p>
          </div>
          <div className="col-sm">
            <h1 className="orange m-text">{sensibilisationTitle}</h1>
            <div className="bg-green rounded-circle boom-offer">
              <Icons icon="happystar" />
            </div>
            <p className="semi">
              {sensibilisationText}
              <Link className="watch-link" style={{ fontWeight: 'bold' }} to={sensibilisationLink}>
                <Icons icon="plus" />
                <span className="more">En savoir plus</span>
              </Link>
            </p>
          </div>
          <div className="col-sm">
            <h1 className="orange m-text">{compostTitle}</h1>
            <div className="bg-green rounded-circle boom-offer">
              <Icons icon="flowers" />
            </div>
            <p className="semi">
              {compostText}
              <Link className="watch-link" style={{ fontWeight: 'bold' }} to={compostLink}>
                <Icons icon="plus" />
                <span className="more">En savoir plus</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
export default Offer;
