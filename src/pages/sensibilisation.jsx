import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import FadeIn from 'react-fade-in';
import Icons from '../components/Icons';
import { Link } from 'gatsby';
export default () => {
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
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{Text.title}</title>
        <html lang="fr" />
        <meta name="description" content={Text.description} />
      </Helmet>
      <div id="start">
        <div className="d-flex justify-content-start d-back">
          <Link className="arrow-color" to="/new">
            <div className="arrow-position">
              <Icons icon="arrow" />
            </div>
          </Link>
        </div>
      </div>

      <FadeIn>
        <div class="container-fluid p-slide pb-11">
          <div class="row">
            <div class="col align-self-center">
              <div className="box-test"></div>
            </div>
            <div class="col">
              <h1 className="orange big-font-size-xxl rotate">SENSIBILISATION</h1>
            </div>
          </div>
        </div>
      </FadeIn>
      <footer id="footer" className="fixed-bottom">
        <div className="d-flex justify-content-end">
          <Icons icon="logo" className="logo-footer" />
        </div>
      </footer>
    </>
  );
};
