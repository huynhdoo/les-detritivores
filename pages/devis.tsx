import type { NextPage } from "next";
import React, { useState, useEffect, ChangeEvent } from "react";
import useSWR from "swr";
import Fade from "react-reveal/Fade";
import fetcher from "libs/fetcher";

import { Content } from "libs/types";
import { useRichText } from "libs/storyblok";

import Loading from "components/Loading";
import { useForm } from "react-hook-form";

const Devis: NextPage = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [, setWho] = useState("");
  const [, setNumbers] = useState("");
  const [, setFonction] = useState("");
  const [, setEmail] = useState("");
  const [, setPhone] = useState("");
  const [, setName] = useState("");
  const [, setLastName] = useState("");
  const [, setStructure] = useState("");
  const [, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
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

  const onSubmit = (data) => {
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
  const { data } = useSWR<Content>(`/api/storyblok`, fetcher);
  return (
    <>
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
              className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 xl:w-100 md:w-96 sm:grid-cols-1 gap-1 justify-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col">
                <label>Vous êtes:*</label>
                <input
                  className="bg-white border-2 border-orangeDDTV w-26 h-12 p-3 rounded-md"
                  {...register("who", { required: true })}
                  onChange={onWhoChange}
                />
                {errors.who && (
                  <span role="alert" className="alert">
                    Champs obligatoire.
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label>Nombre de repas servis par jour:*</label>
                <input className="bg-white border-2 border-orangeDDTV w-26 h-12 p-3 rounded-md" />
              </div>
              <div className="flex flex-col">
                <label>Structure:*</label>
                <input className="bg-white border-2 border-orangeDDTV w-26 h-12 p-3 rounded-md" />
              </div>
              <div className="flex flex-col">
                <label>Fonction:*</label>
                <input className="bg-white border-2 border-orangeDDTV w-26 h-12 p-3 rounded-md" />
              </div>
              <div className="flex flex-col">
                <label>Nom:*</label>
                <input className="bg-white border-2 border-orangeDDTV w-26 h-12 p-3 rounded-md" />
              </div>
              <div className="flex flex-col">
                <label>Prénom:*</label>
                <input className="bg-white border-2 border-orangeDDTV w-26 h-12 p-3 rounded-md" />
              </div>
              <div className="flex flex-col">
                <label>Email:*</label>
                <input className="bg-white border-2 border-orangeDDTV w-26 h-12 p-3 rounded-md" />
              </div>
              <div className="flex flex-col">
                <label>Téléphone:*</label>
                <input className="bg-white border-2 border-orangeDDTV w-26 h-12 p-3 rounded-md" />
              </div>
              <div className="flex flex-col justify-center">
                <label>Message:*</label>
                <textarea className="w-full px-3 py-2 text-gray-700 focus:outline-none bg-white border-2 border-orangeDDTV w-26 h-12 p-3 rounded-md" />
                <div className="flex justify-center items-center p-2">
                  <button className="bg-orangeDDTV p-2 rounded-full text-white">
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