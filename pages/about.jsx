import Head from 'next/head'
import getAboutContent from 'lib/getAboutContent'
import About from 'components/views/About'

export async function getStaticProps () {
  const content = await getAboutContent()
  return {
    props: {
      content
    }
  }
}

export default function AboutPage({ content }) {
  return (
    <>
      <Head>
        <title>About - Cuatro Cuatro Noventa</title>
        <meta name="description" content="Agencia de publicidad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About content={content} />
    </>
  )
}
