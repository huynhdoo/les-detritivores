import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';


export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ title }</title>
        <html lang={ lang } />
        <meta name="description" content={ description } />
      </Helmet>
      <App />
    </>
  );
};
