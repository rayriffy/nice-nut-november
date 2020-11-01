import { FunctionComponent } from 'react'

import { EssentialHentai } from '../@types/EssentialHentai'

interface Props {
  year: number
  selections: {
    date: number
    gallery: EssentialHentai
  }[]
}

export const SelectionRenderer: FunctionComponent<Props> = props => {
  return (
    <div className="p-8">
      <div className="bg-gray-200 p-6 rounded-lg">
        <h1 className="text-xs uppercase pb-1 font-bold">Selections</h1>
        <p className="text-xs">{JSON.stringify(props.selections)}</p>
      </div>
    </div>
  )
}
