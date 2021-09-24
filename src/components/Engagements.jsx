import React from 'react';
import Icons from './Icons';
const Engagements = () => {
  return (
    <div className="container p-spaces">
      <div className="row">
        <div className="col">
          <h1 className="orange m-text">ENVIRONNEMENTAUX</h1>
          <div className="bg-orange rounded-circle boom">
            <Icons icon="ptt5" />
          </div>
          <p className="semi">
            Nous œuvrons pour une <span className="bold">utilisation raisonnable</span> des
            ressources naturelles, nous luttons contre le gaspillage alimentaire et contribuons à la
            diminution des émissions de CO2.
          </p>
        </div>
        <div className="col">
          <h1 className="orange m-text">SOCIAUX</h1>
          <div className="bg-orange rounded-circle boom">
            <Icons icon="ptt13" />
          </div>
          <p className="semi">
            Nous créons des emplois pérennes pour des personnes éloignées du <br /> marché du
            travail. <br />
            Nos salariés bénéficient d’un <span className="bold">
              accompagnement professionnel
            </span>{' '}
            individuel et/ou collectif.
            <br />
            <br />
            Chez les DETRITIVORES, chaque <br /> compétence détenue est valorisée !
          </p>
        </div>
        <div className="col">
          <h1 className="orange m-text">COOPÉRATIFS</h1>
          <div className="bg-orange rounded-circle boom">
            <Icons icon="ptt3" />
          </div>
          <p className="semi">
            En tant que société coopérative, nous attachons à rassembler l’ensemble des acteurs
            engagés sur le territoire vers la construction d’une économie plus{' '}
            <span className="bold">inclusive</span>, plus <span className="bold">organique</span> et{' '}
            <span className="bold">plus ouverte</span>.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Engagements;
