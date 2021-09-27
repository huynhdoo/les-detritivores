import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
import { TemplatePages } from '../components/TemplatePages';

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

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !message ||
      !who ||
      !numbers ||
      !fonction ||
      !phone ||
      !lastName ||
      !structure
    )
      return <h1>Please fill out the form completely.</h1>;
    window.open(
      `mailto:aouhani@actes-atlantique.fr?body=${encodeURIComponent(
        `Hey, It's ${name} (${email})\n\n${message}`
      )}`
    );
    <h1>Thanks for your message!</h1>;
  };
  return (
    <>
      <TemplatePages link="/compost" isFixed="true">
        <FadeIn>
          <div class="container-fluid p-slide pb-11">
            <div class="container">
              <div class="row">
                <div class="col-xl">
                  <div>
                    <form onSubmit={onSubmit}>
                      <div className="grid row row-cols-2">
                        <div class="form-group">
                          <label class="label text-start" for="who">
                            Vous êtes:*
                          </label>
                          <input onChange={onWhoChange} type="text" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label class="label" for="servis">
                            Nombre de repas servis par
                          </label>
                          <input onChange={onNumberChange} type="text" class="form-control" />
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
                          />
                        </div>
                        <div class="form-group">
                          <label class="label" for="fonction">
                            Fonction:*
                          </label>
                          <input onChange={onFonctionChange} type="text" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label class="label" for="name">
                            Nom:*
                          </label>
                          <input change={onNameChange} type="text" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label class="label" for="username">
                            Prénom:*
                          </label>
                          <input change={onLastNameChange} type="text" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label class="label" for="email">
                            Email:*
                          </label>
                          <input onChange={onMailChange} type="email" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label class="label" for="phone">
                            Téléphone:*
                          </label>
                          <input onChange={onPhoneChange} type="number" class="form-control" />
                        </div>
                        <div class="col-md-10">
                          <div class="form-group">
                            <label class="label" for="#">
                              Message
                            </label>
                            <textarea
                              onChange={onMessageChange}
                              class="form-control"
                              cols="30"
                              rows="4"
                            ></textarea>
                          </div>
                        </div>
                        <br />
                        <div class="col-md-10 p-2">
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
                <div class="col">
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
