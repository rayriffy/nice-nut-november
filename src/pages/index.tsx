import { GetStaticProps, NextPage } from 'next'

import { SelectionRenderer } from '../core/components/selectionRenderer'

import { EssentialHentai } from '../core/@types/EssentialHentai'

interface Props {
  year: number
  selections: {
    date: number
    gallery: EssentialHentai
  }[]
}

const Page: NextPage<Props> = props => {
  return <SelectionRenderer {...props} />
}

export const getStaticProps: GetStaticProps<Props> = async context => {
  const { default: moment } = await import('moment')
  const { getPropsByYear } = await import(
    '../core/services/functions/getPropsByYear'
  )

  const allSelectionsByTargetYear = await getPropsByYear(moment().get('year'))

  return {
    props: {
      year: moment().get('year'),
      selections: allSelectionsByTargetYear,
    },
  }
}

export default Page
