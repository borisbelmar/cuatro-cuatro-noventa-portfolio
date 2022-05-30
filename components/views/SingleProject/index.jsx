import MainLayout from "components/layout/MainLayout"
import ContentBlockFactory from "./ContentBlockFactory"

export default function SingleProject ({ project }) {
  return (
    <MainLayout>
      {project.blocks.map((block, idx) => (
        <ContentBlockFactory key={idx} block={block} />
      ))}
      <div className="mb-8"/>
    </MainLayout>
  )
}