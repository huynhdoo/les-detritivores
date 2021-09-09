import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import {Container} from "react-bootstrap";
import FadeIn from "react-fade-in";
export default () => {

  const [Text, setText] = useState("");
    axios.get('https://api.storyblok.com/v2/cdn/stories/preview?version=draft&token=4Sl5OG2kesCX0K97UTd0Wwtt&cv=1631095460', {
    }).then((response) => {
      setText(response.data.story.content)
    }).catch(e => console.error(e))
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ Text.title }</title>
        <html lang="fr" />
        <meta name="description" content={ Text.description } />
      </Helmet>
      <section id="hero" className="jumbotron">
            <Container>
              <FadeIn className="section-big-title text-color-main rounded">
                  La page n'existe pas.
              </FadeIn>
            </Container>
        </section>
    </>
  );
};
