import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

function Home() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [Text, setText] = useState('');

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

  let enable = true;
  enable
    ? axios
        .get(
          `https://api.storyblok.com/v2/cdn/stories/preview?version=draft&token=4Sl5OG2kesCX0K97UTd0Wwtt&cv=1631095460`
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
      <Template>
        <section className="">
          <FadeIn>
            <Title className="whoarewe orange" title={Text.titleHero} color="orange" />
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
            <Title className="whoarewe green" title={Text.titleDefault} color="green" />
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
    </>
  );
}

export default Home;
