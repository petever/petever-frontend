import React, { useRef } from 'react';
import Head from 'next/head';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { common } from '../styles/common';
import AppLayout from 'src/components/common/AppLayout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
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
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </main>
  );
};

App.getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default App;
