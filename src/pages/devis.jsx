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
      <TemplatePages link="/compost" isFixed="true">
        <FadeIn>
          <div className="container-fluid p-slide pb-11">
            <div className="container">
              <div className="row">
                <div className="col">
                  <form onSubmit={handleSubmit}>
                    <div>
                      <div className="d-flex">
                        <div className="col-md-6">
                          <div className="row row-cols-auto">
                            <div className="form-group">
                              <label className="label text-start" for="name">
                                Vous êtes:*
                              </label>
                              <input type="text" className="form-control" name="name" id="name" />
                            </div>
                            <div className="form-group">
                              <label className="label" for="name">
                                Nombre de repas servis par
                              </label>
                              <input type="text" className="form-control" name="name" id="name" />
                            </div>
                            <div className="form-group">
                              <label className="label" for="name">
                                Structure:*
                              </label>
                              <input type="text" className="form-control" name="name" id="name" />
                            </div>
                            <div className="form-group">
                              <label className="label" for="name">
                                Fonction:*
                              </label>
                              <input type="text" className="form-control" name="name" id="name" />
                            </div>
                            <div className="form-group">
                              <label className="label" for="name">
                                Nom:*
                              </label>
                              <input type="text" className="form-control" name="name" id="name" />
                            </div>
                            <div className="form-group">
                              <label className="label" for="name">
                                Prénom:*
                              </label>
                              <input type="text" className="form-control" name="name" id="name" />
                            </div>
                            <div className="form-group">
                              <label className="label" for="name">
                                Email:*
                              </label>
                              <input type="text" className="form-control" name="name" id="name" />
                            </div>
                            <div className="form-group">
                              <label className="label" for="name">
                                Téléphone:*
                              </label>
                              <input type="text" className="form-control" name="name" id="name" />
                            </div>
                            <div className="col-md-10">
                              <div className="form-group">
                                <label className="label" for="#">
                                  Message
                                </label>
                                <textarea
                                  name="message"
                                  className="form-control"
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
                            <div className="col-md-10 p-2">
                              <div className="form-group">
                                <input
                                  type="submit"
                                  value="Envoyer"
                                  className="btn bg-orange c-btn rounded-pill"
                                />
                                <div className="submitting"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col">
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
