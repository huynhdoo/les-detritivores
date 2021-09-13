import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import logo from "../images/logo-new.png";
import '../style/main.scss';
import Icons from "../components/Icons";
function Test() {
     const [Text, setText] = useState("");
    axios.get('https://api.storyblok.com/v2/cdn/stories/preview?version=draft&token=4Sl5OG2kesCX0K97UTd0Wwtt&cv=1631095460', {
    }).then((response) => {
      setText(response.data.story.content)
    }).catch(e => console.error(e))
  return (
      <>
        <div id="start">
            <img src={logo} className="logos" />
        </div>

        <section className="">
            <h1 className="whoarewe pb-6 orange">
              {Text.titleHero}
            </h1>
            <div className="d-flex justify-content-center px-3">
                <p className="textHero text-wrap text-break light">Depuis 2015, notre Société Coopérative d’Intérêt Collectif et entreprise d’insertion, LES DETRITIVORES vous<br/> accompagne dans la gestion de vos restes alimentaires (biodéchets) en vous proposant un service <br />professionnel de <span className="bold">sensibilisation</span>, de <span className="bold">collecte</span>, de <span className="bold">valorisation</span> et de <span className="bold">compostage</span> des déchets organiques<br /> générés sur le territoire néo-aquitain.</p>
            </div>
        </section>

        <section className="">
        <div className="container-xxl d-flex">
            <div className="row">
              <div className="col">
                <iframe
                  width="853"
                  height="510"
                  src={`https://www.youtube.com/embed/_X-pd2E-AxA`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                  className="d-flex justify-content-start rounded"
                />
              </div>
              <div className="col ml-mb">
                <h1 className="orange">Nos Usagers</h1>
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
        </section>
        <section className="our-engagements">
          <h1 className="whoarewe pb-6 green">{Text.titleDefault}</h1>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="orange">ENVIRONNEMENTAUX</h1>
                <p>Nous œuvrons pour une <span className="bold">utilisation raisonnable</span> des ressources naturelles, nous luttons contre le gaspillage alimentaire et contribuons à la diminution des émissions de CO2.</p>
                <img src="" />
              </div>
              <div className="col">
                <h1 className="orange">SOCIAUX</h1>
                <p>Nous créons des emplois pérennes pour des personnes éloignées du <br /> marché du travail. <br />
                Nos salariés bénéficient d’un <span className="bold">accompagnement professionnel</span> individuel et/ou collectif.
                <br /><br />Chez les DETRITIVORES, chaque <br /> compétence détenue est valorisée !</p>
              </div>
              <div className="col">
                <h1 className="orange">COOPÉRATIFS</h1>
                <p>En tant que société coopérative, nous attachons à rassembler l’ensemble des acteurs engagés sur le territoire vers la construction d’une économie plus <span className="bold">inclusive</span>, plus <span className="bold">organique</span> et <span className="bold">plus ouverte</span>.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="offer">
            <div className="bg-green offers">
              <h1 className="size">NOS OFFRES</h1>
            </div>

          <div className="pb-6 d-grid gap-3 justify-content-center mt-6">
            <div>
              <div>
                  <p classname="light">
                <h1 className="orange">COLLECTE</h1>
                    En camions ou à vélos, nos équipes passent régulièrement collecter vos bacs de biodéchets
                  </p>
              </div>
              <div>
                  <p classname="light">
                <h1 className="orange">SENSIBILISATION</h1>
                    Vous accompagner dans votre démarche environnementale et vous sensibiliser est notre priorité !
                  </p>
              </div>
              <div>
                  <p classname="light">
                <h1 className="orange">COMPOST</h1>
                    100% local, coopératif et solidaire: le compost que nous vous proposons a décidément tout pour plaire !
                  </p>
              </div>
            </div>
          </div>
        </section>
        <div className="spacing bg-green" />
        <section className="trust">
          <h1 className="orange">ILS NOUS FONT CONFIANCE</h1>
          <div className="pb-6 d-flex justify-content-center p-2">
              <div className="trusting bg-green"></div>
          </div>
        </section>

    </>
  );
}

export default Test;
