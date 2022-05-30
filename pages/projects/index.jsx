import Projects from "components/views/Projects";
import getAllProjects from "lib/getAllProjects";
import Head from "next/head";

export async function getStaticProps() {
  const projects = await getAllProjects();
  return {
    props: {
      projects,
    },
  };
}

export default function ProjectsPage ({ projects }) {
  return (
    <>
      <Head>
        <title>Proyectos - Cuatro Cuatro Noventa</title>
        <meta name="description" content="Proyectos de la agencia de publicidad Cuatro Cuatro Noventa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Projects projects={projects} />
    </>
  )
}