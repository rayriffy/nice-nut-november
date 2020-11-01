import { FunctionComponent, memo } from 'react'

interface IProps {
  media: string
  title: string
  subtitle: string
}

export const MediaCard: FunctionComponent<IProps> = memo(props => {
  const { media, title, subtitle } = props

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <video src={media} loop autoPlay className="w-full h-auto" />
      <div className="px-4 py-4 sm:px-6">
        <h1 className="font-bold text-gray-800 text-xl">{title}</h1>
        <p className="text-gray-500">{subtitle}</p>
      </div>
    </div>
  )
})
