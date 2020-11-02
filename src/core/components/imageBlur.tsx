import { FunctionComponent, memo } from 'react'

import Image from 'next/image'

import { useStoreon } from '../../store'

export const ImageBlur: FunctionComponent<React.ComponentProps<
  typeof Image
>> = memo(props => {
  const { className, ...rest } = props
  const { settings } = useStoreon('settings')

  return (
    <Image
      className={`${className} overflow-hidden ${
        settings.safemode ? 'filter-blur transform scale-105' : ''
      }`}
      {...rest}
    />
  )
})
