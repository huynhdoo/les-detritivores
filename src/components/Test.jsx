import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import logo from "../images/logo-new.png";
import '../style/main.scss';
import YouTube from 'react-youtube';

function Test() {
     const [Text, setText] = useState("");
    axios.get('https://api.storyblok.com/v2/cdn/stories/preview?version=draft&token=4Sl5OG2kesCX0K97UTd0Wwtt&cv=1631095460', {
    }).then((response) => {
      setText(response.data.story.content)
    }).catch(e => console.error(e))
    const options = {
      height: '500',
      width: '500',
    }
  return (
      <>
        <section id="start">
            <img src={logo} className="logos" />
        </section>

        <section>
            <h1 className="whoarewe">{Text.titleHero}</h1>
        </section>

        <section className="hero">
            <p className="textHero">Depuis 2015, notre Société Coopérative d’Intérêt Collectif et entreprise d’insertion, LES DETRITIVORES vous accompagne dans la gestion de vos restes alimentaires (biodéchets) en vous proposant un service professionnel de <span className="bold">sensibilisation</span>, de <span className="bold">collecte</span>, de <span className="bold">valorisation</span> et de <span className="bold">compostage</span> des déchets organiques générés sur le territoire néo-aquitain.</p>
        </section>

        <section className="">
          <div>
            <Youtube videoId="_X-pd2E-AxA&t" opts={options} />
          </div>
          <div>
            <h1>Nos Usagers</h1>
            <img src="" alt="" />
            <p>LES RESTAURATEURS</p>
            <p>LA RESTAURATION COLLECTIVE</p>
            <p>LES COLLECTIVITES</p>
            <p>LES PARTICULIERS</p>
          </div>
        </section>
    </>
  );
}

export default Test;
