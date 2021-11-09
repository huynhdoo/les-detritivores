import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Fade from "react-reveal/Fade";
import fetcher from "libs/fetcher";
import Image from "next/image";
import { StoryBlok } from "libs/types";
import { useRichText } from "libs/storyblok";

import Loading from "components/Loading";
import Icons from "components/Icons";

const Sensibilisation: NextPage = () => {
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
  }, []);
  const { data } = useSWR<StoryBlok>(`/api/storyblok`, fetcher);
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
            <div className="flex flex-col space-y-2">
              {data ? (
                <>
                  <div className="w-auto">
                    <Image
                      className="rounded-2xl"
                      src="/static/images/IMG_0324[736].jpg"
                      width="900"
                      height="700"
                    />
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
              <span className="inline-flex space-x-2 justify-center">
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
                    <h1 className="text-left pb-2 md:text-6xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-orangeDDTV to-orange-600 transition -rotate-2">
                      {data?.content.titleSectionSensibilisation}
                      <div className="bg-growing-underline-black hidden">
                        &nbsp;
                      </div>
                    </h1>
                    <div className="space-y-4">
                      <p className="text-xl sm:text-md font-bold">
                        {useRichText(data?.content.textSensibilisation)}
                      </p>
                      <div className="flex flex-col space-y-2">
                        <p className="font-light text-xl p-4 space-y-2 pl-10">
                          {useRichText(data?.content.text2Sensibilisation)}
                        </p>
                        <div>
                          <p className="font-bold text-xl">
                            {useRichText(data?.content.gameSensibilisation)}
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
          </div>
        </div>
      </Fade>
    </>
  );
};
export default Sensibilisation;
