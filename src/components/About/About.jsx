import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import axios from 'axios';

const About = () => {

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [Text, setText] = useState("");

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  axios.get('https://api.storyblok.com/v2/cdn/stories/preview?version=draft&token=4Sl5OG2kesCX0K97UTd0Wwtt&cv=1631095460', {
    }).then((response) => {
      setText(response.data.story.content)
    }).catch(e => console.error(e))

  return (
    <section id="about">
      <Container>
        <Title title={Text.titleDefault} />
        <p>
          {Text.text}
        </p>
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={Text.img} />
              </div>
            </Fade>
            
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <h2 className="section-small-title">
                  { Text.titleOne }
                </h2>
                <p className="about-wrapper__info-text">
                  { Text.paragraphOne }
                </p>
                <h2 className="section-small-title">
                  { Text.titleTwo }
                </h2>
                <p className="about-wrapper__info-text">
                  { Text.paragraphTwo }
                </p>
                <h2 className="section-small-title">
                  { Text.titleThree }
                </h2>
                <p className="about-wrapper__info-text">
                  { Text.paragraphThree }
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
