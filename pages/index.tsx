import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Fade from "react-reveal/Fade";
import fetcher from "libs/fetcher";
import FadeIn from "react-fade-in";
import swal from "sweetalert";
import Carousel from "react-elastic-carousel";

import { Content } from "libs/types";
import { Convert, useRichText } from "libs/storyblok";

import Loading from "components/Loading";
import Icons from "components/Icons";
import { images } from "libs/constant";

const Home: NextPage = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
    swal({
      title: "Bienvenue chez Les Détritivores !",
      icon: "/static/images/logo.svg",
      text: "Psst... Notre site est en cours de développement",
    }).then(() => {});
  }, []);
  const { data } = useSWR<Content>(`/api/storyblok`, fetcher);
  return (
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
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={500}
                    delay={500}
                    distance="30px"
                  >
                    <h1 className="text-center pb-2 md:text-6xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-orangeDDTV to-orange-600 transition -rotate-2">
                      {data.content.introTitle}
                    </h1>
                  </Fade>
                ) : (
                  <>
                    <Loading />
                  </>
                )}
              </div>
              <div className="flex flex-col items-start justify-center max-w-xl lg:max-w-6xl mb-16 dark:text-white space-y-10 smph:text-xs md:px-10 lg:px-10">
                <p className="font-light text-xl text-center mx-0 smph:mx-4 sm:mx-12 md:mx-12">
                  {data ? useRichText(data.content.introText) : <Loading />}
                </p>
                <div className="flex justify-start sm:mx-12 md:mx-14 mx-0">
                  <div className="block md:block sm:grid lg:grid grid-flow-col lg:grid-flow-col auto-rows-max md:space-x-0 lg:space-x-32">
                    <div className="">
                      <iframe
                        src={data?.content.youtubeVideoLink}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={data?.content.youtubeTitle}
                        className="flex justify-start rounded-2xl w-72 lg:w-250 h-52 lg:h-250 md:w-96 md:h-72 sm:w-150 sm:h-150 sm:mx-12 md:mx-1 mx-16"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center w-full">
                      <h1 className="pb-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-orangeDDTV to-orange-600">
                        {data ? (
                          <FadeIn>{data?.content.usagesTitle}</FadeIn>
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
                      <div className="flex flex-col justify-center items-center space-y-2 mt-2">
                        {data ? (
                          <>
                            <span>{data?.content.restaurantTitle}</span>
                          </>
                        ) : (
                          <Loading />
                        )}
                        {data ? (
                          <>
                            <span>{data?.content.restaurantCollective}</span>
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
          </Fade>
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={500}
            delay={500}
            distance="30px"
          >
            <div className="bg-greenDDTV h-64 w-full m-0 dark:bg-orangeDDTV">
              <div className="flex justify-center items-center">
                <div className="my-12 inline-flex space-x-5 transition-all ease-in-out duration-1000 transform translate-x-0">
                  <Carousel isRTL={true} enableAutoPlay={true}>
                    {images.map((item) => {
                      return (
                        <img
                          className="h-36 w-36 rounded-md"
                          src={item.image}
                        />
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
                  <h1 className="text-center pb-2 md:text-6xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-greenDDTV to-green-700 dark:bg-gradient-to-t dark:from-orangeDDTV dark:to-orange-600 transition -rotate-3">
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
                          <p className="font-light text-lg mx-1">
                            {useRichText(data.content.environement)}
                          </p>
                          <div className="justify-center">
                            <button className="bg-orangeDDTV text-white p-2 rounded-2xl inline-flex ">
                              <Icons
                                icons="plus"
                                className="text-white fill-current w-5 h-5 mr-1 mt-0.5"
                              />
                              En savoir plus
                            </button>
                          </div>
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
                          <p className="font-light text-lg mx-1">
                            {useRichText(data.content.socialText)}
                          </p>
                          <div className="justify-center">
                            <button className="bg-orangeDDTV text-white p-2 rounded-2xl inline-flex ">
                              <Icons
                                icons="plus"
                                className="text-white fill-current w-5 h-5 mr-1 mt-0.5"
                              />
                              En savoir plus
                            </button>
                          </div>
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
                          <p className="font-light text-lg mx-1">
                            {useRichText(data.content.CooperationText)}
                          </p>
                          <div className="justify-center">
                            <button className="bg-orangeDDTV text-white p-2 rounded-2xl inline-flex ">
                              <Icons
                                icons="plus"
                                className="text-white fill-current w-5 h-5 mr-1 mt-0.5"
                              />
                              En savoir plus
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
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={500}
              delay={500}
              distance="30px"
            >
              <div className="bg-greenDDTV dark:bg-orangeDDTV mt-20 -rotate-6 transform scale-125 h-20 !overflow-x-hidden transition-all">
                <div className="flex items-center justify-center my-5">
                  <h1 className="text-white font-bold text-4xl">
                    {data.content.offerTitle}
                  </h1>
                </div>
              </div>
            </Fade>
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
                      <div className="max-w-7xl mx-auto grid md:grid-cols-12 grid-cols-3 justify-center">
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
                          <p className="font-light text-lg mx-1">
                            {useRichText(data.content.collectText)}
                          </p>
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
                          <p className="font-light text-lg mx-1">
                            {useRichText(data.content.sensibilisationText)}
                          </p>
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
                          <p className="font-light text-lg mx-1">
                            {useRichText(data.content.compostText)}
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
            <div className="flex-col justify-center items-center text-center mt-20">
              <h1 className="text-center pb-2 md:text-6xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-orangeDDTV to-orange-600 dark:bg-gradient-to-t dark:from-orangeDDTV dark:to-orange-600 transition">
                {data.content.contactTitle}
              </h1>
              <footer className="relative pt-1">
                <div className="container mx-auto xl:mx-40 lg:mx-36 2xl:mx-auto px-6">
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
                          href={`tel:${data.content.linkadress}`}
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
  );
};

export default Home;
