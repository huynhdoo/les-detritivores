import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
import Icons from '../components/Icons';
import { Helmet } from 'react-helmet';
import { TemplatePages } from '../components/TemplatePages';
import { useForm } from 'react-hook-form';

const Devis = () => {
  const [who, setWho] = useState('');
  const [numbers, setNumbers] = useState('');
  const [fonction, setFonction] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [structure, setStructure] = useState('');
  const [message, setMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onMailChange = (e) => {
    setEmail(e.target.value);
  };
  const onWhoChange = (e) => {
    setWho(e.target.value);
  };
  const onNumberChange = (e) => {
    setNumbers(e.target.value);
  };
  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const onStructureChange = (e) => {
    setStructure(e.target.value);
  };
  const onLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const onFonctionChange = (e) => {
    setFonction(e.target.value);
  };
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const onSubmit = (data) =>
    window.open(
      `mailto:aouhani@actes-atlantique.fr?body=${encodeURIComponent(
        `[Devis] \n\n Vous êtes: ${data.who} \n Nombre de repas servis par j: ${data.numbers} \n Structure: ${data.struct}\n Fonction: ${data.fonction}\n Nom: ${data.name}\n Prénom: ${data.lastName}\n Email: ${data.email}\n Téléphone: ${data.phone}\n\n${data.message}`
      )}`
    );
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Demande de devis</title>
        <html lang="fr" />
        <meta name="description" content="" />
      </Helmet>
      <TemplatePages link="/compost">
        <FadeIn>
          <div class="container-fluid p-slide pb-11">
            <div class="container">
              <div class="row">
                <div class="col-xl">
                  <div className="m-submit">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="grid row row-cols-2 solutionfound">
                        <div class="form-group">
                          <label class="label text-start" for="who">
                            Vous êtes:*
                          </label>
                          <input
                            onChange={onWhoChange}
                            type="text"
                            class="form-control"
                            {...register('who', { required: true })}
                          />
                          {errors.who && (
                            <FadeIn>
                              <span role="alert" className="alert">
                                Champs obligatoire.
                              </span>
                            </FadeIn>
                          )}
                        </div>
                        <div class="form-group">
                          <label class="label" for="servis">
                            Nombre de repas servis par
                          </label>
                          <input
                            onChange={onNumberChange}
                            type="number"
                            class="form-control"
                            {...register('numbers', { required: true })}
                          />
                          {errors.numbers && (
                            <FadeIn>
                              <span role="alert" className="alert">
                                Champs obligatoire.
                              </span>
                            </FadeIn>
                          )}
                        </div>
                        <div class="form-group">
                          <label class="label" for="struct">
                            Structure:*
                          </label>
                          <input
                            onChange={onStructureChange}
                            type="text"
                            class="form-control"
                            name="struct"
                            {...register('struct', { required: true })}
                          />
                          {errors.struct && (
                            <FadeIn>
                              <span role="alert" className="alert">
                                Champs obligatoire.
                              </span>
                            </FadeIn>
                          )}
                        </div>
                        <div class="form-group">
                          <label class="label" for="fonction">
                            Fonction:*
                          </label>
                          <input
                            onChange={onFonctionChange}
                            type="text"
                            class="form-control"
                            {...register('fonction', { required: true })}
                          />
                          {errors.fonction && (
                            <FadeIn>
                              <span role="alert" className="alert">
                                Champs obligatoire.
                              </span>
                            </FadeIn>
                          )}
                        </div>
                        <div class="form-group">
                          <label class="label" for="name">
                            Nom:*
                          </label>
                          <input
                            onChange={onNameChange}
                            type="text"
                            class="form-control"
                            {...register('name', { required: true })}
                          />
                          {errors.name && (
                            <FadeIn>
                              <span role="alert" className="alert">
                                Champs obligatoire.
                              </span>
                            </FadeIn>
                          )}
                        </div>
                        <div class="form-group">
                          <label class="label" for="username">
                            Prénom:*
                          </label>
                          <input
                            onChange={onLastNameChange}
                            type="text"
                            class="form-control"
                            {...register('lastName', { required: true })}
                          />
                          {errors.lastName && (
                            <FadeIn>
                              <span role="alert" className="alert">
                                Champs obligatoire.
                              </span>
                            </FadeIn>
                          )}
                        </div>
                        <div class="form-group">
                          <label class="label" for="email">
                            Email:*
                          </label>
                          <input
                            onChange={onMailChange}
                            type="email"
                            class="form-control"
                            {...register('email', { required: true })}
                          />
                          {errors.email && (
                            <FadeIn>
                              <span role="alert" className="alert">
                                Champs obligatoire.
                              </span>
                            </FadeIn>
                          )}
                        </div>
                        <div class="form-group">
                          <label class="label" for="phone">
                            Téléphone:*
                          </label>
                          <input
                            onChange={onPhoneChange}
                            type="number"
                            class="form-control"
                            {...register('phone', { required: true })}
                          />
                          {errors.phone && (
                            <FadeIn>
                              <span role="alert" className="alert">
                                Champs obligatoire.
                              </span>
                            </FadeIn>
                          )}
                        </div>
                        <div class="col-md-10 m-message">
                          <div class="form-group">
                            <label class="label" for="#">
                              Message
                            </label>
                            <textarea
                              onChange={onMessageChange}
                              class="form-control"
                              cols="30"
                              rows="4"
                              {...register('message', { required: true })}
                            />
                            {errors.message && (
                              <FadeIn>
                                <span role="alert" className="alert">
                                  Champs obligatoire.
                                </span>
                              </FadeIn>
                            )}
                          </div>
                        </div>
                        <br />
                        <div class="col-md-10 p-2 m-btn">
                          <div class="form-group">
                            <button
                              aria-label="Submit"
                              type="submit"
                              class="btn bg-orange c-btn rounded-pill"
                            >
                              Envoyer
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col rep">
                  <h1 className="orange big-font-size-pm rotate">
                    DEMANDE DE DEVIS
                    <span className="bg-dark line-custom" />
                  </h1>
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
                  <div className="curved-icn">
                    <Icons icon="curved-arrow" />
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
