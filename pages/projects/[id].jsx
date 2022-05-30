import MainLayout from "components/layout/MainLayout"
import SingleProject from "components/views/SingleProject"
import getAllProjects from "lib/getAllProjects"
import getProjectById from "lib/getProjectById"
import Head from "next/head"
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
  return (
    <>
      <Head>
        <title>{project.title} - Cuatro Cuatro Noventa</title>
        <meta name="description" content={project.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SingleProject project={project} />
    </>
  )
}