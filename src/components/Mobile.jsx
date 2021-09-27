import { Link } from 'gatsby';
import React from 'react';
import Icons from './Icons';

const Mobile = () => {
  return (
    <div className="container b-res">
      <div className="row">
        <div className="col">
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
            <Link style={{ fontWeight: 'bold' }} to="/collecte">
              Lire Plus...
            </Link>
          </p>
          <img src="" />
        </div>
        <div className="col">
          <h1 className="orange m-text">SENSIBILISATION</h1>
          <div className="bg-green rounded-circle boom-offer">
            <Icons icon="happystar" />
          </div>
          <p className="semi">
            Vous accompagner dans votre
            <br /> démarche environnementale et
            <br /> vous sensibiliser est notre priorité !
            <br />
            <Link style={{ fontWeight: 'bold' }} to="/sensibilisation">
              Lire Plus...
            </Link>
          </p>
        </div>
        <div className="col">
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
            <Link style={{ fontWeight: 'bold' }} to="/compost">
              Lire Plus...
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Mobile;
