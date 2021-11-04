import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "next-themes";
import useSWR from "swr";
import { Content } from "../libs/types";
import fetcher from "../libs/fetcher";
import Icons from "../components/Icons";

function MyApp({ Component, pageProps }: AppProps) {
  const { data } = useSWR<Content>(`/api/storyblok`, fetcher);
  return (
    <>
      <title>{data ? data?.content.Title : "chargement..."}</title>
      <ThemeProvider defaultTheme="light" attribute="class">
        <div id="start">
          <div className="flex justify-center">
            <Icons icons="logo" className="text-white" />
          </div>
        </div>
        <Component {...pageProps} />
        <footer id="footer">
          <div className="flex justify-end items-center space-x-2 mr-2 mt-4 sm:mt-5">
            <Icons icons="logo" className="text-white" />
          </div>
        </footer>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
