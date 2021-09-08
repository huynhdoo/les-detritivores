import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import HeroImg from '../Image/HeroImg';
import axios from 'axios';
const Header = () => {

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [Text, setText] = useState("");

    axios.get('https://api.storyblok.com/v2/cdn/stories/project?version=draft&token=4Sl5OG2kesCX0K97UTd0Wwtt&cv=1631095460', {
    }).then((response) => {
      setText(response.data.story.content)
    }).catch(e => console.error(e))

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
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <HeroImg alt="logo" filename={Text.logoHero} />
          <br />
          <h1>
            <span className="section-small-title text-color-main">{Text.titleHero}</span>
            <br />
            <span className="section-big-title text-color-main">{Text.nameHero}</span>
            <br />
          </h1>
          <span className="hero-subtitle text-color-main">
            {Text.subtitleHero}
          </span>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                { Text.ctaHero }
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
