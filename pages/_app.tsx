import React from 'react';
import { AppProps } from 'next/app';
import { Refine } from '@pankod/refine-core';
import routerProvider from '@pankod/refine-nextjs-router';
import dataProvider from '@pankod/refine-simple-rest';

import '/styles/global.css';

import { DefaultLayout } from 'layouts/DefaultLayout';

const API_URL = 'https://fakestoreapi.com';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider(API_URL)}
      Layout={DefaultLayout}
      resources={[{ name: 'products' }]}
    >
      <Component {...pageProps} />
    </Refine>
  );
}

export default MyApp;
