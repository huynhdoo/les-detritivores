import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import logo from "../images/logo-new.png";
import '../style/main.scss';
function Test() {
     const [Text, setText] = useState("");
    axios.get('https://api.storyblok.com/v2/cdn/stories/preview?version=draft&token=4Sl5OG2kesCX0K97UTd0Wwtt&cv=1631095460', {
    }).then((response) => {
      setText(response.data.story.content)
    }).catch(e => console.error(e))
  return (
      <>
        <section id="start">
            <img src={logo} className="logos" />
        </section>

        <section>
            <h1 className="whoarewe">{Text.titleHero}</h1>
        </section>

        <section>
            <p className="textHero">Depuis 2015, notre Société Coopérative d’Intérêt Collectif et entreprise d’insertion, LES DETRITIVORES vous accompagne dans la gestion de vos restes alimentaires (biodéchets) en vous proposant un service professionnel de sensibilisation, de collecte, de valorisation et de compostage des déchets organiques générés sur le territoire néo-aquitain.</p>
        </section>
    </>
  );
}

export default Test;
