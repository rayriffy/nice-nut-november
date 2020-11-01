import { Fragment } from 'react'

import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

interface Props {
  currentYear: number
  year: number[]
}

const Page: NextPage<Props> = props => {
  const { currentYear, year } = props

  return (
    <Fragment>
      <h1 className="text-4xl font-bold pb-6 font-gray-800">Archives</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 items-center">
        <div className="col-span-1">
          <Link href="/">
            <a>
              <div className="bg-gradient-to-tr from-orange-400 to-red-400 rounded-md col-span-1 font-bold text-lg flex justify-center items-center">
                <div className="text-center uppercase text-white p-4">
                  <div>{currentYear}</div>
                  <div>current</div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {year.map(year => (
          <div key={`archive-year-${year}`} className="col-span-1">
            <Link href={`/archive/${year}`}>
              <a>
                <div className="bg-gradient-to-r from-gray-200 to-gray-300 rounded-md col-span-1 font-bold text-lg flex justify-center items-center">
                  <div className="text-center uppercase text-gray-700 p-4">
                    {year}
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { default: moment } = await import('moment')
  const { uniq } = await import('lodash')
  const { selections } = await import('../../core/constants/selections')

  const currentYear = moment().get('year')
  const allAvailableYear = uniq(
    selections.map(selection => selection.timestamp.get('year'))
  ).filter(year => year !== currentYear)

  return {
    props: {
      currentYear,
      year: allAvailableYear,
    },
  }
}

export default Page
