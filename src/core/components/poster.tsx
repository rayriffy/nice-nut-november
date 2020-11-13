import { FunctionComponent, memo } from 'react'

import { BookOpen } from './icons/bookOpen'
import { tags } from '../constants/tags'
import { filterTagByType } from '../services/functions/filterTagByType'

import { EssentialHentai } from '../@types/EssentialHentai'
import { ImageBlur } from './imageBlur'

interface Props {
  selection: {
    date: number
    gallery: EssentialHentai
  }
}

export const Poster: FunctionComponent<Props> = memo(props => {
  const { selection } = props

  return (
    <div className="col-span-1">
      <div className="relative">
        <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-gray-700 px-2 py-1 text-white text-sm rounded z-30">
          {selection.date} November
        </div>
        <a
          href={`https://h.rayriffy.com/g/${selection.gallery.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 w-full bg-black-overlay z-10 transition ease-in-out duration-200 opacity-0 hover:opacity-100 text-white flex flex-col justify-between px-4 py-8 md:px-5 lg:px-6 md:py-9 lg:py-10 rounded-md backdrop-blur">
            <div>
              <p className="font-semibold truncate text-md sm:text-lg md:text-xl">
                {selection.gallery.title.pretty}
              </p>
              <div className="pt-2 sm:pt-4 md:pt-6 flex justify-evenly text-center text-xs sm:text-sm md:text-md">
                {tags.map(tag => {
                  const amount = filterTagByType(selection.gallery.tags, tag[0])
                    .length

                  if (amount === 0) {
                    return null
                  } else {
                    return (
                      <div key={`poster-${selection.gallery.id}-tag-${tag[0]}`}>
                        <div
                          className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full ${tag[1]} mx-auto`}
                        />
                        <p className="pt-0.5 md:pt-1">{amount}</p>
                      </div>
                    )
                  }
                })}
              </div>
            </div>
            <div className="pt-1 flex">
              <div className="flex items-center pr-2">
                <BookOpen className="w-8 h-8 pr-2" /> {selection.gallery.page}
              </div>
            </div>
          </div>
          <div className="rounded-md overflow-hidden">
            <ImageBlur
              src={selection.gallery.cover.src}
              width={selection.gallery.cover.w}
              height={selection.gallery.cover.h}
              alt="cover"
            />
          </div>
        </a>
      </div>
    </div>
  )
})
