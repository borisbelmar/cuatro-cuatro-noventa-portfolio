import MainLayout from "components/layout/MainLayout"
import ContentBlockFactory from "./ContentBlockFactory"

export default function SingleProject ({ project }) {
  const navTransparentAtStart = project.blocks[0]?.type === 'imageTitle'

  return (
    <MainLayout navTransparentAtStart={navTransparentAtStart}>
      {project.blocks.map((block, idx) => (
        <ContentBlockFactory key={idx} block={block} />
      ))}
      <div className="mb-8"/>
    </MainLayout>
  )
}