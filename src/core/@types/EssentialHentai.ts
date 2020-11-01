import { Hentai } from './Hentai'
import { TagType } from './TagType'

// Stripped down version contain only data we need
export interface EssentialHentai {
  id: number
  title: Hentai['title']
  cover: {
    src: string
    w: number
    h: number
  }
  tags: [TagType, string][]
  page: number
}
