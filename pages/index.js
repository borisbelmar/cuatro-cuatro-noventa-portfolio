import getHomeContent from 'lib/getHomeContent'
import Home from '../components/views/Home'

export async function getStaticProps () {
  const content = await getHomeContent()
  return {
    props: {
      content
    }
  }
}

export default function Index({ content }) {
  return (
    <Home content={content} />
  )
}
