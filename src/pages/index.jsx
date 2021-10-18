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
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
function Home() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [Text, setText] = useState('');
  axios
    .get(
      'https://api.storyblok.com/v2/cdn/stories/preview?version=draft&token=4Sl5OG2kesCX0K97UTd0Wwtt&cv=1631095460',
      {}
    )
    .then((response) => {
      setText(response.data.story.content);
    })
    .catch((e) => console.error(e));
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
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
              <Intro introText={ReactHtmlParser(Text.introText)} />
            </Fade>
          </section>

          <section className="">
            <Fade left={isDesktop} bottom={isMobile} duration={500} delay={500} distance="30px">
              <Usagers
                usagesTitle={Text.usagesTitle}
                restaurant={Text.restaurantTitle}
                restaurantCollective={Text.restaurantCollective}
                collectivites={Text.collectivites}
                particular={Text.particular}
                youtubeVideoLink={Text.youtubeVideoLink}
                youtubeTitle={Text.youtubeTitle}
              />
            </Fade>
          </section>
          <section className="our-engagements">
            <FadeIn>
              <Title className="whoarewe green" title={Text.ourEngagement} color="green" />
            </FadeIn>
            <Fade left={isDesktop} bottom={isMobile} duration={500} delay={500} distance="30px">
              <Engagements
                environementTitle={Text.environementTitle}
                environement={ReactHtmlParser(Text.environement)}
                socialTitle={Text.socialTitle}
                socialText={ReactHtmlParser(Text.socialText)}
                cooperationTitle={Text.CooperationTitle}
                cooperationText={ReactHtmlParser(Text.CooperationText)}
              />
            </Fade>
          </section>
          <section className="offer">
            <div className="bg-green offers">
              <FadeIn>
                <Title className="size" title={Text.offerTitle} />
              </FadeIn>
            </div>
            <Fade left={isDesktop} bottom={isMobile} duration={500} delay={500} distance="30px">
              <Offer
                //Collecte Content
                collectTitle={Text.collectTitle}
                collectText={ReactHtmlParser(Text.collectText)}
                collectLink={Text.collectLink}
                //Sensibilisation Content
                sensibilisationTitle={Text.sensibilisationTitle}
                sensibilisationText={ReactHtmlParser(Text.sensibilisationText)}
                sensibilisationLink={Text.sensibilisationLink}
                //Compost Content
                compostTitle={Text.compostTitle}
                compostText={ReactHtmlParser(Text.compostText)}
                compostLink={Text.compostLink}
              />
            </Fade>
          </section>
          <div className="spacing bg-green" />
          <section className="trust">
            <Fade left={isDesktop} bottom={isMobile} duration={500} delay={500} distance="30px">
              <Trust trustTitle={Text.trustTitle} />
            </Fade>
          </section>
          <section className="">
            <Fade left={isDesktop} bottom={isMobile} duration={500} delay={500} distance="30px">
              <Contact
                contactTitle={Text.contactTitle}
                number={Text.number}
                mail={Text.mail}
                adress={ReactHtmlParser(Text.adress)}
                linkadress={Text.linkadress}
                linkFacebook={Text.linkFacebook}
                linkInstagram={Text.linkInstagram}
                linkLinkedin={Text.linkLinkedin}
              />
            </Fade>
          </section>
        </Template>
      </Page>
    </>
  );
}

export default Home;
