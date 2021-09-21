import React from 'react';
import FadeIn from 'react-fade-in';
import { useForm, ValidationError } from '@formspree/react';
import { TemplatePages } from '../components/TemplatePages';
const Devis = () => {
  const [state, handleSubmit] = useForm('mpzkbozg');
  if (state.succeeded) {
    return <p>Thanks !</p>;
  }
  return (
    <>
      <TemplatePages link="/compost">
        <FadeIn>
          <div class="container-fluid p-slide pb-11">
            <div class="container">
              <div class="row">
                <div class="col">
                  <form onSubmit={handleSubmit}>
                    <div>
                      <div className="d-flex">
                        <div class="col-md-6">
                          <div className="row row-cols-auto">
                            <div class="form-group">
                              <label class="label text-start" for="name">
                                Vous êtes:*
                              </label>
                              <input type="text" class="form-control" name="name" id="name" />
                            </div>
                            <div class="form-group">
                              <label class="label" for="name">
                                Nombre de repas servis par
                              </label>
                              <input type="text" class="form-control" name="name" id="name" />
                            </div>
                            <div class="form-group">
                              <label class="label" for="name">
                                Structure:*
                              </label>
                              <input type="text" class="form-control" name="name" id="name" />
                            </div>
                            <div class="form-group">
                              <label class="label" for="name">
                                Fonction:*
                              </label>
                              <input type="text" class="form-control" name="name" id="name" />
                            </div>
                            <div class="form-group">
                              <label class="label" for="name">
                                Nom:*
                              </label>
                              <input type="text" class="form-control" name="name" id="name" />
                            </div>
                            <div class="form-group">
                              <label class="label" for="name">
                                Prénom:*
                              </label>
                              <input type="text" class="form-control" name="name" id="name" />
                            </div>
                            <div class="form-group">
                              <label class="label" for="name">
                                Email:*
                              </label>
                              <input type="text" class="form-control" name="name" id="name" />
                            </div>
                            <div class="form-group">
                              <label class="label" for="name">
                                Téléphone:*
                              </label>
                              <input type="text" class="form-control" name="name" id="name" />
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
                            <ValidationError
                              prefix="Message"
                              field="message"
                              errors={state.errors}
                            />
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
