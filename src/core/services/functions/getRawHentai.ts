import { restHandler } from './fetch'

import { RawHentai } from '../../@types/RawHentai'

export const getRawHentai = async (id: number) =>
  await restHandler<RawHentai>(`https://nhentai.net/api/gallery/${id}`)
