import React from 'react';
import Head from 'next/head';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { common } from '../styles/common';
import AppLayout from '../components/AppLayout';
const App = ({ Component, pageProps }) => {
  return (
    <main>
      <Head>
        <meta charSet="utf-8" />
        <title>Petever</title>
      </Head>
      <Global
        styles={css`
          ${emotionNormalize}
          ${common}
        `}
      />
      <AppLayout>
        <Component />
      </AppLayout>
    </main>
  );
};

export default App;
