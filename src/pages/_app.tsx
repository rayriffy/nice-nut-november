import { Fragment } from 'react'

import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/tailwind.css'

const NextApp: NextPage<AppProps> = props => {
  const { Component, pageProps } = props

  return (
    <Fragment>
      <Head>
        <title>Nice Nut November</title>
        <meta name="title" content="Nice Nut November" />
        <meta
          name="description"
          content="Why do you need to hold yourself? Enjoy out nice selection, release daily on November"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nnn.rayriffy.com/" />
        <meta property="og:title" content="Nice Nut November" />
        <meta
          property="og:description"
          content="Why do you need to hold yourself? Enjoy out nice selection, release daily on November"
        />
        <meta property="og:image" content="https://nnn.rayriffy.com/og.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nnn.rayriffy.com/" />
        <meta property="twitter:title" content="Nice Nut November" />
        <meta
          property="twitter:description"
          content="Why do you need to hold yourself? Enjoy out nice selection, release daily on November"
        />
        <meta
          property="twitter:image"
          content="https://nnn.rayriffy.com/og.jpg"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default NextApp
