import { NextPage } from 'next'
import { AppProps } from 'next/app'

import '../styles/tailwind.css'

const NextApp: NextPage<AppProps> = props => {
  const { Component, pageProps } = props

  return <Component {...pageProps} />
}

export default NextApp
