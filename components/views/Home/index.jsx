import MainLayout from 'components/layout/MainLayout'
import Head from 'next/head'
import ProjectGrid from '../../common/ProjectGrid'
import ReasonWhy from './components/ReasonWhy'
import VideoHome from './components/VideoHome'

export default function Home({ content }) {
  return (
    <div>
      <Head>
        <title>Cuatro Cuatro Noventa</title>
        <meta name="description" content="Agencia de publicidad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout navTransparentAtStart>
        <VideoHome />
        <ReasonWhy
          title={content['reason-why-title']}
          subtitle={content['reason-why-subtitle']}
        />
        <ProjectGrid projects={content.projects} />
      </MainLayout>
    </div>
  )
}
