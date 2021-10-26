import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import FadeIn from 'react-fade-in';
import { TemplatePages } from '../components/TemplatePages';
import Image from '../components/Image';
import Page from 'react-page-loading';
import Parser from 'react-html-parser';

import axios from 'axios';
const Sensibilisation = () => {
  const [Text, setText] = useState('');
  axios
    .get(
      `https://api.storyblok.com/v2/cdn/stories/preview?version=draft&token=4Sl5OG2kesCX0K97UTd0Wwtt`
    )
    .then((response) => {
      setText(response.data.story.content);
    })
    .catch((e) => console.error(e));
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sensibilisation</title>
        <html lang="fr" />
        <meta name="description" content="" />
      </Helmet>
      <Page loader={'comet-spin'} color={'#263b29'} size={50}>
        <TemplatePages link="/" classN="fixed-bottom">
          <FadeIn>
            <div className="container-fluid p-slide pb-11">
              <div className="row">
                <div className="col align-self-center">
                  <Image className="image-sensibilisation" picture="../../sensibilisation.jpeg" />
                </div>
                <div className="col c-resp deskt-720">
                  <h1 className="orange big-font-size-xxl font-size-smm rotate pb-2 text-start yup">
                    {Text.titleSensibilisation}
                    <span className="linesmall-c bg-black" />
                  </h1>
                  <div className="sensibilisation">
                    <p className="bold big-font-size-md choice-text">
                      {Parser(Text.textSensibilisation)}
                    </p>
                  </div>
                  <div className="sens">
                    <p className="light text-assign">{Parser(Text.text2Sensibilisation)}</p>
                  </div>
                  <div className="atelier">
                    <p className="bold big-font-size-md choice-text">
                      {Parser(Text.gameSensibilisation)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </TemplatePages>
      </Page>
    </>
  );
};
export default Sensibilisation;
