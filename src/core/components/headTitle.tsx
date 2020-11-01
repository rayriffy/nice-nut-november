import { FunctionComponent, memo } from 'react'

import Head from 'next/head'

interface Props {
  title?: string | string[]
}

export const HeadTitle: FunctionComponent<Props> = props => {
  const { title } = props

  return (
    <Head>
      <title>
        {title
          ? `${
              typeof title === 'string' ? title : title.join(' · ')
            } | Nice Nut November`
          : 'Nice Nut November'}
      </title>
    </Head>
  )
}
