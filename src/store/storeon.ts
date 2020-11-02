import { createStoreon } from 'storeon'

import { persistState } from '@storeon/localstorage'
import { crossTab } from '@storeon/crosstab'

import { settings } from './states/settings'
import { SettingsStore } from './@types/SettingsStore'
import { SettingsEvent } from './@types/SettingsEvent'

export type Store = SettingsStore
export type Event = SettingsEvent

export const store = createStoreon<Store, Event>([
  settings,
  ...(typeof window !== 'undefined'
    ? [persistState(['settings']), crossTab()]
    : []),
])
