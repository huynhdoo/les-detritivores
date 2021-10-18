import React from 'react';
import FadeIn from 'react-fade-in';
import Icons from './Icons';
import { Title } from './Title';
const Contact = ({
  contactTitle,
  number,
  mail,
  adress,
  linkadress,
  linkLinkedin,
  linkInstagram,
  linkFacebook,
}) => {
  return (
    <div className="container">
      <FadeIn>
        <Title className="contacts pb-2 orange" title={contactTitle} color="orange ms-negative" />
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
              rel="noopener"
            >
              {number}
            </a>
            <div className="join">
              <h1 className="green text-wrap size text-b t-res">NOUS ÉCRIRE</h1>
              <a
                className="smalltext big-font text-b text-start watch"
                href={`mailto: ${mail}`}
                target="_blank"
                rel="noopener"
              >
                {mail}
              </a>
            </div>
            <div className="join">
              <h1 className="green text-wrap size text-b t-res">NOUS RENCONTRER</h1>
              <span className="smalltext big-font text-b text-start">
                <a
                  className="smalltext big-font text-b text-start watch"
                  target="_blank"
                  rel="noopener"
                  href={linkadress}
                >
                  {adress}
                </a>
              </span>
            </div>
          </div>
          <div className="col disable"></div>
          <div className="col">
            <h1 className="green text-wrap size text-start">SUIVEZ-NOUS</h1>
            <div className="socialmedia">
              <div className="socials">
                <a className="text-social m-lef watch " href={linkLinkedin} rel="noreferrer">
                  <div className="bg-orange p-ding">
                    <Icons icon="linkedin" />
                  </div>
                  <span className="socialsbtn">Linkedin</span>
                </a>
              </div>
              <div className="socials">
                <a className="text-social m-lef watch" href={linkFacebook} rel="noreferrer">
                  <div className="bg-orange p-ding">
                    <Icons icon="facebook" />{' '}
                  </div>
                  <span className="socialsbtn">Facebook</span>
                </a>
              </div>
              <div className="socials">
                <a className="text-social m-lef watch" href={linkInstagram} rel="noreferrer">
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
