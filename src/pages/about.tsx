import { GetStaticProps, NextPage } from 'next'

import Markdown from 'markdown-to-jsx'

interface Props {
  md: string
}

const Page: NextPage<Props> = props => {
  return (
    <div className="prose mx-auto">
      <Markdown children={props.md} />
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async context => {
  const fs = await import('fs')
  const path = await import('path')

  const filePath = path.join(process.cwd(), 'src/core/assets/about.md')
  const file = fs.readFileSync(filePath).toString()

  return {
    props: {
      md: file,
    },
  }
}

export default Page
