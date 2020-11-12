export const getPropsByYear = async (year: number | string) => {
  const { sortBy } = await import('lodash')

  const { selections } = await import('../../constants/selections')
  const { getRawHentai } = await import('./getRawHentai')
  const { getOnlyEssentials } = await import('./getOnlyEssentials')

  const targetYear = Number(year as string)
  const allSelectionsByTargetYear = await Promise.all(
    selections
      .filter(selection => selection.timestamp.get('year') === targetYear)
      .map(async selection => {
        const rawHentai = await getRawHentai(selection.code)
        console.log(rawHentai)
        return {
          date: selection.timestamp.get('date'),
          gallery: getOnlyEssentials(rawHentai.response.data),
        }
      })
  )

  return sortBy(allSelectionsByTargetYear, 'date').reverse()
}
