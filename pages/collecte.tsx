import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Fade from "react-reveal/Fade";
import Image from "next/image";

import fetcher from "libs/fetcher";
import { StoryBlok } from "libs/types";
import { useRichText } from "libs/storyblok";

import Loading from "components/Loading";
import Icons from "components/Icons";
import ScrollToTop from "components/ScrollToTop";

const Collecte: NextPage = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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
      <ScrollToTop />
      <Fade
        left={isDesktop}
        bottom={isMobile}
        duration={500}
        delay={500}
        distance="30px"
      >
        <div className="max-w-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 mx-5 my-2">
            <div className="flex flex-col space-y-2">
              {data ? (
                <>
                  <div>
                    <div className="!rounded-lg w-80 m-auto md:m-0 sm:m-0">
                      <Image
                        width="320"
                        height="200"
                        className="!rounded-lg"
                        src="/static/images/DETRI_211007_137.jpg"
                        loading="lazy"
                        blurDataURL="/static/images/DETRI_211007_137.jpg"
                        placeholder="blur"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="!rounded-lg w-80 m-auto md:m-0 sm:m-0">
                      <Image
                        width="320"
                        height="200"
                        className="!rounded-lg"
                        src="/static/images/DETRI_211007_336.jpg"
                        blurDataURL="/static/images/DETRI_211007_336.jpg"
                        placeholder="blur"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="!rounded-lg w-80 m-auto md:m-0 sm:m-0">
                      <Image
                        width="320"
                        height="200"
                        className="!rounded-lg"
                        src="/static/images/IMG_0099.jpg"
                        blurDataURL="/static/images/IMG_0099.jpg"
                        placeholder="blur"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="!rounded-lg w-80 m-auto md:m-0 sm:m-0">
                      <Image
                        width="320"
                        height="200"
                        className="!rounded-lg"
                        src="/static/images/DETRI_211007_623.jpg"
                        blurDataURL="/static/images/DETRI_211007_623.jpg"
                        placeholder="blur"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div className="rounded-lg w-80 bg-greenDDTV" />
                  </div>
                  <div>
                    <div className="rounded-lg w-80 bg-greenDDTV" />
                  </div>
                  <div>
                    <div className="rounded-lg w-80 bg-greenDDTV" />
                  </div>
                  <div>
                    <div className="rounded-lg w-80 bg-greenDDTV" />
                  </div>
                </>
              )}
              <span className="inline-flex justify-center 2xl:justify-start xl:justify-start sm:justify-start md:justify-start space-x-2">
                <Icons
                  icons="photo"
                  className="w-6 h-6 text-black fill-current dark:text-white"
                />
                <p className="font-normal text-base mt-0.5">
                  François Passerini
                </p>
              </span>
            </div>
            <div className="flex flex-col space-x-10 justify-between">
              {data ? (
                <>
                  <div className="space-y-4">
                    <h1 className="text-left pb-2 md:text-6xl text-3xl font-bold text-orangeDDTV -rotate-2">
                      COLLECTE
                      <div className="flex justify-start md:justify-center md:space-x-2 space-x-0 mr-10 md:mr-0 md:ml-10 sm:mr-42 xl:mr-auto hidden">
                        <div className="fancy-title !border-greenDDTV dark:!border-orangeDDTV fixed -rotate-3 p-0.5" />
                      </div>
                    </h1>
                    <div className="space-y-4">
                      <p className="text-xl font-bold">
                        {data?.content.collectMiniText}
                      </p>
                      <div className="flex flex-col items-center content-center space-y-2">
                        <div className="flex space-x-2">
                          <span className="text-orangeDDTV text-3xl border-b-4 border-orangeDDTV -rotate-3 h-10">
                            1
                          </span>
                          <p className="text-xl font-light">
                            {useRichText(data?.content.collectFirstText)}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <span className="text-orangeDDTV text-3xl border-b-4 border-orangeDDTV -rotate-3 h-10">
                            2
                          </span>
                          <p className="text-xl font-light">
                            {useRichText(data?.content.collectSecondText)}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <span className="text-orangeDDTV text-3xl border-b-4 border-orangeDDTV -rotate-3 h-10">
                            3
                          </span>
                          <p className="text-xl font-light space-y-2">
                            {useRichText(data?.content.collectTreeText)}
                          </p>
                        </div>
                        <div>
                          <p className="font-bold text-xl">
                            En camions, à vélos ou grâce à l'installation de
                            Bornes d'Apport Volontaire, nos équipes parcourent
                            les rues de Bordeaux et ses alentours pour collecter
                            l'ensemble de vos restes alimentaires !
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Loading />
              )}
            </div>
            <div className="space-y-2 hidden">
              <h1 className="text-2xl font-medium text-center ">
                Où intervenons-nous ?
              </h1>
              <div className="flex justify-center">
                <iframe
                  title="Maps"
                  src={data?.content.mapsLink}
                  className="w-96 h-80 sm:w-52 sm:h-52 md:w-80 md:h-150 lg:w-200 lg:200 rounded-2xl"
                  loading="lazy"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};
export default Collecte;
