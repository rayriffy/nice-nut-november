import { Fragment, FunctionComponent, useEffect, useState, memo } from 'react'

import { Poster } from './poster'

import { EssentialHentai } from '../@types/EssentialHentai'

interface Props {
  year: number
  selections: {
    date: number
    gallery: EssentialHentai
  }[]
}

export const SelectionRenderer: FunctionComponent<Props> = memo(props => {
  const { year, selections } = props

  const [debug, setDebug] = useState<boolean>(
    process.env.NODE_ENV !== 'production'
  )
  useEffect(() => {
    window.addEventListener('message', event => {
      if (event.data === 'nnn/debug') {
        setDebug(o => !o)
      }
    })

    return window.removeEventListener('message', () => {})
  }, [])

  return (
    <Fragment>
      {debug && (
        <div className="bg-gray-200 p-6 rounded-lg mb-6">
          <h1 className="text-xs uppercase pb-1 font-bold">Selections</h1>
          <p className="text-xs break-words">{JSON.stringify(selections)}</p>
        </div>
      )}
      <h1 className="text-4xl font-bold pb-6 font-gray-800">
        {year}{' '}
        <span className="text-2xl">
          ({((selections.length * 100) / 30).toFixed(2)} % complete)
        </span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {selections.map(selection => (
          <Poster
            key={`poster-${selection.gallery.id}`}
            selection={selection}
          />
        ))}
      </div>
    </Fragment>
  )
})
