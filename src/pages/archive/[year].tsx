import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { SelectionRenderer } from '../../core/components/selectionRenderer'

import { EssentialHentai } from '../../core/@types/EssentialHentai'

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
  const { getPropsByYear } = await import(
    '../../core/services/functions/getPropsByYear'
  )

  const allSelectionsByTargetYear = await getPropsByYear(
    context.params.year as string
  )

  return {
    props: {
      year: Number(context.params.year),
      selections: allSelectionsByTargetYear,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { default: moment } = await import('moment')
  const { uniq } = await import('lodash')
  const { selections } = await import('../../core/constants/selections')

  const currentYear = moment().get('year')
  const allAvailableYear = uniq(
    selections.map(selection => selection.timestamp.get('year'))
  ).filter(year => year !== currentYear)

  return {
    paths: allAvailableYear.map(year => ({
      params: {
        year: year.toString(),
      },
    })),
    fallback: false,
  }
}

export default Page
