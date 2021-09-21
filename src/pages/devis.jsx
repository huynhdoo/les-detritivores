import React from 'react';
import Icons from '../components/Icons';
import { Link } from 'gatsby';
import FadeIn from 'react-fade-in';
import { useForm, ValidationError } from '@formspree/react';
const Devis = () => {
  const [state, handleSubmit] = useForm('mpzkbozg');
  if (state.succeeded) {
    return <p>Thanks !</p>;
  }
  return (
    <>
      <div id="start">
        <div className="d-flex justify-content-start d-back">
          <Link className="arrow-color" to="/compost">
            <div className="arrow-position">
              <Icons icon="arrow" />
            </div>
          </Link>
        </div>
      </div>
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
                          <ValidationError prefix="Message" field="message" errors={state.errors} />
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
export default Devis;
