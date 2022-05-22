import fs from 'fs'
import path from 'path'

export default async function getAllProjects() {
  const projectsFileNames = fs.readdirSync(path.join(process.cwd(), 'data/projects'))
  const projects = projectsFileNames.map(fileName => {
    const id = fileName.replace(/\.json$/, '');
    const projectFilePath = path.join(process.cwd(), 'data/projects', fileName)
    const projectContent = fs.readFileSync(projectFilePath, 'utf8')
    return {
      id,
      content: JSON.parse(projectContent),
    }
  })
  return projects.sort((a, b) => { return a.content.order - b.content.order })
}
