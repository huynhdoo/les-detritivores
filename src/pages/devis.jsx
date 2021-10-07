import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
import Icons from '../components/Icons';
import { Helmet } from 'react-helmet';
import { TemplatePages } from '../components/TemplatePages';
import { useForm } from 'react-hook-form';
import Page from 'react-page-loading';
const Devis = () => {
  const [, setWho] = useState('');
  const [, setNumbers] = useState('');
  const [, setFonction] = useState('');
  const [, setEmail] = useState('');
  const [, setPhone] = useState('');
  const [, setName] = useState('');
  const [, setLastName] = useState('');
  const [, setStructure] = useState('');
  const [, setMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
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

  const onSubmit = (data) => {
    fetch(`http://localhost:3001/send`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data }),
    })
      .then((response) => response.json())
      .then((body) => console.log(body));
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Demande de devis</title>
        <html lang="fr" />
        <meta name="description" content="" />
      </Helmet>
      <Page loader={'comet-spin'} color={'#263b29'} size={50}>
        <TemplatePages link="/compost">
          <FadeIn>
            {isSubmitSuccessful && (
              <FadeIn>
                <span role="message" className="message">
                  Message bien envoyer.
                </span>
              </FadeIn>
            )}
            <div className="container-fluid p-slide pb-11 c-tests">
              <div className="container">
                <div className="row">
                  <div className="col-xl">
                    <div className="m-submit">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid row row-cols-2 solutionfound">
                          <div className="form-group">
                            <label className="label text-start" htmlFor="who">
                              Vous êtes:*
                            </label>
                            <input
                              onChange={onWhoChange}
                              type="text"
                              className="form-control"
                              name="who"
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
                          <div className="form-group">
                            <label className="label" htmlFor="servis">
                              Nombre de repas servis par
                            </label>
                            <input
                              onChange={onNumberChange}
                              type="number"
                              className="form-control"
                              name="numbers"
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
                          <div className="form-group">
                            <label className="label" htmlFor="struct">
                              Structure:*
                            </label>
                            <input
                              onChange={onStructureChange}
                              type="text"
                              className="form-control"
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
                          <div className="form-group">
                            <label className="label" htmlFor="fonction">
                              Fonction:*
                            </label>
                            <input
                              onChange={onFonctionChange}
                              type="text"
                              className="form-control"
                              name="fonction"
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
                          <div className="form-group">
                            <label className="label" htmlFor="name">
                              Nom:*
                            </label>
                            <input
                              onChange={onNameChange}
                              type="text"
                              className="form-control"
                              name="name"
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
                          <div className="form-group">
                            <label className="label" htmlFor="username">
                              Prénom:*
                            </label>
                            <input
                              onChange={onLastNameChange}
                              type="text"
                              className="form-control"
                              name="lastname"
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
                          <div className="form-group">
                            <label className="label" htmlFor="email">
                              Email:*
                            </label>
                            <input
                              onChange={onMailChange}
                              type="email"
                              className="form-control"
                              name="email"
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
                          <div className="form-group">
                            <label className="label" htmlFor="phone">
                              Téléphone:*
                            </label>
                            <input
                              onChange={onPhoneChange}
                              type="number"
                              className="form-control"
                              name="phone"
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
                          <div className="col-md-10 m-message">
                            <div className="form-group">
                              <label className="label" htmlFor="#">
                                Message
                              </label>
                              <textarea
                                onChange={onMessageChange}
                                className="form-control"
                                cols="30"
                                rows="4"
                                name="message"
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
                          <div className="col-md-10 p-2 m-btn">
                            <div className="form-group">
                              <button
                                aria-label="Submit"
                                type="submit"
                                className="btn bg-orange c-btn rounded-pill"
                              >
                                Envoyer
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col rep">
                    <h1 className="orange big-font-size-pm rotate">
                      DEMANDE DE DEVIS
                      <span className="bg-dark line-custom" />
                    </h1>
                    <div className="pt-2">
                      <h1 className="bold">Vous aussi, valorisez vos biodéchets.</h1>
                      <p className="light big-font-size-md text-start">
                        Vous souhaitez produisez une quantité significative de déchets or ganiques
                        et souhaitez obtenir une évaluation du coût de collecte et de traitement des
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
      </Page>
    </>
  );
};
export default Devis;
