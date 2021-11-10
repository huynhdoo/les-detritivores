import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import fetcher from "libs/fetcher";
import Carousel from "react-elastic-carousel";
import Image from "next/image";
import Link from "next/link";

import { StoryBlok } from "libs/types";
import { Convert, useRichText } from "libs/storyblok";
import { images } from "libs/constant";

import Loading from "components/Loading";
import Icons from "components/Icons";

const Home: NextPage = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = React.useState(true);
  const { data } = useSWR<StoryBlok>(`/api/storyblok`, fetcher);

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
      {showModal ? (
        <div
          className={`fixed z-10 inset-0 overflow-y-auto`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ${
              showModal
                ? "transition-height duration-500 ease-in-out"
                : "transition-height duration-500 ease-in-out"
            }`}
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
                      Bienvenue chez Les Détritivores !
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 dark:text-white">
                        Psst... Notre site est en cours de développement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="transition mt-3 w-full inline-flex justify-center rounded-md border border-greenDDTV bg-greenDDTV hover:bg-green-800 dark:border-orangeDDTV shadow-sm px-4 py-2 dark:bg-orangeDDTV dark:hover:bg-orange-600 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {data && (
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={500}
              delay={500}
              distance="30px"
            >
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={500}
                delay={500}
                distance="30px"
              >
                <div className="flex flex-col justify-center px-8 my-20 overflow-hidden items-center">
                  <div className="flex-col justify-center items-center text-center mb-10">
                    {data ? (
                      <h1 className="text-center pb-2 md:text-6xl text-3xl font-bold text-orangeDDTV -rotate-2">
                        {data.content.introTitle}
                        <div className="fancy-title !border-orangeDDTV -rotate-3 ml-auto p-0.5" />
                      </h1>
                    ) : (
                      <>
                        <Loading />
                      </>
                    )}
                  </div>
                  <div className="flex flex-col items-start justify-center max-w-xl lg:max-w-6xl mb-16 dark:text-white space-y-10 smph:text-xs md:px-10 lg:px-10">
                    <p className="font-light text-xl text-center mx-0 sm:mx-12 md:mx-12">
                      {data ? useRichText(data.content.introText) : <Loading />}
                    </p>
                    <div className="flex justify-center m-auto">
                      <div className="flex justify-center items-center content-center">
                        <div className="grid auto-cols-max grid-rows-1 grid-cols-1 space-x-0 space-y-0 sm:space-y-2 md:space-y-2 xl:space-y-0 xxl:space-y-0 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 xl:space-x-5 2xl:space-x-20 max-w-max w-max">
                          <div className="flex justify-self-start">
                            <iframe
                              src={data?.content.youtubeVideoLink}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title={data?.content.youtubeTitle}
                              className="flex justify-start rounded-2xl w-72 lg:w-250 h-52 lg:h-250 md:w-96 md:h-72 sm:w-150 sm:h-150"
                            />
                          </div>
                          <div className="flex items-center 2xl:justify-self-start xl:justify-self-start justify-center xl:justify-end sm:justify-center md:justify-center">
                            <div className="flex flex-col items-center justify-center w-auto">
                              <h1 className="pb-2 text-2xl font-bold text-orangeDDTV">
                                {data ? (
                                  data?.content.usagesTitle
                                ) : (
                                  <>
                                    <Loading />
                                  </>
                                )}
                              </h1>
                              <div className="bg-orangeDDTV rounded-full">
                                <Icons
                                  icons="people"
                                  className="text-white fill-current"
                                />
                              </div>
                              <div className="flex flex-col justify-center items-center space-y-2 mt-2 w-max">
                                {data ? (
                                  <>
                                    <span>{data?.content.restaurantTitle}</span>
                                  </>
                                ) : (
                                  <Loading />
                                )}
                                {data ? (
                                  <>
                                    <span>
                                      {data?.content.restaurantCollective}
                                    </span>
                                  </>
                                ) : (
                                  <Loading />
                                )}
                                {data ? (
                                  <>
                                    <span>{data?.content.collectivites}</span>
                                  </>
                                ) : (
                                  <Loading />
                                )}
                                {data ? (
                                  <>
                                    <span>{data?.content.particular}</span>
                                  </>
                                ) : (
                                  <Loading />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={500}
                delay={500}
                distance="30px"
              >
                <h1 className="text-center pb-2 md:text-3xl text-xl font-bold text-orangeDDTV">
                  {data.content.trustTitle}
                </h1>
                <div className="bg-greenDDTV h-64 w-full m-0 dark:bg-orangeDDTV">
                  <div className="flex justify-center items-center">
                    <div className="my-12 inline-flex space-x-5 transition-all ease-in-out duration-1000 transform translate-x-0">
                      <Carousel
                        isRTL={true}
                        enableAutoPlay={true}
                        itemPosition="CENTER"
                        enableSwipe={true} //only for test purpose.
                      >
                        {images.map((item) => {
                          return (
                            <div className="rounded-md">
                              <Image
                                className="h-36 !w-40 rounded-md bg-cover"
                                src={item.image}
                                width="350"
                                height="350"
                                loading="lazy"
                              />
                            </div>
                          );
                        })}
                      </Carousel>
                    </div>
                  </div>
                </div>

                {data ? (
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={500}
                    delay={500}
                    distance="30px"
                  >
                    <div className="flex-col justify-center items-center text-center mt-10">
                      <h1 className="text-center pb-2 md:text-6xl text-3xl font-bold text-transparent text-greenDDTV -rotate-3 h-24">
                        {data.content.ourEngagement}
                      </h1>
                      <div className="mt-5">
                        <div className="">
                          <div className="max-w-7xl mx-auto grid md:grid-cols-12 grid-cols-3 justify-center">
                            <div className="col-span-4 space-y-5">
                              <h1 className="text-xl font-bold text-orangeDDTV">
                                {data.content.environementTitle}
                              </h1>
                              <div className="bg-orangeDDTV w-36 rounded-full m-auto">
                                <Icons
                                  icons="environement"
                                  className="fill-current text-white h-36"
                                />
                              </div>
                              <p className="font-light text-lg mx-0 smph:mx-2">
                                {useRichText(data.content.environement)}
                              </p>
                            </div>
                            <div className="col-span-4 space-y-5">
                              <h1 className="text-xl font-bold text-orangeDDTV">
                                {data.content.socialTitle}
                              </h1>
                              <div className="bg-orangeDDTV w-36 rounded-full m-auto">
                                <Icons
                                  icons="together"
                                  className="fill-current text-white h-36"
                                />
                              </div>
                              <p className="font-light text-lg mx-0 smph:mx-2">
                                {useRichText(data.content.socialText)}
                              </p>
                            </div>
                            <div className="col-span-4 space-y-5">
                              <h1 className="text-xl font-bold text-orangeDDTV">
                                {data.content.CooperationTitle}
                              </h1>
                              <div className="bg-orangeDDTV w-36 rounded-full m-auto">
                                <Icons
                                  icons="hand"
                                  className="fill-current text-white h-36"
                                />
                              </div>
                              <p className="font-light text-lg mx-0 smph:mx-2">
                                {useRichText(data.content.CooperationText)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fade>
                ) : (
                  <>
                    <Loading />
                  </>
                )}
                <Rotate
                  top
                  left
                  opposite
                  cascade
                  className="!overflow-y-hidden"
                >
                  <div className="bg-greenDDTV dark:bg-orangeDDTV mt-20 !transition !duration-500 -rotate-6 transform scale-125 h-20 !overflow-x-hidden">
                    <div className="flex items-center justify-center my-5">
                      <h1 className="text-white font-bold text-4xl">
                        {data.content.offerTitle}
                      </h1>
                    </div>
                  </div>
                </Rotate>
                {data ? (
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={500}
                    delay={500}
                    distance="30px"
                  >
                    <div className="flex-col justify-center items-center text-center mt-20">
                      <div className="mt-5">
                        <div className="">
                          <div className="max-w-7xl mx-auto grid md:grid-cols-12 grid-cols-3 justify-center space-y-4 md:my- sm:space-y-0">
                            <div className="col-span-4 space-y-5">
                              <h1 className="text-xl font-bold text-orangeDDTV">
                                {data.content.collectTitle}
                              </h1>
                              <div className="bg-greenDDTV w-36 rounded-full m-auto dark:bg-orangeDDTV">
                                <Icons
                                  icons="bike"
                                  className="fill-current text-white h-36"
                                />
                              </div>
                              <p className="font-light text-lg mx-0 smph:mx-2">
                                {useRichText(data.content.collectText)}
                              </p>
                              <div className="justify-center">
                                <button className="bg-orangeDDTV hover:bg-orange-600 transition text-white p-2 rounded-2xl inline-flex">
                                  <Icons
                                    icons="plus"
                                    className="text-white fill-current w-5 h-5 mr-1 mt-0.5"
                                  />
                                  <Link href="/collecte">En savoir plus</Link>
                                </button>
                              </div>
                            </div>
                            <div className="col-span-4 space-y-5">
                              <h1 className="text-xl font-bold text-orangeDDTV">
                                {data.content.sensibilisationTitle}
                              </h1>
                              <div className="bg-greenDDTV w-36 rounded-full m-auto dark:bg-orangeDDTV">
                                <Icons
                                  icons="happystar"
                                  className="fill-current text-white h-36"
                                />
                              </div>
                              <p className="font-light text-lg mx-0 smph:mx-2">
                                {useRichText(data.content.sensibilisationText)}
                              </p>
                              <div className="justify-center">
                                <button className="bg-orangeDDTV hover:bg-orange-600 transition text-white p-2 rounded-2xl inline-flex">
                                  <Icons
                                    icons="plus"
                                    className="text-white fill-current w-5 h-5 mr-1 mt-0.5"
                                  />
                                  <Link href="/sensibilisation">
                                    En savoir plus
                                  </Link>
                                </button>
                              </div>
                            </div>
                            <div className="col-span-4 space-y-5">
                              <h1 className="text-xl font-bold text-orangeDDTV">
                                {data.content.compostTitle}
                              </h1>
                              <div className="bg-greenDDTV w-36 rounded-full m-auto dark:bg-orangeDDTV">
                                <Icons
                                  icons="flowers"
                                  className="fill-current text-white h-36"
                                />
                              </div>
                              <p className="font-light text-lg mx-0 smph:mx-2">
                                {useRichText(data.content.compostText)}
                              </p>
                              <div className="justify-center">
                                <button className="bg-orangeDDTV hover:bg-orange-600 transition text-white p-2 rounded-2xl inline-flex">
                                  <Icons
                                    icons="plus"
                                    className="text-white fill-current w-5 h-5 mr-1 mt-0.5"
                                  />
                                  <Link href="/compostage">En savoir plus</Link>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fade>
                ) : (
                  <>
                    <Loading />
                  </>
                )}
                <div className="flex-col justify-center items-center text-center mt-20">
                  <h1 className="text-center pb-2 md:text-6xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-orangeDDTV to-orange-600 dark:bg-gradient-to-t dark:from-orangeDDTV dark:to-orange-600 transition">
                    {data.content.contactTitle}
                  </h1>
                  <footer className="relative pt-1">
                    <div className="container md:container mx-auto px-6">
                      <div className="sm:flex sm:mt-8">
                        <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                          <div className="flex flex-col">
                            <h1 className="text-greenDDTV dark:text-orangeDDTV font-bold text-4xl text-left">
                              NOUS APPELER
                            </h1>
                            <a
                              href={`tel:${data.content.number}`}
                              target="_blank"
                              rel="noopener"
                              className="text-left hover:text-orangeDDTV transition p-1"
                            >
                              {data.content.number}
                            </a>
                            <h1 className="text-greenDDTV dark:text-orangeDDTV font-bold text-4xl text-left">
                              NOUS ÉCRIRE
                            </h1>
                            <a
                              href={`mailo:${data.content.mail}`}
                              target="_blank"
                              rel="noopener"
                              className="text-left hover:text-orangeDDTV transition p-1"
                            >
                              {data.content.mail}
                            </a>
                            <h1 className="text-greenDDTV dark:text-orangeDDTV font-bold text-4xl text-left">
                              NOUS RENCONTRER
                            </h1>
                            <a
                              href={`${data.content.linkadress}`}
                              target="_blank"
                              rel="noopener"
                              className="text-left hover:text-orangeDDTV transition p-1"
                            >
                              {Convert(data.content.adress)}
                            </a>
                          </div>
                          <div className="flex flex-col"></div>
                          <div className="flex flex-col space-y-2">
                            <h1 className="text-3xl text-greenDDTV font-bold dark:text-orangeDDTV">
                              SUIVEZ-NOUS
                            </h1>
                            <div className="mt-5 space-y-2">
                              <div className="flex space-x-2">
                                <div className="bg-orangeDDTV rounded-full w-10 p-1 h-10">
                                  <Icons
                                    icons="linkedin"
                                    className="text-white fill-current h-6 w-6 m-auto mt-1"
                                  />
                                </div>
                                <a
                                  className="text-xl hover:text-orangeDDTV transition items-center mt-0.5"
                                  target="_blank"
                                  href={data.content.linkLinkedin}
                                >
                                  Linkedin
                                </a>
                              </div>
                              <div className="flex space-x-2">
                                <div className="bg-orangeDDTV rounded-full w-10 p-1 h-10">
                                  <Icons
                                    icons="instagram"
                                    className="text-white fill-current h-6 w-6 m-auto mt-1"
                                  />
                                </div>
                                <a
                                  className="text-xl hover:text-orangeDDTV transition items-center mt-0.5"
                                  rel="noopener"
                                  href={data.content.linkInstagram}
                                >
                                  Instagram
                                </a>
                              </div>
                              <div className="flex space-x-2">
                                <div className="bg-orangeDDTV rounded-full w-10 p-1 h-10">
                                  <Icons
                                    icons="facebook"
                                    className="text-white fill-current h-6 w-6 m-auto mt-1"
                                  />
                                </div>
                                <a
                                  className="text-xl hover:text-orangeDDTV transition items-center mt-0.5"
                                  href={data.content.linkFacebook}
                                >
                                  Facebook
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </footer>
                </div>
              </Fade>
            </Fade>
          )}
        </>
      )}
    </>
  );
};

export default Home;
