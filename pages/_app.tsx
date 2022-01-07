import React from 'react';
import Head from 'next/head';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { common } from '../styles/common';
const App = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>펫에버</title>
    </Head>
    <Global
      styles={css`
        ${emotionNormalize}
        ${common}
      `}
    />
    <Component />
  </>
);

export default App;
