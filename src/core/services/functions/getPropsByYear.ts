export const getPropsByYear = async (year: number | string) => {
  const { sortBy } = await import('lodash')

  const { selections } = await import('../../constants/selections')
  const { getRawHentai } = await import('./getRawHentai')
  const { getOnlyEssentials } = await import('./getOnlyEssentials')

  const targetYear = Number(year as string)
  const filteredSelections = selections.filter(
    selection => selection.timestamp.get('year') === targetYear
  )

  // fail on dupes
  filteredSelections.map(section => {
    const checkFilter = selections.filter(o => o.code === section.code)

    if (checkFilter.length !== 1) {
      throw new Error(`${section.code} is duplicated! Stoping...`)
    }
  })
  const allSelectionsByTargetYear = await Promise.all(
    filteredSelections.map(async selection => {
      const rawHentai = await getRawHentai(selection.code)
      return {
        date: selection.timestamp.get('date'),
        gallery: getOnlyEssentials(rawHentai.response.data),
      }
    })
  )

  return sortBy(allSelectionsByTargetYear, 'date').reverse()
}
