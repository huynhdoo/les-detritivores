import React from 'react';
import FadeIn from 'react-fade-in';
import Icons from './Icons';
const Contact = () => {
  return (
    <div className="container">
      <FadeIn>
        <h1 className="contacts pb-6 orange">Contact</h1>
      </FadeIn>
      <div class="container">
        <div class="row">
          <div className="contact">
            <div class="col">
              <p className="phone">
                <h1 className="text-start">Téléphone</h1>:{' '}
                <span className="phone-text">05 56 67 14 47</span>
              </p>
            </div>
            <div class="col">
              <p className="mail text-stop">
                <h1 className="mail-title"> Mail</h1>:{' '}
                <a className="number big-font-size-sm" href="mailto:bonjour@les-detritivores.co">
                  bonjour@les-detritivores.co
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h2 className="green text-wrap size text-b">NOS BUREAUX</h2>
            <span className="smalltext big-font text-b text-start">
              65 Quai de Brazza,
              <br /> 33100 Bordeaux
            </span>
            <h2 className="green text-wrap size text-b text-start">
              NOTRE PLATEFORME <br /> DE COMPOSTAGE
            </h2>
            <span className="smalltext big-font text-b text-start">
              16 Quai de Brazza
              <br /> 33100 Bordeaux
            </span>
          </div>
          <div class="col"></div>
          <div class="col">
            <h2 className="green text-wrap big-font-size text-stop">
              Rejoignez-nous sur les
              <br /> réseaux sociaux
            </h2>
            <div className="socialmedia">
              <div className="socials">
                <div className="bg-orange p-ding">
                  <Icons icon="linkedin" />
                </div>
                <a className="text-social m-lef " href="http://">
                  Linkedin
                </a>
              </div>
              <div className="socials">
                <div className="bg-orange p-ding">
                  <Icons icon="facebook" />{' '}
                </div>
                <a className="text-social m-lef" href="http://">
                  Facebook
                </a>
              </div>
              <div className="socials">
                <div className="bg-orange p-ding">
                  <Icons icon="instagram" />
                </div>
                <a className="text-social m-lef" href="http://">
                  Instagram
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
