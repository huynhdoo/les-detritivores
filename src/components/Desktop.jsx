import { Link } from 'gatsby';
import React from 'react';
import Icons from './Icons';

const Desktop = () => {
  return (
    <div className="pb-6 d-grid gap-2 justify-content-center mt-6 sizes container-fluid">
      <div>
        <p classname="light" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="bg-green c-boxs">
            <Icons icon="camion" />
          </div>
          <h1 className="orange d-flex justify-content-center px-12 d-low offers-text">COLLECTE</h1>
          <p className="d-low-2">
            {' '}
            En camions ou à vélos, nos
            <br /> équipes passent régulièrement
            <br /> collecter vos bacs de biodéchets
            <br />
            <Link style={{ fontWeight: 'bold' }} to="/collecte">
              Lire Plus...
            </Link>
          </p>
        </p>
      </div>
      <div>
        <p classname="light" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="bg-green c-boxs">
            <Icons icon="happystar" />
          </div>
          <h1 className="orange d-flex justify-content-center px-12 d-low offers-text ">
            SENSIBILISATION
          </h1>
          <p className="d-low-2">
            Vous accompagner dans votre
            <br /> démarche environnementale et
            <br /> vous sensibiliser est notre priorité !
            <br />
            <Link style={{ fontWeight: 'bold' }} to="/sensibilisation">
              Lire Plus...
            </Link>
          </p>
        </p>
      </div>
      <div>
        <p classname="light" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="bg-green c-boxs">
            <Icons icon="flowers" />
          </div>
          <h1 className="orange d-flex justify-content-center px-12 d-low offers-text ">COMPOST</h1>
          <p className="d-low-2 d-ajust">
            100% local, coopératif et
            <br /> solidaire: le compost que nous
            <br /> vous proposons a décidément
            <br /> tout pour plaire !
            <br />
            <Link style={{ fontWeight: 'bold' }} to="/compost">
              Lire Plus...
            </Link>
          </p>
        </p>
      </div>
    </div>
  );
};
export default Desktop;
