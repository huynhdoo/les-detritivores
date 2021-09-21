import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../style/main.scss';
import Icons from '../components/Icons';
import Fade from 'react-reveal/Fade';
import FadeIn from 'react-fade-in';
import { Helmet } from 'react-helmet';
import Usagers from '../components/Usagers';
import Engagements from '../components/Engagements';
import Offer from '../components/Offer';
import Trust from '../components/Trust';
import Contact from '../components/Contact';
function Test() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [Text, setText] = useState('');

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  let enable = true;
  enable
    ? axios
        .get(
          `https://api.storyblok.com/v2/cdn/stories/preview?version=draft&token=${process.env.TOKEN}&cv=1631095460`
        )
        .then((response) => {
          setText(response.data.story.content);
        })
        .catch((e) => console.error(e))
    : console.log(`axios is disabled`);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{Text.title}</title>
        <html lang="fr" />
        <meta name="description" content={Text.description} />
      </Helmet>
      <div id="start">
        <Icons icon="logo" className="logos" />
      </div>

      <section className="">
        <FadeIn>
          <h1 className="whoarewe pb-6 orange">{Text.titleHero}</h1>
        </FadeIn>
        <Fade left={isDesktop} bottom={isMobile} duration={500} delay={500} distance="30px">
          <div className="d-flex justify-content-center px-3">
            <p className="textHero text-wrap text-break light">
              Depuis 2015, notre Société Coopérative d’Intérêt Collectif et entreprise d’insertion,
              LES DETRITIVORES vous
              <br /> accompagne dans la gestion de vos restes alimentaires (biodéchets) en vous
              proposant un service <br />
              professionnel de <span className="bold">sensibilisation</span>, de{' '}
              <span className="bold">collecte</span>, de <span className="bold">valorisation</span>{' '}
              et de <span className="bold">compostage</span> des déchets organiques
              <br /> générés sur le territoire néo-aquitain.
            </p>
          </div>
        </Fade>
      </section>

      <section className="">
        <Fade left={isDesktop} bottom={isMobile} duration={500} delay={500} distance="30px">
          <Usagers />
        </Fade>
      </section>
      <section className="our-engagements">
        <FadeIn>
          <h1 className="whoarewe pb-6 green">{Text.titleDefault}</h1>
        </FadeIn>
        <Fade left={isDesktop} bottom={isMobile} duration={500} delay={500} distance="30px">
          <Engagements />
        </Fade>
      </section>
      <section className="offer">
        <div className="bg-green offers">
          <FadeIn>
            <h1 className="size">NOS OFFRES</h1>
          </FadeIn>
        </div>
        <Fade left={isDesktop} bottom={isMobile} duration={500} delay={500} distance="30px">
          <Offer />
        </Fade>
      </section>
      <div className="spacing bg-green" />
      <section className="trust">
        <Fade left={isDesktop} bottom={isMobile} duration={500} delay={500} distance="30px">
          <Trust />
        </Fade>
      </section>
      <section className="">
        <Contact />
      </section>
      <footer id="footer" className="fixed-bottom">
        <div className="d-flex justify-content-end">
          <Icons icon="logo" className="logo-footer" />
        </div>
      </footer>
    </>
  );
}

export default Test;
