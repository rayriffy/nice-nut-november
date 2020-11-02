import { FunctionComponent, memo, useCallback } from 'react'
import { useStoreon } from '../../store'

export const BlurSwitch: FunctionComponent = memo(props => {
  const { settings, dispatch } = useStoreon('settings')

  const onToggle = useCallback(() => dispatch('setting/toggle', 'safemode'), [])

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={onToggle}
        role="checkbox"
        tabIndex={0}
        aria-checked="false"
        aria-labelledby="toggleLabel"
        className={`${
          settings.safemode ? 'bg-green-600' : 'bg-gray-200'
        } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
      >
        <span
          aria-hidden="true"
          className={`${
            settings.safemode ? 'translate-x-5' : 'translate-x-0'
          } inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
        ></span>
      </button>
      <span id="toggleLabel">
        <span className="text-sm leading-5 font-medium text-gray-900">
          Blur images
        </span>
      </span>
    </div>
  )
})
