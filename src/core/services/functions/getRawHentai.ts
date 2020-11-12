import { restHandler } from './fetch'

import { RawHentai } from '../../@types/RawHentai'

export const getRawHentai = async (id: number) =>
  await restHandler<RawHentai>(`https://h.api.rayriffy.com/v1/gallery/${id}`)
