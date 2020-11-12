import { restHandler } from './fetch'

import { RawHentai } from '../../@types/RawHentai'

interface APIResponse {
  status: 'success' | 'failed'
  code: number
  response: {
    message: string
    data: RawHentai
  }
}

export const getRawHentai = async (id: number) =>
  await restHandler<APIResponse>(`https://h.api.rayriffy.com/v1/gallery/${id}`)
