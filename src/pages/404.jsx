import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { TemplatePages } from '../components/TemplatePages';

const Page404 = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang="fr" />
        <meta name="description" content="Page not found" />
      </Helmet>
      <TemplatePages link="/">
        <Container>
          <div className="row">
            <div className="col-sm disable"></div>
            <div className="col-sm">
              <Fade bottom duration={1000} delay={500} distance="30px">
                <h1 className="hero-title text-center c-s">
                  Désolé, cette page n'existe pas{' '}
                  <span role="img" aria-label="emoji">
                    😞
                  </span>
                </h1>
              </Fade>
            </div>
            <div className="col-sm disable"></div>
          </div>
        </Container>
      </TemplatePages>
    </>
  );
};
export default Page404;
