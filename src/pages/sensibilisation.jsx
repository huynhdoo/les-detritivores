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
          <Link className="arrow-color" to="/">
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
              <h1 className="orange big-font-size-xxl rotate pb-2 text-start">SENSIBILISATION</h1>
              <div className="sensibilisation">
                <p className="bold big-font-size-md choice-text">
                  Choisissez nos actions de sensibilisation pour mobiliser l’ensemble
                  <br />
                  de vos collaborateurs, convives et équipes autour de la notion de <br />
                  biodéchets et de recyclage !
                </p>
              </div>
              <div className="sens">
                <p className="light text-assign">
                  Réalisée sur le temps du midi <br /> Présentation de l’écosystème de la SCIC SA
                  LES <br />
                  DETRITIVORES
                  <br /> Présentation des étapes d’élaboration de notre compost <br />
                  Présentation de notre plateforme de compostage 100% <br />
                  bordelaise
                </p>
              </div>
              <div className="atelier">
                <p className="bold big-font-size-md">
                  Jeux, animations, ateliers autour du tri et du recyclage : notre <br />{' '}
                  sensibilisation se veut conviviale et riche en partages !
                </p>
              </div>
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
