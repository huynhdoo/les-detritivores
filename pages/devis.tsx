import type { NextPage } from "next";
import React, { useState, useEffect, ChangeEvent } from "react";
import useSWR from "swr";
import Fade from "react-reveal/Fade";
import fetcher from "libs/fetcher";
import { useForm } from "react-hook-form";

import { StoryBlok } from "libs/types";
import { useRichText } from "libs/storyblok";

import Loading from "components/Loading";
import Icons from "components/Icons";

const Devis: NextPage = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = React.useState(true);
  const { data } = useSWR<StoryBlok>(`/api/storyblok`, fetcher);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const [, setWho] = useState("");
  const [, setNumbers] = useState("");
  const [, setFonction] = useState("");
  const [, setEmail] = useState("");
  const [, setPhone] = useState("");
  const [, setName] = useState("");
  const [, setLastName] = useState("");
  const [, setStructure] = useState("");
  const [, setMessage] = useState("");
  const onMailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onWhoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWho(e.target.value);
  };
  const onNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumbers(e.target.value);
  };
  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const onStructureChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStructure(e.target.value);
  };
  const onLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const onFonctionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFonction(e.target.value);
  };
  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const onSubmit = () => {
    fetch(`https://api-ddtv.herokuapp.com/send`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    })
      .then((response) => response.json())
      .then((body) => console.log(body));
  };
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  return (
    <>
      {isSubmitSuccessful && (
        <>
          {showModal ? (
            <div
              className={`fixed z-10 inset-0 overflow-y-auto`}
              onClick={() => setShowModal(false)}
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div
                className={`flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0`}
              >
                <div
                  className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                  aria-hidden="true"
                ></div>

                <span
                  className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                >
                  &#8203;
                </span>

                <div className="animate-wiggle inline-block align-bottom bg-black dark:bg-white rounded-lg text-left overflow-hidden shadow-xl transform sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div className="bg-white dark:bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="flex flex-col">
                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-36 w-36">
                        <Icons
                          icons="logo"
                          className="fill-current text-black dark:text-white"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50"
                          id="modal-title"
                        >
                          Merci de votre confiance !
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 dark:text-white">
                            Le formulaire à bien envoyer !
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"></div>
                </div>
              </div>
            </div>
          ) : null}
        </>
      )}
      <Fade
        left={isDesktop}
        bottom={isMobile}
        duration={500}
        delay={500}
        distance="30px"
      >
        <div className="max-w-screen my-3 justify-center content-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 mx-5 my-2 space-x-10">
            <form
              className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 xl:w-100 md:w-96 sm:grid-cols-1 gap-x-2 gap-y-3 justify-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col">
                <label>Vous êtes:*</label>
                <input
                  className="bg-white dark:bg-gray-900 border-2 border-orangeDDTV w-26 h-12 p-3 rounded-md transition"
                  {...register("who", { required: true })}
                  autoComplete="off"
                  onChange={onWhoChange}
                />
                {errors.who && (
                  <span role="alert" className="text-sm font-normal">
                    Champs obligatoire.
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label>Nombre de repas servis par jour:*</label>
                <input
                  className="bg-white dark:bg-gray-900 border-2 border-orangeDDTV w-26 h-12 p-3 rounded-md transition"
                  {...register("numbers", { required: true })}
                  autoComplete="off"
                  onChange={onNumberChange}
                />
                {errors.numbers && (
                  <span role="alert" className="text-sm font-medium">
                    Champs obligatoire.
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label>Structure:*</label>
                <input
                  className="bg-white dark:bg-gray-900 border-2 border-orangeDDTV w-26 h-12 p-3 rounded-md transition"
                  {...register("structure", { required: true })}
                  autoComplete="off"
                  onChange={onStructureChange}
                />
                {errors.structure && (
                  <span role="alert" className="text-sm font-medium">
                    Champs obligatoire.
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label>Fonction:*</label>
                <input
                  className="bg-white dark:bg-gray-900 border-2 border-orangeDDTV w-26 h-12 p-3 rounded-md transition"
                  {...register("fonction", { required: true })}
                  autoComplete="off"
                  onChange={onFonctionChange}
                />
                {errors.fonction && (
                  <span role="alert" className="text-sm font-medium">
                    Champs obligatoire.
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label>Nom:*</label>
                <input
                  className="bg-white dark:bg-gray-900 border-2 border-orangeDDTV w-26 h-12 p-3 rounded-md transition"
                  {...register("name", { required: true })}
                  autoComplete="off"
                  onChange={onNameChange}
                />
                {errors.name && (
                  <span role="alert" className="text-sm font-medium">
                    Champs obligatoire.
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label>Prénom:*</label>
                <input
                  className="bg-white dark:bg-gray-900 border-2 border-orangeDDTV w-26 h-12 p-3 rounded-md transition"
                  {...register("lastName", { required: true })}
                  autoComplete="off"
                  onChange={onLastNameChange}
                />
                {errors.lastName && (
                  <span role="alert" className="text-sm font-medium">
                    Champs obligatoire.
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label>Email:*</label>
                <input
                  className="bg-white dark:bg-gray-900 border-2 border-orangeDDTV w-26 h-12 p-3 rounded-md transition"
                  {...register("mail", { required: true })}
                  autoComplete="off"
                  onChange={onMailChange}
                />
                {errors.mail && (
                  <span role="alert" className="text-sm font-medium">
                    Champs obligatoire.
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label>Téléphone:*</label>
                <input
                  className="bg-white dark:bg-gray-900 border-2 border-orangeDDTV w-26 h-12 p-3 rounded-md transition"
                  {...register("phone", { required: true })}
                  autoComplete="off"
                  onChange={onPhoneChange}
                />
                {errors.phone && (
                  <span role="alert" className="text-sm font-medium">
                    Champs obligatoire.
                  </span>
                )}
              </div>
              <div className="flex flex-col justify-center">
                <label>Message:*</label>
                <textarea
                  className="w-full px-3 py-2 text-gray-700 focus:outline-none bg-white dark:bg-gray-900 border-2 border-orangeDDTV w-26 h-12 p-3 rounded-md transition"
                  {...register("message", { required: true })}
                  autoComplete="off"
                  onChange={onMessageChange}
                />
                {errors.message && (
                  <span role="alert" className="text-sm font-medium">
                    Champs obligatoire.
                  </span>
                )}
                <div className="flex justify-center items-center p-2">
                  <button
                    className="bg-orangeDDTV transition hover:bg-orange-600 p-2 rounded-full text-white"
                    type="submit"
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </form>
            <div className="flex flex-col space-x-10 justify-between">
              {data ? (
                <>
                  <div className="space-y-4">
                    <h1 className="text-left pb-2 md:text-6xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-orangeDDTV to-orange-600 transition -rotate-2">
                      {data?.content.MoneyTitle}
                      <div className="bg-growing-underline-black hidden">
                        &nbsp;
                      </div>
                    </h1>
                    <div className="space-y-4">
                      <p className="text-xl sm:text-md font-bold">
                        Vous aussi, valorisez vos biodéchets
                      </p>
                      <div className="flex flex-col space-y-2">
                        <p className="font-light text-xl space-y-2">
                          {useRichText(data?.content.MoneyText)}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};
export default Devis;
