import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
import { TemplatePages } from '../components/TemplatePages';
import Image from '../components/Image';
import Page from 'react-page-loading';
import Parser from 'react-html-parser';
import axios from 'axios';
const Collect = () => {
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
      <Page loader={'comet-spin'} color={'#263b29'} size={50}>
        <TemplatePages link="/" classN="fixed-bottom">
          <FadeIn className="if-p">
            <div className="container-fluid p-slide">
              <div className="row">
                <div className="col-sm-3">
                  <section className="justify-content-start">
                    <div className="d-table p-responsive">
                      <div className="card-image">
                        <Image className="cards rounded" picture={'../../image1.jpeg'} />
                      </div>
                      <div className="card-image">
                        <Image className="cards rounded" picture="../../image2.jpeg" />
                      </div>
                      <div className="card-image">
                        <Image className="cards rounded" picture="../../image3.jpeg" />
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col-md-18">
                  <div>
                    <h1 className="orange big-font-size-xxl rotate only-text s">
                      {Text.collectTitle}
                      <span className="linesmall-4 bg-black" />
                    </h1>
                    <p className="bold card-intro">{Text.collectMiniText}</p>
                    <div className="step-card">
                      <div className="card-num">
                        <span className="card-number orange card-span">1</span>
                        <p className="card-number-text">{Parser(Text.collectFirstText)}</p>
                      </div>
                      <div className="card-num">
                        <span className="card-number orange card-span">2</span>
                        <p className="card-number-text">{Parser(Text.collectSecondText)}</p>
                      </div>
                      <div className="card-num">
                        <span className="card-number orange card-span">3</span>
                        <p className="card-number-text">{Parser(Text.collectTreeText)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <h1 className="big-font-size">Où intervenons-nous ?</h1>
                    <iframe
                      title="Maps"
                      src={Text.mapsLink}
                      width="500"
                      height="380"
                      className="maps"
                      loading="lazy"
                      style={{ border: 0 }}
                      allowFullScreen
                    />
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
export default Collect;
