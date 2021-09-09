import React, { useContext, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import axios from 'axios';

const Contact = () => {
  const [Text, setText] = useState("");

    axios.get('https://api.storyblok.com/v2/cdn/stories/preview?version=draft&token=4Sl5OG2kesCX0K97UTd0Wwtt&cv=1631095460', {
    }).then((response) => {
      setText(response.data.story.content)
    }).catch(e => console.error(e))

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              { Text.cta }
            </p>
            <p className="contact-wrapper__text">
              { Text.address }
            </p>
            <p className="contact-wrapper__text">
              { Text.phone }
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={ Text.email ? `mailto:${Text.email}` : '' }
            >
              { Text.buttonName }
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
