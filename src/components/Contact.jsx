import React from 'react';
import FadeIn from 'react-fade-in';
import Icons from './Icons';
import { Title } from './Title';
const Contact = () => {
  return (
    <div className="container">
      <FadeIn>
        <Title className="contacts pb-2 orange" title="Contact" color="orange ms-negative" />
      </FadeIn>
      <div className="container">
        <div className="row">
          <div className="contact">
            <div className="col"></div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className="green text-wrap size text-b t-res">NOUS APPELER</h1>
            <a
              href="tel:0556671447"
              target="_blank"
              className="smalltext big-font text-b text-start watch"
            >
              05 56 67 14 47
            </a>
            <div className="join">
              <h1 className="green text-wrap size text-b t-res">NOUS ÉCRIRE</h1>
              <a
                className="smalltext big-font text-b text-start watch"
                href="mailto:bonjour@les-detritivores.co"
                target="_blank"
              >
                bonjour@les-detritivores.co
              </a>
            </div>
            <div className="join">
              <h1 className="green text-wrap size text-b t-res">NOUS RENCONTRER</h1>
              <span className="smalltext big-font text-b text-start">
                <a
                  className="smalltext big-font text-b text-start watch"
                  target="_blank"
                  href="https://www.google.com/maps/place/65+Quai+de+Brazza,+33100+Bordeaux/@44.8554532,-0.550648,17z/data=!3m1!4b1!4m5!3m4!1s0xd5528a21e17e1b7:0x8b0813175afece1c!8m2!3d44.8554494!4d-0.5484593"
                >
                  65 Quai de Brazza,
                  <br /> 33100 Bordeaux
                </a>
              </span>
            </div>
          </div>
          <div className="col disable"></div>
          <div className="col">
            <h1 className="green text-wrap size text-start">SUIVEZ-NOUS</h1>
            <div className="socialmedia">
              <div className="socials">
                <a className="text-social m-lef watch " href="http://" rel="noreferrer">
                  <div className="bg-orange p-ding">
                    <Icons icon="linkedin" />
                  </div>
                  <span className="socialsbtn">Linkedin</span>
                </a>
              </div>
              <div className="socials">
                <a className="text-social m-lef watch" href="http://" rel="noreferrer">
                  <div className="bg-orange p-ding">
                    <Icons icon="facebook" />{' '}
                  </div>
                  <span className="socialsbtn">Facebook</span>
                </a>
              </div>
              <div className="socials">
                <a className="text-social m-lef watch" href="http://" rel="noreferrer">
                  <div className="bg-orange p-ding">
                    <Icons icon="instagram" />
                  </div>
                  <span className="socialsbtn">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
