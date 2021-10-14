import React from 'react';
import Icons from './Icons';
import { Link } from 'gatsby';
import FadeIn from 'react-fade-in';
const Offer = () => {
  return (
    <FadeIn>
      <div className="container b-res pb-6 pt-5">
        <div className="row">
          <div className="col-sm">
            <h1 className="orange m-text">COLLECTE</h1>
            <div className="bg-green rounded-circle boom-offer">
              <Icons icon="camion" />
            </div>
            <p className="semi">
              {' '}
              En camions ou à vélos, nos
              <br /> équipes passent régulièrement
              <br /> collecter vos bacs de biodéchets
              <br />
              <Link className="watch-link" style={{ fontWeight: 'bold' }} to="/collecte">
                <Icons icon="plus" />
                <span className="more">En savoir plus</span>
              </Link>
            </p>
          </div>
          <div className="col-sm">
            <h1 className="orange m-text">SENSIBILISATION</h1>
            <div className="bg-green rounded-circle boom-offer">
              <Icons icon="happystar" />
            </div>
            <p className="semi">
              Vous accompagner dans votre
              <br /> démarche environnementale et
              <br /> vous sensibiliser est notre priorité !
              <br />
              <Link className="watch-link" style={{ fontWeight: 'bold' }} to="/sensibilisation">
                <Icons icon="plus" />
                <span className="more">En savoir plus</span>
              </Link>
            </p>
          </div>
          <div className="col-sm">
            <h1 className="orange m-text">COMPOST</h1>
            <div className="bg-green rounded-circle boom-offer">
              <Icons icon="flowers" />
            </div>
            <p className="semi">
              100% local, coopératif et
              <br /> solidaire: le compost que nous
              <br /> vous proposons a décidément
              <br /> tout pour plaire !
              <br />
              <Link className="watch-link" style={{ fontWeight: 'bold' }} to="/compost">
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
