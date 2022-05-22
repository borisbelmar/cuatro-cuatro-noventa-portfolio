import MainLayout from "components/layout/MainLayout"
import SingleProject from "components/views/SingleProject"
import getAllProjects from "lib/getAllProjects"
import getProjectById from "lib/getProjectById"
import ContentBlockFactory from "../../components/views/SingleProject/ContentBlockFactory"

export async function getStaticPaths() {
  const projects = await getAllProjects()
  return {
    paths: projects.map(project => ({
      params: { id: project.id },
    })),
    fallback: false,
  }
}

export async function getStaticProps (ctx) {
  const project = await getProjectById(ctx.params.id)
  return {
    props: {
      project
    }
  }
}

export default function ProjectPage ({ project }) {
  return <SingleProject project={project} />
}