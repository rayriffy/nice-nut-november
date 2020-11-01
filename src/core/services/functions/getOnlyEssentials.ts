import { getImageUrl } from './getImageUrl'

import { RawHentai } from '../../@types/RawHentai'
import { EssentialHentai } from '../../@types/EssentialHentai'

export const getOnlyEssentials = (raw: RawHentai): EssentialHentai => ({
  id: Number(raw.id),
  title: raw.title,
  cover: {
    src: getImageUrl({
      image: raw.images.cover,
      type: 'cover',
      mediaId: raw.media_id,
    }),
    w: raw.images.cover.w,
    h: raw.images.cover.h,
  },
  tags: raw.tags.map(tag => [tag.type, tag.name]),
  page: raw.num_pages,
})
