import React from 'react';
import { Helmet } from 'react-helmet';
import { headData } from '../mock/data';
import { Container } from 'react-bootstrap'
import FadeIn from "react-fade-in/lib/FadeIn";
export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ title }</title>
        <html lang={ lang } />
        <meta name="description" content={ description } />
      </Helmet>
        <section id="hero" className="jumbotron">
            <Container>
              <FadeIn className="section-big-title text-color-main rounded">
                  Page non disponible
              </FadeIn>
            </Container>
        </section>
    </>
  );
};
