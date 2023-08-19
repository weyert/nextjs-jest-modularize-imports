import * as React from 'react'
import type { AppProps } from 'next/app'

import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta key="og:type" property="og:type" content="article" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <pre>{JSON.stringify(pageProps, null, 2)}</pre>
      <hr />
      <Component {...pageProps} />
    </>
  )
}