import MainLayout from 'components/layout/MainLayout'
import ProjectGrid from '../../common/ProjectGrid'
import ReasonWhy from './components/ReasonWhy'
import VideoHome from './components/VideoHome'

export default function Home({ content }) {
  return (
    <MainLayout>
      <VideoHome />
      <ReasonWhy
        title={content['reason-why-title']}
        subtitle={content['reason-why-subtitle']}
      />
      <ProjectGrid projects={content.projects} />
    </MainLayout>
  )
}
