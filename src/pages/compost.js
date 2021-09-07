import React from 'react';
import { Helmet } from 'react-helmet';
import { headData } from '../mock/data';
import { Container } from 'react-bootstrap'
export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
      </Helmet>
      <section id="hero" className="jumbotron">
      <Container>
        <div className="section-big-title text-color-main">
            Page non disponible
        </div>
      </Container>

      </section>
    </>
  );
};
