import React, { useRef } from 'react';
import FadeIn from 'react-fade-in';
import { ValidationError } from '@formspree/react';
import { TemplatePages } from '../components/TemplatePages';
import emailjs from 'emailjs-com';

const Devis = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rokwexl', 'template_ouppyny', form.current, 'user_oJffpgzTLzwypyik9qTyZ')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <TemplatePages link="/compost" isFixed="true">
        <FadeIn>
          <div class="container-fluid p-slide pb-11">
            <div class="container">
              <div class="row">
                <div class="col">
                  <form ref={form} onSubmit={sendEmail}>
                    <div>
                      <div className="d-flex">
                        <div class="col-md-6">
                          <div className="row row-cols-auto">
                            <div class="form-group">
                              <label class="label text-start" for="who">
                                Vous êtes:*
                              </label>
                              <input type="text" class="form-control" name="who" id="who" />
                            </div>
                            <div class="form-group">
                              <label class="label" for="servis">
                                Nombre de repas servis par
                              </label>
                              <input type="text" class="form-control" name="servis" id="servis" />
                            </div>
                            <div class="form-group">
                              <label class="label" for="struct">
                                Structure:*
                              </label>
                              <input type="text" class="form-control" name="struct" id="struct" />
                            </div>
                            <div class="form-group">
                              <label class="label" for="fonction">
                                Fonction:*
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                name="fonction"
                                id="fonction"
                              />
                            </div>
                            <div class="form-group">
                              <label class="label" for="name">
                                Nom:*
                              </label>
                              <input type="text" class="form-control" name="name" id="name" />
                            </div>
                            <div class="form-group">
                              <label class="label" for="username">
                                Prénom:*
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                name="username"
                                id="username"
                              />
                            </div>
                            <div class="form-group">
                              <label class="label" for="email">
                                Email:*
                              </label>
                              <input type="text" class="form-control" name="email" id="email" />
                            </div>
                            <div class="form-group">
                              <label class="label" for="phone">
                                Téléphone:*
                              </label>
                              <input type="text" class="form-control" name="phone" id="phone" />
                            </div>
                            <div class="col-md-10">
                              <div class="form-group">
                                <label class="label" for="#">
                                  Message
                                </label>
                                <textarea
                                  name="message"
                                  class="form-control"
                                  id="message"
                                  cols="30"
                                  rows="4"
                                ></textarea>
                              </div>
                            </div>
                            <br />
                            <div class="col-md-10 p-2">
                              <div class="form-group">
                                <input
                                  type="submit"
                                  value="Envoyer"
                                  class="btn bg-orange c-btn rounded-pill"
                                />
                                <div class="submitting"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="col">
                  <h1 className="orange big-font-size-xxl rotate">DEMANDE DE DEVIS</h1>
                  <div className="pt-5">
                    <h1 className="bold">Vous aussi, valorisez vos biodéchets.</h1>
                    <p className="light big-font-size-md text-start">
                      Vous souhaitez produisez une quantité significative de déchets or ganiques et
                      souhaitez obtenir une évaluation du coût de collecte et de traitement des
                      Détritivores ?<br />
                      <br /> N’hésitez pas à renseigner le plus précisément possible ce formulaire
                      et nous reviendrons vers vous dans les meilleurs délais !{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </TemplatePages>
    </>
  );
};
export default Devis;
