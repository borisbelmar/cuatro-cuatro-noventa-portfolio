import ProjectGrid from "components/common/ProjectGrid";
import MainLayout from "components/layout/MainLayout";

export default function Projects ({ projects }) {
  return (
    <MainLayout>
      <div className="mt-24">
        <ProjectGrid projects={projects} />
      </div>
    </MainLayout>
  )
}