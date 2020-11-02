import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { Context } from '../store'

import { AppHeader } from '../app/components/header'
import { AppFooter } from '../app/components/footer'

import '../styles/tailwind.css'

const NextApp: NextPage<AppProps> = props => {
  const { Component, pageProps } = props

  return (
    <Context>
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
        <meta property="og:image" content="https://nnn.rayriffy.com/og2.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nnn.rayriffy.com/" />
        <meta property="twitter:title" content="Nice Nut November" />
        <meta
          property="twitter:description"
          content="Why do you need to hold yourself? Enjoy out nice selection, release daily on November"
        />
        <meta
          property="twitter:image"
          content="https://nnn.rayriffy.com/og2.jpg"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4b6fff" />
        <meta name="apple-mobile-web-app-title" content="Nice Nut November" />
        <meta name="application-name" content="Nice Nut November" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <AppHeader />
      <main className="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 lg:px-8 min-h-full">
        <Component {...pageProps} />
      </main>
      <AppFooter />
    </Context>
  )
}

export default NextApp
