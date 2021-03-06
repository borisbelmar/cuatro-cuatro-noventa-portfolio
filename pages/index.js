import getHomeContent from 'lib/getHomeContent'
import Head from 'next/head'
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
    <>
      <Head>
        <title>Cuatro Cuatro Noventa</title>
        <meta name="description" content="Agencia de publicidad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home content={content} />
    </>
  )
}
