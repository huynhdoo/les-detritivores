import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
import Icons from '../components/Icons';
import { Helmet } from 'react-helmet';
import { TemplatePages } from '../components/TemplatePages';
import Page from 'react-page-loading';
import DevisForm from '../components/DevisForm';
import axios from 'axios';
const Devis = () => {
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
        <title>Demande de devis</title>
        <html lang="fr" />
        <meta name="description" content="" />
      </Helmet>
      <Page loader={'comet-spin'} color={'#263b29'} size={50}>
        <TemplatePages link="/compost">
          <FadeIn>
            <div className="container-fluid p-slide pb-11 c-tests">
              <div className="container">
                <div className="row">
                  <div className="col-xl">
                    <div className="m-submit">
                      <DevisForm />
                    </div>
                  </div>
                  <div className="col rep">
                    <h1 className="orange big-font-size-pm rotate">
                      {Text.moneyTitle}
                      <span className="bg-dark line-custom" />
                    </h1>
                    <div className="pt-2">
                      <h1 className="bold">Vous aussi, valorisez vos biodéchets.</h1>
                      <p className="light big-font-size-md text-start">{Text.moneyText}</p>
                    </div>
                    <div className="curved-icn">
                      <Icons icon="curved-arrow" />
                    </div>
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
export default Devis;
