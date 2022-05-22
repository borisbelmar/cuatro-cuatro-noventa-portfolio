import Projects from "components/views/Projects";
import getAllProjects from "lib/getAllProjects";

export async function getStaticProps() {
  const projects = await getAllProjects();
  return {
    props: {
      projects,
    },
  };
}

export default function ProjectsPage ({ projects }) {
  return <Projects projects={projects} />
}