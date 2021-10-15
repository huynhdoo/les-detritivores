import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import FadeIn from 'react-fade-in';
import { Helmet } from 'react-helmet';

import Usagers from '../components/Usagers';
import Engagements from '../components/Engagements';
import Offer from '../components/Offer';
import Trust from '../components/Trust';
import Contact from '../components/Contact';
import Intro from '../components/Intro';
import { Template } from '../components/Template';
import { Title } from '../components/Title';
import Page from 'react-page-loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
function Home() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    // You save my day. https://stackoverflow.com/questions/44480053/how-to-detect-if-screen-size-has-changed-to-mobile-in-react
    if (window.innerWidth < 769) {
      setIsMobile(true);
      setIsDesktop(false);
    } else {
      setIsMobile(false);
      setIsDesktop(true);
    }
  };
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
      window.addEventListener('resize', handleResize);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
      window.addEventListener('resize', handleResize);
    }
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>LES DETRITIVORES | Collecte et compostage des biodéchets</title>
        <html lang="fr" />
        <meta name="description" content="" />
      </Helmet>
      <Page loader={'comet-spin'} color={'#263b29'} size={50}>
        <Template>
          <section className="">
            <FadeIn>
              <Title className="whoarewe orange" title="QUI SOMMES NOUS ?" color="orange" />
            </FadeIn>
            <Fade left={isDesktop} bottom={isMobile} duration={500} delay={500} distance="30px">
              <Intro />
            </Fade>
          </section>

          <section className="">
            <Fade left={isDesktop} bottom={isMobile} duration={500} delay={500} distance="30px">
              <Usagers />
            </Fade>
          </section>
          <section className="our-engagements">
            <FadeIn>
              <Title className="whoarewe green" title="Nos Engagements" color="green" />
            </FadeIn>
            <Fade left={isDesktop} bottom={isMobile} duration={500} delay={500} distance="30px">
              <Engagements />
            </Fade>
          </section>
          <section className="offer">
            <div className="bg-green offers">
              <FadeIn>
                <Title className="size" title="NOS OFFRES" />
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
            <Fade left={isDesktop} bottom={isMobile} duration={500} delay={500} distance="30px">
              <Contact />
            </Fade>
          </section>
        </Template>
      </Page>
    </>
  );
}

export default Home;
