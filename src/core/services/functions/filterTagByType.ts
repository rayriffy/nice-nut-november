import { EssentialHentai } from '../../@types/EssentialHentai'
import { TagType } from '../../@types/TagType'

export const filterTagByType = (
  tags: EssentialHentai['tags'],
  type: TagType
): EssentialHentai['tags'] => {
  return tags.filter(tag => tag[0] === type)
}
