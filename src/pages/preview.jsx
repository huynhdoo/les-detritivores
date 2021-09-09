import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import axios from 'axios';

export default () => {

  const [Text, setText] = useState("");
    axios.get('https://api.storyblok.com/v2/cdn/stories/preview?version=draft&token=4Sl5OG2kesCX0K97UTd0Wwtt&cv=1631095460', {
    }).then((response) => {
      setText(response.data.story.content)
    }).catch(e => console.error(e))
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ Text.title }</title>
        <html lang="fr" />
        <meta name="description" content={ Text.description } />
      </Helmet>
      <App />
    </>
  );
};
